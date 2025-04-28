<?php

use App\Http\Controllers\SportsStoreController;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;

Route::get('/', [SportsStoreController::class, 'index']);

if (Config::get('app.debug')) {
    Route::get('/logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');
}

if (Config::get('sports-store.api_doc.display_swagger_ui')) {
    Route::get('/swagger-ui', function () {
        return view('swagger.index');
    });
}

if (Config::get('sports-store.api_doc.display_redoc')) {
    Route::get('/redoc', function () {
        return view('openapi-spec.redoc');
    });
}

if (Config::get('sports-store.api_doc.display_swagger_ui')) {
    Route::get('/swagger-ui', function () {
        return view('openapi-spec.swagger');
    });
}
