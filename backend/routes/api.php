<?php

use Illuminate\Http\Request;

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

Route::post('/quote' ,
[
    'uses' => 'QuotesController@postQuote'
]);

Route::get('/quotes' ,
[
    'uses' => 'QuotesController@getQuote'
]);

Route::put('/quote/{id}' ,
[
    'uses' => 'QuotesController@putQuote'
]);

Route::delete('/quote/{id}' ,
[
    'uses' => 'QuotesController@deleteQuote'
]);