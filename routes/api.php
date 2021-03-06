<?php

use App\Http\Controllers\admin\interestPointController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CommentController;
use App\Http\Controllers\admin\resourceController;
use App\Http\Controllers\admin\resourceUploadController;
use App\Http\Controllers\admin\pointHasTypeController;
use App\Http\Controllers\admin\qrCodeController;
use App\Http\Controllers\admin\SettingController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/puntodeinteres/getPoint', [interestPointController::class, 'getInterestPoint']);
Route::post('/puntodeinteres/getResources', [interestPointController::class, 'getResourcesFromPoint'])-> name('front.resourcesFromPoint');
Route::post('/puntosInteres/getPoints', [interestPointController::class, 'getInterestPoints']);

Route::post('/comentarios/addComment', [CommentController::class, 'addComment'])-> name('add.comments');

Route::post('/puntosInteres/subirPoster', [interestPointController::class, 'subirPoster'])-> name('subir.poster');
Route::post('/recursos/addResource', [resourceUploadController::class, 'addResource'])-> name('add.resource');
Route::post('/recursos/searchByType', [ResourceController::class, 'searchByType'])-> name('APIsearchByType.resource');


Route::post('/puntosInteres/verImagenesEnlazadas', [ResourceController::class, 'verPuntosInteresEnlazados'])-> name('ver.imagenes.enlazadas');

Route::get('/pointHasType/get', [pointHasTypeController::class, 'get']);

Route::get('/getSettings', [SettingController::class, 'getSettings']); 
Route::get('/activeComments', [SettingController::class, 'activeComments']);