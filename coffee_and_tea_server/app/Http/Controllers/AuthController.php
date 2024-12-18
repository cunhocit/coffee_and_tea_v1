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

class AuthController extends Controller {

    // Admin register API
    public function AdminRegister(Request $request) {

        try {

            $name = CryptAES::decryptAES($request->input('name'));
            $email = CryptAES::decryptAES($request->input('email'));
            $phone = CryptAES::decryptAES($request->input('phone'));

            if (!$name || !$email || !$phone) {
                return response()->json([
                    'message' => 'Dữ liệu giải hóa không hợp lệ'
                ], 400);
            }

            if (Admin::where('email', $email)->exists()) {
                return response()->json([
                    'message' => 'Email đã tồn tại'
                ], 400);
            }

            Admin::create([
                'name' => $name,
                'gender' => 'Khác',
                'email' => $email,
                'password' => $request->input('password'),
                'phone' => $phone,
                'verify' => 0
            ]);

            $this->SendEmail($email, 'verify_account', 'admin');

            return response()->json([
                'message' => 'Đăng ký thành công.\nVui lòng kiểm tra email để xác thực tài khoản.\nXin cảm ơn!',
            ], 201);

        } catch (\Exception $e) {

            return response()->json([
                'message' => 'Đăng ký thất bại, ' . $e->getMessage()
            ], 400);

        }

    }


    // Admin login API
    public function AdminLogin(Request $request) {

        try {

            $email = CryptAES::decryptAES($request->input('email'));
            $password = $request->input('password');

            $admin = Admin::where('email', $email)->first();

            if (!$admin) {
                return response()->json([
                    'message' => 'Email không tồn tại'
                ], 404);
            }

            // check passs
            if ($password === $admin->password) {
                // đúng => check verify: chưa xác thực => xác thực => đăng nhập
                if ($admin->verify === 0) {

                    $this->SendEmail($email, 'verify_account', 'admin');

                    return response()->json([
                        'message' => 'Tài khoản chưa được kích hoạt'
                        .'Vui lòng kiểm tra email: '
                        .$email
                        .' để kích hoạt tài khoản.Thanks!'
                    ], 403);

                }

                // tạo token jwt
                $customeClaims = [
                    'iss' => 'coffee_and_tea_server', // tên dự án
                    'iat' => now()->timestamp, // thời gian tạo token
                    'exp' => now()->addMinutes(config('jwt.ttl'))->timestamp, // thời gian hết hạn
                    'nbf' => now()->timestamp, // thời gian bắt đầu
                    'sub' => $admin->id, // id admin
                    'jti' => Str::uuid()->toString() // id token
                ];
                $jwt_token = JWTAuth::fromUser($admin, $customeClaims);

                // trả response json => client
                return response()->json([
                    'message' => 'Đăng nhập thành công',
                    'jwt_token' => $jwt_token,
                    'id_admin' => $admin->id,
                    'exp' => now()->addMinutes(config('jwt.ttl'))->timestamp
                ], 200);
            }

            return response()->json([
                'message' => 'Mật khẩu không chính xác!'
            ], 401);

        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Đăng nhập thất bại, ' . $e->getMessage()
            ], 500);
        }
    }

    public function AdminLogOut() {
        try {
            $token = JWTAuth::getToken();
            JWTAuth::invalidate($token);
            return response()->json([
                'message' => 'Đăng xuất thành công.'
            ], 200);

        }catch(\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json([
                'message' => 'Token không hợp lệ'
            ], 401);
        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Đăng xuất thất bại, có lỗi xảy ra! ' . $e->getMessage()
            ], 500);
        }
    }

    // Admin forgot password API
    public function AdminForgotPassword(Request $request) {
        try {
            $email = CryptAES::decryptAES($request->input('email'));

            // check email đăng nhập
            if (!Admin::where('email', $email)->exists()) {
                return response()->json([
                    'message' => 'Email không tồn tại'
                ], 404);
            }

            $this->SendEmail($email, 'forgot_password', 'admin');

            return response()->json([
                'message' => 'Kiểm tra email để lấy lại mật khẩu'
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Gửi mật khẩu mới thất bại, ' . $e->getMessage()
            ], 500);
        }
    }


/* --------------------------------------------------------------------------------------------------------- */

    // Gửi mail xác thực + lấy lại mật khẩu
    public static function SendEmail($email, $handle, $type) {
        try {
            $token = Str::random(64);
            $admin = new Admin();
            $customer = new Customers();
            $name = '';

            if ($type === 'admin') {
                $admin = Admin::where('email', $email)->first();
                $name = $admin->name;
            }
            if ($type === 'customer'){
                $customer = Customers::where('email', $email)->first();
                $name = $customer->name;
            }

            // handle === true: xác thực tài khoản
            // handle === false: lấy lại mật khẩu
            if ($handle === 'verify_account') {
                // xóa token cũ, phòng trường hợp gửi mail xác nhận lần 2
                VerifyEmail::where('email', $email)->delete();
                VerifyEmail::create([
                    'email' => $email,
                    'token' => $token,
                    'expires_at' => now()->addMinutes(5)
                ]);

                Mail::send('emails.active_account', [
                    'name' => $name,
                    'email' => $email,
                    'token' => $token,
                    'type' => $type,
                    'expires_at' => now()->addMinutes(5)
                ], function($message) use ($email, $admin) {
                    $message->to($email, $admin->name)
                            ->subject('Xác thực tài khoản Coffee & Tea');
                });
            }

            if ($handle === 'forgot_password'){
                PasswordReset::where('email', $email)->delete();
                PasswordReset::create([
                    'email' => $email,
                    'token' => $token,
                    'expires_at' => now()->addMinutes(5)
                ]);

                Mail::send('emails.forgot_password', [
                    'name' => $name,
                    'email' => $email,
                    'token' => $token,
                    'type' => $type,
                    'expires_at' => now()->addMinutes(5)
                ], function($message) use ($email, $name) {
                    $message->to($email, $name,)
                            ->subject('Lấy lại mật khẩu tài khoản Coffee & Tea');
                });
            }

            return true;
        }catch (\Exception $e) {
            Log::error('Email verification error: ' . $e->getMessage());
            throw $e;
        }
    }

    /*  Xác thực token
        Route::get('/VerifyToken/{email}/{token}/{handle}',
            [AuthController::class, 'VerifyToken'])->name('verify.token');
        Ánh xạ route với function VerifyToken(),
        $token là token được gửi qua email
        $email là email đăng ký
        Nếu token hợp lệ, cập nhật trạng thái admin và xóa token
        Nếu token hết hạn, báo lỗi và gửi lại email xác thực mới
     */
    public function VerifyToken($email, $token, $handle, $type) {
        try {
            if ($handle == 'verify_account') {
                $verifyEmail = VerifyEmail::where('email', $email)
                                        ->where('token', $token)
                                        ->first();
            }
            if ($handle == 'forgot_password') {
                $verifyEmail = PasswordReset::where('email', $email)
                                        ->where('token', $token)
                                        ->first();
            }

            // kiểm tra tồn tại email và token
            if (!$verifyEmail) {
                $this->SendEmail($email, $handle, $type);
                return redirect()->route('verify.page')->with([
                    'status' => 'invalid',
                ]);
            }

            // Kiểm tra token hết hạn
            // now() time hiện tại so sánh bằng gt() => kiểm tra nếu now() > expires_at => true: token hết hạn
            if (now()->gt($verifyEmail->expires_at)) {
                $this->SendEmail($email, $handle, $type);
                return redirect()->route('verify.page')->with([
                    'status' => 'expired'
                ]);
            }

            // Cập nhật dữ liệu phụ thuộc vào handle
            if ($handle == 'verify_account') {
                if ($type === 'admin') {
                    Admin::where('email', $email)->update([
                        'verify' => 1,
                        'verify_at' => now()
                    ]);
                }
                if ($type === 'customer') {
                    Customers::where('email', $email)->update([
                        'verify' => 1,
                        'verify_at' => now()
                    ]);
                }
            }
            if ($handle == 'forgot_password'){
                $newPassword = self::GetNewPassword();
                if ($type === 'admin') {
                    Admin::where('email', $email)->update([
                        'password' => CryptAES::hashPassword($newPassword)
                    ]);
                }
                if ($type === 'customer') {
                    Customers::where('email', $email)->update([
                        'password' => CryptAES::hashPassword($newPassword)
                    ]);
                }
            }

            // Xóa token trong database sau khi kích hoạt
            $verifyEmail->delete();

            // chuyển hướng đến verify_page
            return redirect()->route('verify.page')->with([
                'status' => $handle === 'forgot_password' ? 'new-password' : 'success',
                'message' => $handle === 'forgot_password' ? $newPassword : ''
            ]);

        } catch (\Exception $e) {
            Log::error('Account activation error: ' . $e->getMessage());
                return redirect()->route('verify.page')->with([
                    'status' => 'error',
                    'message' => $e->getMessage()
            ]);
        }
    }

    public function GetNewPassword() {
        return str_pad(random_int(0, 99999999), 8, '0', STR_PAD_LEFT);
    }
}




