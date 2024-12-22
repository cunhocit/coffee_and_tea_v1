<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Tymon\JWTAuth\Facades\JWTAuth;

use App\Models\Admin;
use App\Models\Customers;
use App\Models\PasswordReset;
use App\Models\VerifyEmail;
use App\Security\CryptAES;
use App\Http\Controllers\AuthController;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class AuthCustomerController extends Controller
{

    public function CustomerRegister(Request $request)
    {
        try {
            $name = CryptAES::decryptAES($request->input('name'));
            $email = CryptAES::decryptAES($request->input('email'));
            $phone = CryptAES::decryptAES($request->input('phone'));

            if (!$name || !$email || !$phone) {
                return response()->json([
                    'message' => 'Dữ liệu giải hóa không hợp lệ'
                ], 400);
            }

            if (Customers::where('email', $email)->exists()) {
                return response()->json([
                    'message' => 'Email đã tồn tại'
                ], 400);
            }

            Customers::create([
                'name' => $name,
                'gender' => 'Khác',
                'email' => $email,
                'password' => $request->input('password'),
                'phone' => $phone,
                'balance' => 0,
                'verify' => 0,
                'status' => 'offline'
            ]);

            AuthController::SendEmail($email, 'verify_account', 'customer');

            return response()->json([
                'message' => 'Đăng ký thành công.\nVui lòng kiểm tra email để xác thực tài khoản.\nXin cảm ơn!',
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Đăng ký thất bại, ' . $e->getMessage()
            ], 400);
        }
    }

    public function CustomerLogin(Request $request)
    {
        try {

            $email = CryptAES::decryptAES($request->input('email'));
            $password = $request->input('password');

            $customer = Customers::where('email', $email)->first();

            if (!$customer) {
                return response()->json([
                    'message' => 'Email không tồn tại'
                ], 404);
            }

            // check passs
            if ($password === $customer->password) {
                // đúng => check verify: chưa xác thực => xác thực => đăng nhập
                if ($customer->verify === 0) {

                    $this->SendEmail($email, 'verify_account', 'customer');

                    return response()->json([
                        'message' => 'Tài khoản chưa được kích hoạt'
                            . 'Vui lòng kiểm tra email: '
                            . $email
                            . ' để kích hoạt tài khoản.Thanks!'
                    ], 403);
                }

                $customer->status = 'online';
                Customers::where('email', $email)->update(['status' => 'online']);

                // tạo token jwt
                $customeClaims = [
                    'iss' => 'coffee_and_tea_server', // tên dự án
                    'iat' => now()->timestamp, // thời gian tạo token
                    'exp' => now()->addMinutes(config('jwt.ttl'))->timestamp, // thời gian hết hạn
                    'nbf' => now()->timestamp, // thời gian bắt đầu
                    'sub' => $customer->id, // id admin
                    'jti' => Str::uuid()->toString() // id token
                ];
                $jwt_token = JWTAuth::fromUser($customer, $customeClaims);

                Log::info('Customer ' . $customer->name . ' logged in');

                // trả response json => client
                return response()->json([
                    'message' => 'Đăng nhập thành công',
                    'jwt_token' => $jwt_token,
                    'cus_id' => $customer->id,
                    'exp' => now()->addMinutes(config('jwt.ttl'))->timestamp
                ], 200);
            }

            return response()->json([
                'message' => 'Mật khẩu không chính xác!'
            ], 401);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Đăng nhập thất bại, ' . $e->getMessage()
            ], 500);
        }
    }

    public function CustomerPasswordReset(Request $request)
    {
        try {
            $email = CryptAES::decryptAES($request->input('email'));

            // check email đăng nhập
            if (!Customers::where('email', $email)->exists()) {
                return response()->json([
                    'message' => 'Email không tồn tại'
                ], 404);
            }

            AuthController::SendEmail($email, 'forgot_password', 'customer');

            return response()->json([
                'message' => 'Kiểm tra email để lấy lại mật khẩu'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Gửi mật khẩu mới thất bại, ' . $e->getMessage()
            ], 500);
        }
    }
}
