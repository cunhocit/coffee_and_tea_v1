<?php

namespace App\Http\Controllers;

use App\Models\Transport;
use Illuminate\Http\Request;

class TransportController extends Controller
{
    public function getTransports()
    {
        try {
            $transports = Transport::all();
            return response()->json([
                'data' => $transports
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi: ' . $e->getMessage()
            ], 500);
        }
    }

}


