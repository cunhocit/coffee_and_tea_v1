<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Customers;
use App\Models\Orders;
use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\Revenue;
use App\Security\CryptAES;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;

class PaymentController extends Controller
{
    public function payment(Request $request) {
        try {
            Log:info($request->input('listProduct'));

            $cus_id = CryptAES::decryptAES($request->input('cus_id'));
            $listProducts = $request->input('listProduct');
            $transport = $request->input('transport');
            $pay_method = $request->input('pay_method');
            $price = $request->input('price');

            $customer = Customers::where('id', $cus_id)->first();

            if (empty($customer->address)) {
                return response()->json([
                    'message' => 'Vui lòng cập nhật địa chỉ trước khi đặt hàng!'
                ], 403);
            }

            if ($customer->balance < $price && $pay_method === 'Thanh toán bằng tài khoản') {
                return response()->json([
                    'message' => 'Số tiền không đủ, vui lòng nạp thêm tiền vào tài khoản. <3!'
                ], 403);
            }

            foreach ($listProducts as $product) {
                // Truy cập các phần tử của mảng
                $product_name = $product['name'];
                $product_quantity = $product['quantity'];
                $product_category = $product['category'];

                // Tìm sản phẩm trong cơ sở dữ liệu
                $product_find = Products::where('name', $product_name)->first();

                if ($product_find->quantity < $product_quantity) {
                    return response()->json([
                        'message' => 'Số lượng bạn đặt quá lớn, sản phẩm chỉ còn ' . $product_find->quantity . ' sản phẩm'
                    ], 403);
                }

                Orders::create([
                    'email' => $customer->email,
                    'cus_name' => $customer->name,
                    'phone' => $customer->phone,
                    'address' => $customer->address,
                    'category' => $product_category,
                    'product' => $product_name,
                    'quantity' => $product_quantity,
                    'price' => $this->calPrice($product_find),
                    'pay_method' => $pay_method,
                    'status' => 'Đang chờ',
                    'created_at' => now(),
                    'updated_at' => now(),
                    'transport' => $transport,
                ]);

                // Revenue::create([
                //     'category' => $product_category,
                //     'product' => $product_name,
                //     'quantity' => $product_quantity,
                //     'revenue' => $this->calPrice($product_find),
                //     'created_at' => now(),
                //     'updated_at' => now()
                // ]);

                // Cập nhật số lượng sản phẩm sau khi đặt hàng
                $quantity_new = $product_find->quantity - $product_quantity;
                $product_find->quantity = $quantity_new;
                $product_find->save();
            }

            return response()->json([
                'message' => 'Đặt hàng thành công!'
            ], 200);
        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }

    private static function calPrice(Products $product) {
        $price = $product->price;
        if (!empty($product->discount_percentage)) {
            $percent = $product->discount_percentage/100.0;
            $newPrice = $price - $percent * $price;
            return $newPrice;
        }
        return $price;
    }

}
