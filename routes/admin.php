<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CommentController;
use App\Http\Controllers\admin\TypeController;
use App\Http\Controllers\admin\resourceController;
use App\Http\Controllers\admin\panelesController;
use App\Http\Controllers\admin\customUsersController;

Route::get('/', function () {
    return view('admin/index');
});

Route::get('/ajustes', function () {
    return view('admin/ajustes');
});

Route::get('/personalizar', function () {
    return view('admin/personalizar');
});

Route::get('/puntosInteres', function () {
    return view('admin/puntosInteres');
});

Route::get('/roles', function () {
    return view('admin/roles');
});

Route::get('/verDatosContenido', [panelesController::class, 'datosPanelContenido'])-> name('verContenido.panel');

Route::get('/comentarios', [CommentController::class, 'index'])-> name('show.viewComments');
Route::get('/comentarios/getComments', [CommentController::class, 'getComments'])-> name('show.comments');
Route::post('/comentarios/searchcomments', [CommentController::class, 'searchcomments'])-> name('search.comments');
Route::post('/comentarios/deleteComments', [CommentController::class, 'deleteComment'])-> name('delete.comments');

Route::get('/categorias', [TypeController::class, 'index'])-> name('show.viewTypes');
Route::get('/categorias/getTypes', [TypeController::class, 'getTypes'])-> name('show.types');
Route::post('/categorias/addType', [TypeController::class, 'addType'])-> name('add.type');
Route::post('/categorias/deleteType', [TypeController::class, 'deleteType'])-> name('delete.type');
Route::post('/categorias/searchType', [TypeController::class, 'searchType'])-> name('search.type');
Route::post('/categorias/getType', [TypeController::class, 'getType']) -> name('get.type');
Route::post('/categorias/editType', [TypeController::class, 'updateType']) -> name('edit.type');

Route::get('/recursos', [resourceController::class, 'index'])-> name('show.viewResources');
Route::get('/recursos/getResource', [TypeController::class, 'getTypes'])-> name('show.resource');
Route::post('/recursos/addResource', [TypeController::class, 'addType'])-> name('add.resource');
Route::post('/recursos/deleteResource', [TypeController::class, 'deleteResource'])-> name('delete.resource');
Route::post('/recursos/searchResource', [TypeController::class, 'searchResource'])-> name('search.resource');
Route::post('/recursos/getResource', [TypeController::class, 'getResource']) -> name('get.resource');
Route::post('/recursos/editResource', [TypeController::class, 'updateResource']) -> name('edit.resource');

Route::get('/usuarios', [customUsersController::class, 'index'])-> name('show.viewUsers');
Route::get('/usuarios/getUsers', [customUsersController::class, 'getUsers'])-> name('show.users');
Route::post('/usuarios/addUser', [customUsersController::class, 'addUser'])-> name('add.user');
Route::post('/usuarios/deleteUser', [customUsersController::class, 'deleteUser'])-> name('delete.user');
Route::post('/usuarios/searchUsers', [customUsersController::class, 'searchUsers'])-> name('search.users');
Route::post('/usuarios/getUser', [customUsersController::class, 'getUser']) -> name('get.user');
Route::post('/usuarios/editUser', [customUsersController::class, 'updateUser']) -> name('edit.user');