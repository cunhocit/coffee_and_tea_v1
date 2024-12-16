<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Customers;
use App\Models\Orders;
use App\Models\OrderStatus;
use App\Models\PayMethods;
use App\Models\Products;
use App\Models\Revenue;
use Illuminate\Support\Facades\Request;

class DashboardController extends Controller {

    public function getDashboardData() {
        try {
            $data = [
                'products' => Products::all(),
                'revenues' => Revenue::all(),
                'orders' => Orders::all(),
                'customers' => Customers::all(),
                'categories' => Categories::all(),
                'pay_methods' => PayMethods::all(),
                'order_status' => OrderStatus::all()
            ];

            return response()->json([
                'data' => $data
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Message: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getOrders() {
        try {
            $data = [
                'orders' =>  Orders::all(),
                'pay_methods' => PayMethods::all(),
                'order_status' => OrderStatus::all(),
                'products' => Products::all()
            ];

            return response()->json([
                'data' => $data
            ], 200);
        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Message: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getAllPrdAndCate() {
        try {
            $data = [
                'categories' => Categories::all(),
                'products' => Products::all()
            ];

            return response()->json([
                'data' => $data
            ], 200);
        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Message: ' . $e->getMessage()
            ], 500);
        }
    }

}
