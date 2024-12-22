<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAdmin
{
    public function handle(Request $request, Closure $next)
    {
        // Kiểm tra nếu người dùng là admin
        if (Auth::guard('admin')->check()) {
            return $next($request);
        }

        // Nếu không phải admin, trả về lỗi không có quyền
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}
