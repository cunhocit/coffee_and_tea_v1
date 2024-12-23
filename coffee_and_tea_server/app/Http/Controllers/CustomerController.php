<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customers;
use App\Models\History;
use App\Security\CryptAES;
use App\Valid\AuthValid;
use Illuminate\Support\Facades\Log;

class CustomerController extends Controller
{

    public function getAllCus()
    {
        $data = Customers::all();
        return response()->json(['data' => $data]);
    }


    public function getAllHistory()
    {
        $data = History::all();
        return response()->json($data);
    }


    public function updateCus(Request $request)
    {
        $authValid = new AuthValid();

        $customer = Customers::find($request->input('id'));

        if (!$customer) {
            return response()->json([
                'message' => 'Khách hàng không tồn tại'
            ], 404);
        }

        if ($authValid->emailExists($request->input('email'))) {
            return response()->json([
                'message' => 'Email đã tồn tại trong hệ thống'
            ], 400);
        }

        try {
            $customer->name = $request->input('name');
            $customer->gender = $request->input('gender');
            $customer->phone = $request->input('phone');
            $customer->email = $request->input('email');
            $customer->birth_date = $request->input('birth_date');
            $customer->address = $request->input('address');
            $customer->balance = $request->input('balance');

            $customer->save();

            return response()->json([
                'message' => 'Cập nhật khách hàng thành công',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }

    public function updateAvatarCus(Request $request) {
        try {
            $customer = Customers::where('id', $request->input('id'))->first();
            $file = $request->file('file');

            if (!$customer || !$file) {
                return response()->json([
                    'message' => 'Dữ liệu rỗng'
                ], 200);
            }

            // Tạo tên file mới
            $file_name = $customer->id . '_' . $request->input('time') . '.' . $file->getClientOriginalExtension();

            // Tạo instance của Intervention Image
            $storage_path = storage_path('app/public/customers');

            if (!file_exists($storage_path)) {
                mkdir($storage_path, 0777, true);
            }
            if ($customer->image && file_exists(storage_path('app/public/customers/' . $customer->image))) {
                unlink(storage_path('app/public/customers/' . $customer->image));
            }
            $file->move($storage_path, $file_name);

            $customer->image = $file_name;
            $customer->save();

             return response()->json([
                'message' => 'Cập nhật thành công'
            ], 200);
         } catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getCustomerById(Request $request) {
        try {
            $id_ = $request->input('id');
            $customer = Customers::where('id', $id_)->first();
            return response()->json([
                'data' => $customer
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage()
            ]);
        }
    }

    public function deleteCustomer(Request $request) {
        try {
            $customer = Customers::where('id', $request->input('id'))->first();
            if ($customer) {
                $customer->delete();
            }
            return response()->json([
                'message' => "Xóa khách hàng thành công!"
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage()
            ]);
        }
    }


    public function changePasswordCustomer(Request $request) {
        try {
            Log::info($request->all());
            $customer = Customers::where('id', CryptAES::decryptAES($request->input('id')))->first();

            $password = $request->input('password');
            $new_password = $request->input('new_password');

            if ($customer && $password && $new_password
                && $password === $customer->password
            ){
                $customer->password = $new_password;
                $customer->save();

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


}
