<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckCustomer
{
    public function handle(Request $request, Closure $next)
    {
        // Kiểm tra nếu người dùng là customer
        if (Auth::guard('customer')->check()) {
            return $next($request);
        }

        // Nếu không phải customer, trả về lỗi không có quyền
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}
