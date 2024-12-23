<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
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
                'quantity' => 0,
                'turn_order' => 0
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
                'message' => 'Có lỗi: ' . $e->getMessage()
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
            $storage_path = storage_path('app/public/products');

            if (!file_exists($storage_path)) {
                mkdir($storage_path, 0777, true);
            }
            if ($product->image && file_exists(storage_path('app/public/products/' . $product->image))) {
                unlink(storage_path('app/public/products/' . $product->image));
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

    public function updateProductSale(Request $request) {
        try {
            $products = $request->input('products');

            Log::info('Dữ liệu products: ', ['products' => $products]);

            foreach($products as $product) {
                $produc_ = Products::find($product['id']);
                if ($produc_) {
                    $produc_->update([
                        'discount_percentage' => $product['discount_percentage'],
                        'end_date' => $product['end_date']
                    ]);
                }else {
                    return response()->json([
                        'message' => "Không tìm thấy sản phẩm"
                    ], 403);
                }
            }

            return response()->json([
                'message' => "Áp dụng khuyến mãi thành công!"
            ], 200);

        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getRandom10Product() {
        try {
            $randomProducts = DB::table('product')->inRandomOrder()->limit(10)->get();

            return response()->json([
                'product' => $randomProducts
            ], 200);

        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getProductsClient() {
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

    public function getProductById(Request $request) {
        try {
            $product = Products::where('id', $request->input('id'))->first();

            return response()->json([
                'data' => $product
            ], 200);
        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getListProductsById(Request $request)
    {
        try {
            $list_id = $request->query('list_id');
            $response = [];

            if (!$list_id || trim($list_id) === '') {
                return response()->json(['message' => 'Tham số list_id không được để trống.'], 400);
            }

            // Decode list_id từ URL
            $decodedListId = urldecode($list_id);

            // Kiểm tra nếu list_id chỉ chứa 1 giá trị, nếu vậy thì chuyển thành danh sách có 1 phần tử
            $ids = [];
            if (str_starts_with($decodedListId, '[') && str_ends_with($decodedListId, ']')) {
                // Nếu là chuỗi JSON dạng mảng (ví dụ: "[1,2,3]"), chuyển thành danh sách
                $ids = json_decode($decodedListId, true);
            } else {
                // Nếu chỉ là một giá trị duy nhất, biến nó thành một danh sách có một phần tử
                $ids[] = (int)$decodedListId;
            }

            // Lấy danh sách sản phẩm
            $products = Products::whereIn('id', $ids)->get();

            // Đặt số lượng mặc định là 1 cho từng sản phẩm
            foreach ($products as $product) {
                $product->quantity = 1;
            }

            $response['data'] = $products;
            return response()->json($response);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Đã xảy ra lỗi khi xử lý yêu cầu: ' . $e->getMessage()
            ], 500);
        }
    }
}
