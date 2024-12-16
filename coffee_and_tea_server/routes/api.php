<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Ném tất cả API vào middleware auth:api
Route::middleware('auth:api')->group(function () {
    Route::get('/get_data_dashboard', [DashboardController::class, 'getDashboardData']);
    Route::get('/get_orders', [DashboardController::class, 'getOrders']);
    Route::get('/get_prd_cate', [DashboardController::class, 'getAllPrdAndCate']);

    Route::post('/update_order', [OrderController::class, 'updateOrder']);
    Route::get('/get_order_by_prd_name', [OrderController::class, 'getOrderByPrdName']);
    Route::get('/get_order_by_id', [OrderController::class, 'getOrderById']);
    Route::get('/get_order_by_email', [OrderController::class, 'getOrderByEmail']);

    Route::get('/get_admin', [AdminController::class, 'getAdmin']);
    Route::post('/update_admin', [AdminController::class, 'updateAdmin']);
    Route::post('/update_image_admin', [AdminController::class, 'updateAvatarAdmin']);
    Route::post('/change_password_admin', [AdminController::class, 'changePasswordAdmin']);
    Route::get('/get_header_admin', [AdminController::class, 'getHeader']);

    Route::get('/get_customers', [CustomerController::class, 'getAllCus']);
    Route::get('/get_all_his', [CustomerController::class, 'getAllHistory']);
    Route::post('/update_customer', [CustomerController::class, 'updateCus']);
    Route::post('/update_image_customer', [CustomerController::class, 'updateAvatarCus']);
    Route::get('/get_customer_by_id', [CustomerController::class, 'getCustomerById']);
    Route::post('/delete_customer', [CustomerController::class, 'deleteCustomer']);

    Route::get('/get_all_prd', [ProductController::class, 'getAllPrd']);
    Route::post('/delete_prd', [ProductController::class, 'deletePrd']);
    Route::post('/update_prd', [ProductController::class, 'updatePrd']);
    Route::post('/add_product', [ProductController::class, 'addProduct']);
    Route::post('/update_prd_image', [ProductController::class, 'updatePrdImage']);
    Route::get('/get_products_categories', [ProductController::class, 'getProductsAndCategories']);

    Route::get('/get_all_ctg', [CategoryController::class, 'getAllCtg']);
    Route::post('/add_category', [CategoryController::class, 'addCtg']);
    Route::post('/delete_category', [CategoryController::class, 'deleteCtg']);

    Route::get('/log_out_admin', [AuthController::class, 'AdminLogOut']);
});

Route::post('/admin_register', [AuthController::class, 'AdminRegister']);
Route::post('/admin_login', [AuthController::class, 'AdminLogin']);
Route::post('/admin_forgot_password', [AuthController::class, 'AdminForgotPassword']);

Route::get('/products/images/{filename}', function ($filename) {
    $path = storage_path('app/public/products/' . $filename);
    if (!file_exists($path)) {
        return response()->json(['message' => 'Image not found'], 404);
    }
    return response()->file($path);
});
Route::get('/customers/images/{filename}', function ($filename) {
    $path = storage_path('app/public/customers/' . $filename);
    if (!file_exists($path)) {
        return response()->json(['message' => 'Image not found'], 404);
    }
    return response()->file($path);
});
Route::get('/admins/images/{filename}', function ($filename) {
    $path = storage_path('app/public/admins/' . $filename);
    if (!file_exists($path)) {
        return response()->json(['message' => 'Image not found'], 404);
    }
    return response()->file($path);
});

