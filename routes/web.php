<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\interestPointController;
use App\Http\Controllers\admin\customizationController;


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

Route::get('/qrmisterioso', function () {
    return view('qrmisterioso');
});

Route::get('/creditos', function () {
    return view('creditos');
});

Route::get('/obtenerCustomizacion', [customizationController::class, 'getAllCustomizationData'])-> name('get.opciones');
