<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Orders;
use App\Models\OrderStatus;
use App\Models\PayMethods;
use App\Models\Products;
use Illuminate\Support\Facades\Storage;
class OrderController extends Controller {

    public function updateOrder(Request $request) {
        try {
            $order = Orders::where('id', $request->id)->first();

            if (!$order) {
                return response()->json([
                    'message' => 'Không tìm thấy đơn hàng'
                ], 404);
            }

            $product = Products::where('name', $request->input('product'))->first();
            if ($product->quantity < $request->input('quantity')) {
                return response()->json([
                    'message' => 'Số lượng sản phẩm hiện tại chỉ còn ' . $product->quantity
                ], 403);
            }

            $order->address = $request->address;
            $order->phone = $request->phone;
            $order->product = $request->product;
            $order->quantity = $request->quantity;
            $order->pay_method = $request->pay_method;
            $order->status = $request->status;

            $order->save();
            return response()->json([
                'message' => 'Cập nhật đơn hàng thành công'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Cập nhật đơn hàng thất bại: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getOrderByPrdName(Request $request) {
        try {
            $order = Orders::where('product', $request->input('name'))->get();

            if (!$order) {
                return response()->json([
                    'message' => 'Không tìm thấy đơn hàng'
                ], 404);
            }

            return response()->json([
                'data' => $order
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi  xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getOrderByEmail(Request $request) {
        try {
            $orders = Orders::where('email', $request->input('email'))->get();

            if ($orders->isEmpty()) {
                return response()->json([
                    'message' => 'Không tìm thấy đơn hàng'
                ], 404);
            }

            return response()->json([
                'data' => $orders
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi  xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getOrderById(Request $request) {
        try {
            $order = Orders::where('id', $request->input('id'))->first();
            $data = [
                'order' => $order,
                'products' => Products::all(),
                'pay_methods' => PayMethods::all(),
                'status' => OrderStatus::all()
            ];

            if (!$order) {
                return response()->json([
                    'data' => 'Không tìm thấy đơn hàng'
                ], 404);
            }

            return response()->json([
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'data' => 'Có lỗi  xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }

}
