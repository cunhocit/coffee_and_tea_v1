<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUser
{
    public function handle(Request $request, Closure $next)
    {
        // Kiểm tra nếu người dùng là admin hoặc customer
        if (Auth::guard('admin-api')->check() || Auth::guard('customer-api')->check()) {
           return $next($request);
       }
        // Nếu không phải admin hoặc customer, trả về lỗi không có quyền
       return response()->json(['message' => 'Unauthorized'], 403);
   }
}
