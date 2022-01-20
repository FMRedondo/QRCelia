<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\interestPointController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/puntosInteres', function () {
    return view('puntosInteres');
});

Route::get('/puntodeinteres/{id}', function () {
    return view('interestPoint');
});

Route::post('/puntodeinteres/getPoint', [interestPointController::class, 'getInterestPoint'])-> name('post.InterestPoint');
Route::get('/puntodeinteres/getPoint', [interestPointController::class, 'getInterestPoint'])-> name('get.InterestPoint');