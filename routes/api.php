<?php

use App\Http\Controllers\admin\interestPointController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CommentController;



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