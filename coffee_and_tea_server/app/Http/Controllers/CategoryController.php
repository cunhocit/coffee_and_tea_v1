<?php

namespace App\Http\Controllers;

use App\Models\Categories;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCtg()
    {
        $data = Categories::all();
        return response()->json([
            'data' => $data
        ]);
    }

    public function addCtg(Request $request)
    {
        if (Categories::where('category', $request->input('category'))->exists()) {
            return response()->json(['message' => 'Danh mục đã tồn tại'], 400);
        } else {
            Categories::create([
                'category' => $request->input('category'),
                'quantity' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ]);
            return response()->json(['message' => 'Thêm danh mục thành công'], 200);
        }
    }

    public function deleteCtg(Request $request)
    {
        foreach ($request->input('categories') as $category) {
            Categories::where('category', $category)->delete();
        }
        return response()->json(['message' => 'Xóa danh mục thành công'], 200);
    }
}
