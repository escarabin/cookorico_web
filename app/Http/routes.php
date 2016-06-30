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

Route::get('/', 'HomeController@show')
    ->name('home');

Route::get('/profile/{userId}', 'UserController@showProfile')
    ->name('profile');
Route::get('/pricing', 'PricingControl@showProfile')
    ->name('profile');

// Jobs
Route::get('/job/{id}', 'JobController@get')
    ->name('showJob');
Route::get('/jobs/all', 'JobController@getAll')
    ->name('getAllJobs');
Route::get('/jobs/search/{stateId?}/{jobNamingId?}/{contractTypeId?}/{searchText?}', 'JobController@search')
    ->name('searchJobs');
Route::get('/job/apply/{jobId}/{comment}', 'JobController@apply')
    ->name('applyJob');

// User
Route::get('/sign-in/{email}/{password}', 'UserController@signIn')
    ->name('signIn');
Route::get('/sign-up', 'UserController@signUp')
    ->name('signup');

// Posts
Route::get('/post/{id}', 'PostController@get')
    ->name('getPost');
Route::get('/posts/all', 'PostController@getAll')
    ->name('getAllPosts');

// Clubs
Route::get('/club/{id}', 'ClubController@get')
    ->name('getClub');
Route::get('/clubs/all', 'ClubController@getAll')
    ->name('getAllClubs');

// References
Route::get('/states/all', 'ReferenceController@getAllStates')
    ->name('getAllClubs');
Route::get('/job_types/all', 'ReferenceController@getAllJobTypes')
    ->name('getAllJobTypes');
Route::get('/job_namings/all', 'ReferenceController@getAllJobNamings')
    ->name('getAllJobNamings');
Route::get('/contract_types/all', 'ReferenceController@getAllContractTypes')
    ->name('getAllContractTypes');
Route::get('/study_levels/all', 'ReferenceController@getAllStudyLevels')
    ->name('getAllStudyLevels');

// Applications
Route::get('/applications/all', 'UserController@getApplications')
    ->name('getAllApplications');

// Experiences
Route::get('/experiences/all', 'UserController@getExperiences')
    ->name('getAllExperiences');
Route::get('/experience/create/{jobNamingId}/{businessId}/{startDate}/{endDate}/{adress}/{description}', 'UserController@createExperience')
    ->name('createExperience');

// Education
Route::get('/education/all', 'UserController@getEducation')
    ->name('getEducation');
Route::get('/study/create/{diplomaId}/{businessId}/{startDate}/{endDate}/{adress}/{description}', 'UserController@createStudy')
    ->name('createStudy');

// Alerts
Route::get('/alerts/all', 'UserController@getAlerts')
    ->name('getAlerts');

// Testimonials
Route::get('/testimonials/all', 'UserController@getTestimonials')
    ->name('getTestimonials');
Route::get('/created_testimonials/all', 'UserController@getCreatedTestimonials')
    ->name('getCreatedTestimonials');

// Diplomas
Route::get('/diplomas/all', 'ReferenceController@getAllDiplomas')
    ->name('getAllDiplomas');