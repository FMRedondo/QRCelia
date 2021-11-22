<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CommentController;
use App\Http\Controllers\admin\TypeController;

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

Route::get('/recursos', function () {
    return view('admin/recursos');
});

Route::get('/recursos', function () {
    return view('admin/recursos');
});


Route::get('/usuarios', function () {
    return view('admin/usuarios');
});

Route::get('/roles', function () {
    return view('admin/roles');
});

//  RUTAS DE COMENTARIOS
Route::get('/comentarios', [CommentController::class, 'index'])-> name('show.viewComments');
Route::get('/comentarios/getComments', [CommentController::class, 'getComments'])-> name('show.comments');

//  RUTAS DE CATEGORIAS DE PUNTOS
Route::get('/categorias', [TypeController::class, 'index'])-> name('show.viewTypes');
Route::get('/categorias/getTypes', [TypeController::class, 'getTypes'])-> name('show.types');
Route::get('/categorias/getTypes', [TypeController::class, 'getTypes'])-> name('show.types');
Route::get('/categorias/getTypes', [TypeController::class, 'getTypes'])-> name('show.types');
Route::get('/categorias/getTypes', [TypeController::class, 'getTypes'])-> name('show.types');
