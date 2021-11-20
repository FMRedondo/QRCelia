<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('admin/index');
});

Route::get('/ajustes', function () {
    return view('admin/ajustes');
});

Route::get('/personalizar', function () {
    return view('admin/personalizar');
});

Route::get('/contenido', function () {
    return view('admin/contenido');
});

Route::get('/categorias', function () {
    return view('admin/categorias');
});

Route::get('/recursos', function () {
    return view('admin/recursos');
});

Route::get('/recursos', function () {
    return view('admin/recursos');
});

Route::get('/comentarios', function () {
    return view('admin/comentarios');
});

Route::get('/usuarios', function () {
    return view('admin/usuarios');
});

Route::get('/roles', function () {
    return view('admin/roles');
});