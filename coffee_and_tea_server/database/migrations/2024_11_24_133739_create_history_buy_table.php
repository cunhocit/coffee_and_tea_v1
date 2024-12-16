<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('history_order', function (Blueprint $table) {
            $table->id();
            $table->string('email')->nullable();
            $table->string('cus_name')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('category')->nullable();
            $table->string('product')->nullable();
            $table->integer('quantity')->nullable();
            $table->integer('price')->nullable();
            $table->string('pay_method')->nullable();
            $table->string('status')->nullable();
            $table->string('discount_percentage')->nullable();
            $table->string('end_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('history_buy');
    }
};
