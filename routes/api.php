<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\interestPointController;


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

Route::post('/puntodeinteres/getPoint', [interestPointController::class, 'getInterestPoint'])-> name('front.InterestPoint');
Route::post('/puntodeinteres/getResources', [interestPointController::class, 'getResourcesFromPoint'])-> name('front.resourcesFromPoint');