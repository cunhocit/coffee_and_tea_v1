<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Customers;
use App\Models\Products;
use App\Security\CryptAES;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CommentController extends Controller
{
    public function getCommentsByProduct(Request $request) {
        try {
            $product = Products::where('id', $request->input('id'))->first();

            if (!$product) {
                return response()->json([
                    'message' => 'Sản phẩm không tồn tại'
                ], 404);
            }

            $comments = Comment::where('product', $product->name)->get();
            $customers = [];

            foreach ($comments as $comment) {
                $cus_find = Customers::where('id', $comment->cus_id)->first();
                if ($cus_find) {
                    $customers[] = $cus_find;
                }
            }

            $data = [
                'comments' => $comments,
                'customers' => $customers
            ];

            return response()->json([
                'data' => $data
            ], 200);
        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Lỗi' . $e->getMessage()
            ], 500);
        }
    }

    public function addNewComment(Request $request) {
        try {
            $comment = $request->input('comment');
            $id_product = CryptAES::decryptAES($request->input('id_product'));
            $cus_id = CryptAES::decryptAES($request->input('cus_id'));

            Comment::create([
                'product' => Products::where('id', $id_product)->first()->name,
                'comment' => $comment,
                'cus_id' => $cus_id
            ]);

        }catch(\Exception $e) {
            return response()->json([
                'message' => 'Lỗi' . $e->getMessage()
            ], 500);
        }
    }

}
