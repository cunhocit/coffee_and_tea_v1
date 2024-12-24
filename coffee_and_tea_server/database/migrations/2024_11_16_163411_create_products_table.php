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
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('category')->nullable();
            $table->string('name')->nullable()->unique();
            $table->string('image')->unique()->nullable();
            $table->text('description')->nullable();
            $table->integer('quantity')->nullable();
            $table->integer('price')->nullable();
            $table->double('discount_percentage')->nullable();
            $table->string('end_date')->nullable();
            $table->integer('turn_order')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
