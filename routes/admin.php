<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CommentController;
use App\Http\Controllers\admin\TypeController;
use App\Http\Controllers\admin\resourceController;
use App\Http\Controllers\admin\panelesController;
use App\Http\Controllers\admin\customUsersController;
use App\Http\Controllers\admin\interestPointController;
use App\Http\Controllers\admin\resourceUploadController;
use App\Http\Controllers\admin\rolUserController;
use Spatie\Permission\Models\Role;

Route::get('/', function () {
    return view('admin/index');
})-> middleware('can:ver_administracion');

Route::get('/ajustes', function () {
    return view('admin/ajustes');
})-> middleware('can:ver_administracion');

Route::get('/personalizar', function () {
    return view('admin/personalizar');
})-> middleware('can:ver_administracion');

Route::get('/roles', function () {
    return view('admin/roles');
})-> middleware('can:ver_administracion');

Route::get('/roles/getUsersAndRoles', [rolUserController::class, 'getUsersAndRoles'])-> name('getUsersAndRoles.user')-> middleware('can:ver_administracion');
Route::post('/roles/addRol', [rolUserController::class, 'addRol'])-> name('addRol.user')-> middleware('can:ver_administracion');
Route::post('/roles/removeRol', [rolUserController::class, 'removeRol'])-> name('removeRol.user')-> middleware('can:ver_administracion');


Route::get('/verDatosContenido', [panelesController::class, 'datosPanelContenido'])-> name('verContenido.panel')-> middleware('can:ver_administracion');


Route::get('/puntosInteres', [interestPointController::class, 'index'])-> name('show.interestPoints')-> middleware('can:ver_administracion'); 
Route::get('/puntosInteres/getPoints', [interestPointController::class, 'getInterestPoints'])-> name('get.interestPoints')-> middleware('can:ver_administracion');
Route::post('/verPuntoInteres', [interestPointController::class, 'verEditarPuntosInteres'])-> name('verEditar.interestPoints')-> middleware('can:ver_administracion');
Route::post('/puntosInteres/getPoint', [interestPointController::class, 'getInterestPoint'])-> name('get.interestPoint')-> middleware('can:ver_administracion');
Route::post('/puntosInteres/editPoint', [interestPointController::class, 'updateInterestPoint'])-> name('update.interestPoint')-> middleware('can:ver_administracion');
Route::post('/puntosInteres/addPoint', [interestPointController::class, 'addInterestPoint'])-> name('add.interestPoint')-> middleware('can:ver_administracion');
Route::post('/puntosInteres/searchPoints', [interestPointController::class, 'searchInterestPoints'])-> name('search.interestPoint')-> middleware('can:ver_administracion');
Route::post('/puntosInteres/eliminarPunto', [interestPointController::class, 'deleteInterestPoint'])-> name('delete.interestPoint')-> middleware('can:ver_administracion');
Route::get('/puntosInteres/getPoints', [interestPointController::class, 'getInterestPoints'])-> name('get.interestPoints')-> middleware('can:ver_administracion');
Route::post('/puntosInteres/cambiarOrden', [interestPointController::class, 'cambiarOrden'])-> name('cambiar.orden')-> middleware('can:ver_administracion');

Route::get('/comentarios', [CommentController::class, 'index'])-> name('show.viewComments')-> middleware('can:ver_administracion');
Route::get('/comentarios/getComments', [CommentController::class, 'getComments'])-> name('show.comments')-> middleware('can:ver_administracion');
Route::post('/comentarios/searchcomments', [CommentController::class, 'searchcomments'])-> name('search.comments')-> middleware('can:ver_administracion');
Route::post('/comentarios/deleteComments', [CommentController::class, 'deleteComment'])-> name('delete.comments')-> middleware('can:ver_administracion');

Route::get('/categorias', [TypeController::class, 'index'])-> name('show.viewTypes')-> middleware('can:ver_administracion');
Route::get('/categorias/getTypes', [TypeController::class, 'getTypes'])-> name('show.types')-> middleware('can:ver_administracion');
Route::post('/categorias/addType', [TypeController::class, 'addType'])-> name('add.type')-> middleware('can:ver_administracion');
Route::post('/categorias/deleteType', [TypeController::class, 'deleteType'])-> name('delete.type')-> middleware('can:ver_administracion');
Route::post('/categorias/searchType', [TypeController::class, 'searchType'])-> name('search.type')-> middleware('can:ver_administracion');
Route::post('/categorias/getType', [TypeController::class, 'getType']) -> name('get.type')-> middleware('can:ver_administracion');
Route::post('/categorias/editType', [TypeController::class, 'updateType']) -> name('edit.type')-> middleware('can:ver_administracion');

Route::get('/recursos', [ResourceController::class, 'index'])-> name('show.viewResources')-> middleware('can:ver_administracion');
Route::post('/recursos', [resourceUploadController::class, 'addResource'])-> name('upload.resource')-> middleware('can:ver_administracion');
Route::get('/recursos/getResources', [ResourceController::class, 'getResources'])-> name('show.resource')-> middleware('can:ver_administracion');
Route::post('/recursos/deleteResource', [ResourceController::class, 'deleteResource'])-> name('delete.resource')-> middleware('can:ver_administracion');
Route::post('/recursos/searchResource', [ResourceController::class, 'searchResource'])-> name('search.resource')-> middleware('can:ver_administracion');
Route::post('/recursos/getResource', [ResourceController::class, 'getResource']) -> name('get.resource')-> middleware('can:ver_administracion');
Route::post('/recursos/editResource', [ResourceController::class, 'updateResource']) -> name('edit.resource')-> middleware('can:ver_administracion');
Route::post('/recursos/searchByType', [ResourceController::class, 'searchByType'])-> name('searchByType.resource')-> middleware('can:ver_administracion');
Route::post('/recursos/changeResource', [ResourceController::class, 'changeResource'])-> name('changeResource.resource')-> middleware('can:ver_administracion');


Route::get('/usuarios', [customUsersController::class, 'index'])-> name('show.viewUsers')-> middleware('can:ver_administracion');
Route::get('/usuarios/getUsers', [customUsersController::class, 'getUsers'])-> name('show.users')-> middleware('can:ver_administracion');
Route::post('/usuarios/addUser', [customUsersController::class, 'addUser'])-> name('add.user')-> middleware('can:ver_administracion');
Route::post('/usuarios/deleteUser', [customUsersController::class, 'deleteUser'])-> name('delete.user')-> middleware('can:ver_administracion');
Route::post('/usuarios/searchUsers', [customUsersController::class, 'searchUsers'])-> name('search.users')-> middleware('can:ver_administracion');
Route::post('/usuarios/getUser', [customUsersController::class, 'getUser']) -> name('get.user')-> middleware('can:ver_administracion');
Route::post('/usuarios/editUser', [customUsersController::class, 'updateUser']) -> name('edit.user')-> middleware('can:ver_administracion');