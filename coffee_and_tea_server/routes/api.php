<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthCustomerController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductCustomerController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TransportController;
use App\Http\Middleware\CheckUser;
use Illuminate\Support\Facades\Route;

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
Route::middleware([CheckUser::class])->group(function () {
    Route::get('/get_data_dashboard', [DashboardController::class, 'getDashboardData']);
    Route::get('/get_orders', [DashboardController::class, 'getOrders']);
    Route::get('/get_prd_cate', [DashboardController::class, 'getAllPrdAndCate']);

    Route::post('/update_order', [OrderController::class, 'updateOrder']);
    Route::get('/get_order_by_prd_name', [OrderController::class, 'getOrderByPrdName']);
    Route::get('/get_order_by_id', [OrderController::class, 'getOrderById']);
    Route::get('/get_order_by_email', [OrderController::class, 'getOrderByEmail']);
    Route::get('/customer_get_order_by_id', [OrderController::class, 'getOrdersById']);
    Route::post('/destroy_order', [OrderController::class, 'destroyOrder']);

    Route::get('/get_admin', [AdminController::class, 'getAdmin']);
    Route::post('/update_admin', [AdminController::class, 'updateAdmin']);
    Route::post('/update_image_admin', [AdminController::class, 'updateAvatarAdmin']);
    Route::post('/change_password_admin', [AdminController::class, 'changePasswordAdmin']);
    Route::get('/get_header_admin', [AdminController::class, 'getHeader']);

    Route::get('/get_customers', [CustomerController::class, 'getAllCus']);
    Route::get('/get_all_his', [CustomerController::class, 'getAllHistory']);
    Route::get('/get_customer_by_id', [CustomerController::class, 'getCustomerById']);
    Route::post('/delete_customer', [CustomerController::class, 'deleteCustomer']);
    Route::post('/update_customer', [CustomerController::class, 'updateCus']);
    Route::post('/update_image_customer', [CustomerController::class, 'updateAvatarCus']);
    Route::post('/change_password_customer', [CustomerController::class, 'changePasswordCustomer']);

    Route::get('/get_all_prd', [ProductController::class, 'getAllPrd']);
    Route::post('/delete_prd', [ProductController::class, 'deletePrd']);
    Route::post('/update_prd', [ProductController::class, 'updatePrd']);
    Route::post('/add_product', [ProductController::class, 'addProduct']);
    Route::post('/update_prd_image', [ProductController::class, 'updatePrdImage']);
    Route::get('/get_products_categories', [ProductController::class, 'getProductsAndCategories']);
    Route::post('/update_product_sale', [ProductController::class, 'updateProductSale']);
    Route::get('/get_product_by_id', [ProductController::class, 'getProductById']);
    Route::get('/get_list_products_by_id', [ProductController::class, 'getListProductsById']);

    Route::get('/get_all_ctg', [CategoryController::class, 'getAllCtg']);
    Route::post('/add_category', [CategoryController::class, 'addCtg']);
    Route::post('/delete_category', [CategoryController::class, 'deleteCtg']);

    Route::get('/log_out_admin', [AuthController::class, 'AdminLogOut']);

    Route::get('/get_comments_by_product', [CommentController::class, 'getCommentsByProduct']);
    Route::post('/add_comment', [CommentController::class, 'addNewComment']);

    Route::post('/payment', [PaymentController::class, 'payment']);
});

// Route::middleware(['auth:api', 'checkAdminOrCustomer'])->group(function () {
//     Route::get('/get_data_dashboard', [DashboardController::class, 'getDashboardData']);
//     Route::get('/get_orders', [DashboardController::class, 'getOrders']);
//     Route::get('/get_prd_cate', [DashboardController::class, 'getAllPrdAndCate']);

//     Route::post('/update_order', [OrderController::class, 'updateOrder']);
//     Route::get('/get_order_by_prd_name', [OrderController::class, 'getOrderByPrdName']);
//     Route::get('/get_order_by_id', [OrderController::class, 'getOrderById']);
//     Route::get('/get_order_by_email', [OrderController::class, 'getOrderByEmail']);
//     Route::get('/customer_get_order_by_id', [OrderController::class, 'getOrdersById']);
//     Route::post('/destroy_order', [OrderController::class, 'destroyOrder']);

//     Route::get('/get_admin', [AdminController::class, 'getAdmin']);
//     Route::post('/update_admin', [AdminController::class, 'updateAdmin']);
//     Route::post('/update_image_admin', [AdminController::class, 'updateAvatarAdmin']);
//     Route::post('/change_password_admin', [AdminController::class, 'changePasswordAdmin']);
//     Route::get('/get_header_admin', [AdminController::class, 'getHeader']);

//     Route::get('/get_customers', [CustomerController::class, 'getAllCus']);
//     Route::get('/get_all_his', [CustomerController::class, 'getAllHistory']);
//     Route::get('/get_customer_by_id', [CustomerController::class, 'getCustomerById']);
//     Route::post('/delete_customer', [CustomerController::class, 'deleteCustomer']);
//     Route::post('/update_customer', [CustomerController::class, 'updateCus']);
//     Route::post('/update_image_customer', [CustomerController::class, 'updateAvatarCus']);
//     Route::post('/change_password_customer', [CustomerController::class, 'changePasswordCustomer']);

//     Route::get('/get_all_prd', [ProductController::class, 'getAllPrd']);
//     Route::post('/delete_prd', [ProductController::class, 'deletePrd']);
//     Route::post('/update_prd', [ProductController::class, 'updatePrd']);
//     Route::post('/add_product', [ProductController::class, 'addProduct']);
//     Route::post('/update_prd_image', [ProductController::class, 'updatePrdImage']);
//     Route::get('/get_products_categories', [ProductController::class, 'getProductsAndCategories']);
//     Route::post('/update_product_sale', [ProductController::class, 'updateProductSale']);
//     Route::get('/get_product_by_id', [ProductController::class, 'getProductById']);
//     Route::get('/get_list_products_by_id', [ProductController::class, 'getListProductsById']);

//     Route::get('/get_all_ctg', [CategoryController::class, 'getAllCtg']);
//     Route::post('/add_category', [CategoryController::class, 'addCtg']);
//     Route::post('/delete_category', [CategoryController::class, 'deleteCtg']);

//     Route::get('/log_out_admin', [AuthController::class, 'AdminLogOut']);

//     Route::get('/get_comments_by_product', [CommentController::class, 'getCommentsByProduct']);
//     Route::post('/add_comment', [CommentController::class, 'addNewComment']);

//     Route::post('/payment', [PaymentController::class, 'payment']);
// });


Route::post('/admin_register', [AuthController::class, 'AdminRegister']);
Route::post('/admin_login', [AuthController::class, 'AdminLogin']);
Route::post('/admin_forgot_password', [AuthController::class, 'AdminForgotPassword']);

Route::post('/customer_register', [AuthCustomerController::class, 'CustomerRegister']);
Route::post('/customer_login', [AuthCustomerController::class, 'CustomerLogin']);
Route::post('/customer_password_reset', [AuthCustomerController::class, 'CustomerPasswordReset']);

Route::get('/get_all_product', [ProductCustomerController::class, 'getAllProduct']);
Route::get('/get_random_10_product', [ProductController::class, 'getRandom10Product']);
Route::get('/get_products_client', [ProductController::class, 'getProductsClient']);

Route::get('/get_transports', [TransportController::class, 'getTransports']);




Route::get('/products/images/{filename}', function ($filename) {
    $path = storage_path('public/products/' . $filename);
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
