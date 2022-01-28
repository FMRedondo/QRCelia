<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/creditos', function () {
    return view('creditos');
});