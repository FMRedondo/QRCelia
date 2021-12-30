<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CommentController;
use App\Http\Controllers\admin\TypeController;
use App\Http\Controllers\admin\resourceController;
use App\Http\Controllers\admin\panelesController;
use App\Http\Controllers\admin\customUsersController;
use App\Http\Controllers\admin\interestPointController;
use App\Http\Controllers\admin\resourceUploadController;

Route::get('/', function () {
    return view('admin/index');
});

Route::get('/ajustes', function () {
    return view('admin/ajustes');
});

Route::get('/personalizar', function () {
    return view('admin/personalizar');
});

Route::get('/roles', function () {
    return view('admin/roles');
});

Route::get('/verDatosContenido', [panelesController::class, 'datosPanelContenido'])-> name('verContenido.panel');



Route::get('/puntosInteres', [interestPointController::class, 'index'])-> name('show.interestPoints');







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

Route::get('/recursos', [ResourceController::class, 'index'])-> name('show.viewResources');
Route::post('/recursos', [resourceUploadController::class, 'store'])-> name('upload.resource');
Route::get('/recursos/getResources', [ResourceController::class, 'getResources'])-> name('show.resource');
Route::post('/recursos/addResource', [ResourceController::class, 'addResource'])-> name('add.resource');
Route::post('/recursos/deleteResource', [ResourceController::class, 'deleteResource'])-> name('delete.resource');
Route::post('/recursos/searchResource', [ResourceController::class, 'searchResource'])-> name('search.resource');
Route::post('/recursos/getResource', [ResourceController::class, 'getResource']) -> name('get.resource');
Route::post('/recursos/editResource', [ResourceController::class, 'updateResource']) -> name('edit.resource');

Route::get('/usuarios', [customUsersController::class, 'index'])-> name('show.viewUsers');
Route::get('/usuarios/getUsers', [customUsersController::class, 'getUsers'])-> name('show.users');
Route::post('/usuarios/addUser', [customUsersController::class, 'addUser'])-> name('add.user');
Route::post('/usuarios/deleteUser', [customUsersController::class, 'deleteUser'])-> name('delete.user');
Route::post('/usuarios/searchUsers', [customUsersController::class, 'searchUsers'])-> name('search.users');
Route::post('/usuarios/getUser', [customUsersController::class, 'getUser']) -> name('get.user');
Route::post('/usuarios/editUser', [customUsersController::class, 'updateUser']) -> name('edit.user');