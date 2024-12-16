<?php
namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Models\Orders;
use App\Models\Products;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class AdminController extends Controller {

    public function getAdmin(Request $request) {
        try {
            $admin = Admin::where('id', $request->id)->first();

            if (!$admin) {
                return response()->json([
                    'data' => 'Không tìm thấy admin'
                ], 404);
            }

            return response()->json([
                'admin' => $admin
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi' . $e->getMessage()
            ], 500);
        }
    }

    public function updateAdmin(Request $request) {
        try {
            $admin = Admin::where('id', $request->input('id'))->first();

            if (!$admin) {
                return response()->json([
                    'data' => 'Không tìm thấy admin'
                ], 404);
            }

            $admin->name = $request->input('name');
            $admin->gender = $request->input('gender');
            $admin->birth_date = $request->input('birth_date');
            $admin->email = $request->input('email');
            $admin->phone = $request->input('phone');
            $admin->save();
            return response()->json([
                'message' => 'Cập nhật thành công'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi' . $e->getMessage()
            ], 500);
        }
    }

    public function updateAvatarAdmin(Request $request) {
        try {
            $admin = Admin::where('id', $request->input('id'))->first();
            $file = $request->file('file');

            if (!$admin || !$file) {
                return response()->json([
                    'message' => 'Dữ liệu rỗng'
                ], 200);
            }

            // Tạo tên file mới
            $file_name = $admin->id . '_' . time() . '.' . $file->getClientOriginalExtension();

            // Tạo instance của Intervention Image
            $storage_path = public_path('storage/admins');

            if (!file_exists($storage_path)) {
                mkdir($storage_path, 0777, true);
            }
            if ($admin->image && file_exists(public_path('storage/admins/' . $admin->image))) {
                unlink(public_path('storage/admins/' . $admin->image));
            }
            $file->move($storage_path, $file_name);

            $admin->image = $file_name;
            $admin->save();

             return response()->json([
                'message' => 'Cập nhật thành công'
            ], 200);
         } catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }

    public function changePasswordAdmin(Request $request) {
        try {
            $admin = Admin::where('id', $request->input('id'))->first();
            
            $password = $request->input('password');
            $new_password = $request->input('new_password');

            if ($admin && $password && $new_password
                && $password === $admin->password
            ){
                $admin->password = $new_password;
                $admin->save();

                return response()->json([
                    'message' => 'Đổi mật khẩu thành công'
                ]);
            }
            return response()->json([
                'message' => 'Mật khẩu không chính xác'
            ]);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ]);
        }
    }

    public function getHeader(Request $request) {
        try {
            $admin = Admin::where('id', $request->input('id'))->first();

            if ($admin) {

                $products = Products::all();
                $customers = Products::all();

                $data = [
                    'admin' => $admin,
                    'products' => $products ? $products : [],
                    'customers' => $customers ? $customers : []
                ];

                return response()->json([
                    'data' => $data
                ], 200);
            }else {
                return response()->json([
                    'message' => 'Tài khoản không tồn tại'
                ], 403);
            }

        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi xảy ra, ' . $e->getMessage()
            ], 500);
        }
    }
}
