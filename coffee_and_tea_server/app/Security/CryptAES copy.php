<?php

namespace App\Security;

use DateTime;

class CryptAES2 {

    static function generateAESKey() {
        return random_bytes(32);
    }

    static function getIVCode() {
        return random_bytes(16);
    }

    static function timeStamp() {
        $now = new DateTime();
        return [$now->format('H'), $now->format('i'), $now->format('s')];
    }

    static function transformKey($AESKey, $iv, $timeStr) {
        $timeShift = intval(substr($timeStr, 0, 2)) * intval(substr($timeStr, 2, 2)) * intval(substr($timeStr, 4, 2));
        $iterations = max(1000, min(10000, $timeShift * 10));

        // Convert to base64 first like JavaScript
        $AESKeyBase64 = base64_encode($AESKey);
        $newAESKey = hash_pbkdf2(
            'sha256',
            $AESKeyBase64,
            $iv,
            $iterations,
            32,
            true
        );

        return [
            'newAESKey' => $newAESKey,
            'iv' => $iv,
            'timeStr' => $timeStr
        ];
    }

    static function mixEncodedData($AESKey, $encryptData, $iv, $timeStr) {
        // Convert to base64 like CryptoJS
        $AESKeyBase64 = base64_encode($AESKey);
        $ivBase64 = base64_encode($iv);
        $timeStrBase64 = base64_encode($timeStr);
        $encryptDataBase64 = base64_encode($encryptData);

        $AESKeyParts = [
            substr($AESKeyBase64, 0, 11),
            substr($AESKeyBase64, 11, 11),
            substr($AESKeyBase64, 22, 11),
            substr($AESKeyBase64, 33)
        ];

        $ivParts = [
            substr($ivBase64, 0, 6),
            substr($ivBase64, 6, 12),
            substr($ivBase64, 12, 18),
            substr($ivBase64, 18)
        ];

        $mixedParts = '';
        for ($i = 0; $i < 4; $i++) {
            $mixedParts .= $AESKeyParts[$i] . $ivParts[$i];
        }

        return substr($encryptDataBase64, 0, 8) .
               substr($mixedParts, 0, 32) .
               $timeStrBase64 .
               substr($mixedParts, 32) .
               substr($encryptDataBase64, 8);
    }

    public static function encryptAES($data) {
        $AESKey = self::generateAESKey();
        $ivCode = self::getIVCode();
        $timestamp = self::timeStamp();
        $timeStr = implode('', array_map(fn($unit) => str_pad($unit, 2, '0', STR_PAD_LEFT), $timestamp));

        $transform = self::transformKey($AESKey, $ivCode, $timeStr);

        // Encrypt using openssl like CryptoJS.AES.encrypt
        $encryptData = openssl_encrypt(
            $data,
            'AES-256-CBC',
            $transform['newAESKey'],
            OPENSSL_RAW_DATA,
            $transform['iv']
        );

        return self::mixEncodedData($AESKey, $encryptData, $transform['iv'], $timeStr);
    }

    public static function decryptAES($encodedData) {
        try {
            $encryptDataBase64 = substr($encodedData, 0, 8) . substr($encodedData, 84);
            $mixedPartsBase64 = substr($encodedData, 8, 32) . substr($encodedData, 48, 36);
            $timeStrBase64 = substr($encodedData, 40, 8);

            $timeStr = base64_decode($timeStrBase64);
            $parse = self::parseMixedParts($mixedPartsBase64);

            $transform = self::transformKey($parse['AESKey'], $parse['ivCode'], $timeStr);

            $decryptText = openssl_decrypt(
                base64_decode($encryptDataBase64),
                'AES-256-CBC',
                $transform['newAESKey'],
                OPENSSL_RAW_DATA,
                $transform['iv']
            );

            if ($decryptText === false) {
                throw new \Exception("Decryption failed");
            }

            return $decryptText;
        } catch (\Exception $e) {
            throw new \Exception("Failed to decrypt data: " . $e->getMessage());
        }
    }

    static function parseMixedParts($mixedParts) {
        $AESKeyParts = [];
        $ivParts = [];

        for ($i = 0; $i < 4; $i++) {
            $AESKeyParts[] = substr($mixedParts, $i * 17, 11);
            $ivParts[] = substr($mixedParts, $i * 17 + 11, 6);
        }

        return [
            'AESKey' => base64_decode(implode('', $AESKeyParts)),
            'ivCode' => base64_decode(implode('', $ivParts))
        ];
    }

    public static function hashPassword($password) {
        return hash('sha256', $password);
    }
}
