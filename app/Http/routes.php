<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'HomeController@show')->name('home');

Route::get('/profile/{userId}', 'UserController@showProfile')->name('profile');
Route::get('/sign-up', 'UserController@signUo')->name('signup');
Route::get('/pricing', 'PricingControl@showProfile')->name('profile');

// Jobs
Route::get('/job/{id}', 'JobController@get')->name('showJob');
Route::get('/jobs/all', 'JobController@getAll')->name('getAllJobs');