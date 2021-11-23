<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CommentController;

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


Route::get('/usuarios', function () {
    return view('admin/usuarios');
});

Route::get('/roles', function () {
    return view('admin/roles');
});


Route::get('/comentarios', [CommentController::class, 'index'])-> name('show.viewComments');
Route::get('/comentarios/getComments', [CommentController::class, 'getComments'])-> name('show.comments');
Route::post('/comentarios/searchcomments', [CommentController::class, 'searchcomments'])-> name('search.comments');
