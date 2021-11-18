<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('admin/index');
});

Route::get('/contenido', function () {
    return view('admin/contenido');
});