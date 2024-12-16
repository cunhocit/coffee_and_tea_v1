<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Support\Facades\Redis;

class ProductController extends Controller
{
    public function getAllPrd()
    {
        $data = Products::all();
        return response()->json($data);
    }

    public function deletePrd(Request $request)
    {
        try {
            $id = $request->input('id');
            if (!$id) {
                return response()->json(['message', 'Sản phẩm không tồn tại'], 403);
            }
            Products::find($id)->delete();
            return response()->json(['message' => 'Xóa sản phẩm thành công!'], 200);
        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi: ' . $e->getMessage()
            ]);
        }
    }

    public function updatePrd(Request $request)
    {

        $product = Products::find($request->input('id'));


        try {

            $product->name = $request->input('name');
            $product->category = $request->input('category');
            $product->description = $request->input('description');
            $product->price = $request->input('price');
            $product->quantity = $request->input('quantity');

            $product->save();

            return response()->json([
                'message' => 'Cập nhật sản phẩm thành công',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }

    public function addProduct(Request $request)
    {
        try {
            if (Products::where('name', $request->input('name'))->exists()) {
                return response()->json([
                    'message' => 'Sản phẩm đã tồn tại!'
                ], 400);
            }

            $product = Products::create([
                'category' => $request->input('category'),
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'price' => $request->input('price'),
            ]);

            $file = $request->file('image');
            $file_name = $product->id . '_' . time() . '.' . $file->getClientOriginalExtension();

            $storage_path = public_path('storage/products');

            if (!file_exists($storage_path)) {
                mkdir($storage_path, 0777, true);
            }
            if ($product->image && file_exists(public_path('storage/products/' . $product->image))) {
                unlink(public_path('storage/products/' . $product->image));
            }
            $file->move($storage_path, $file_name);

            $product->image = $file_name;
            $product->save();

            return response()->json(['message' => 'Thêm sản phẩm thành công'], 200);
        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi: ', $e->getMessage()
            ], 500);
        }
    }

    public function updatePrdImage(Request $request) {
        try {
            $product = Products::where('id', $request->input('id'))->first();
            $file = $request->file('file');

            if (!$product || !$file) {
                return response()->json([
                    'message' => 'Dữ liệu rỗng'
                ], 200);
            }

            // Tạo tên file mới
            $file_name = $product->id . '_' . $request->input('time') . '.' . $file->getClientOriginalExtension();

            // Tạo instance của Intervention Image
            $storage_path = public_path('storage/products');

            if (!file_exists($storage_path)) {
                mkdir($storage_path, 0777, true);
            }
            if ($product->image && file_exists(public_path('storage/products/' . $product->image))) {
                unlink(public_path('storage/products/' . $product->image));
            }
            $file->move($storage_path, $file_name);

            $product->image = $file_name;
            $product->save();

            return response()->json([
                'message' => 'Cập nhật thành công'
            ], 200);
         } catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getProductsAndCategories() {
        try {
            $products = Products::all();
            $categories = Categories::all();

            $data = [
                'products' => $products,
                'categories' => $categories
            ];

            return response()->json([
                'data' => $data
            ], 200);

        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }
}
