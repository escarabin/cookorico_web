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
use Illuminate\Http\Request;

Route::get('/', 'HomeController@show')
    ->name('home');

Route::get('/profile/{userId}', 'UserController@showProfile')
    ->name('showProfile');
Route::get('/pricing', 'PricingControl@show')
    ->name('showPricing');

// Jobs
Route::post('/apply_job', 'JobController@apply')
    ->name('applyJob');
Route::get('/job/{id}', 'JobController@get')
    ->name('showJob');
Route::get('/jobs/all', 'JobController@getAll')
    ->name('getAllJobs');
Route::get('/jobs/search/{stateId?}/{jobNamingId?}/{contractTypeId?}/{searchText?}', 'JobController@search')
    ->name('searchJobs');
Route::get('/user/job-posts/all', 'UserController@getJobPosts')
    ->name('getMyJobPosts');
Route::post('/job-post/create', 'JobController@create')
    ->name('createJobPost');

// User
Route::get('/sign-in/{email}/{password}', 'UserController@signIn')
    ->name('signIn');
Route::get('/user/create/{email}/{password}/{firstName}/{lastName}/{phone}/{birthDate}/{user_type_id}/{civility_id}', 'UserController@createUser')
    ->name('createUser');
Route::get('/user/businesses/', 'UserController@getBusinesses')
    ->name('getAllUserBusinesses');

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
Route::get('/job_naming_groups/all', 'ReferenceController@getAllJobNamingGroups')
    ->name('getAllJobNamingGroups');
Route::get('/contract_types/all', 'ReferenceController@getAllContractTypes')
    ->name('getAllContractTypes');
Route::get('/study_levels/all', 'ReferenceController@getAllStudyLevels')
    ->name('getAllStudyLevels');
Route::get('/alert_frequencies/all', 'ReferenceController@getAllAlertFrequencies')
    ->name('getAllAlertFrequencies');
Route::get('/business_types/all', 'ReferenceController@getAllBusinessTypes')
    ->name('getAllBusinessTypes');
Route::get('/civilities/all', 'ReferenceController@getAllCivilities')
    ->name('getAllCivilities');

// Applications
Route::get('/applications/all', 'UserController@getApplications')
    ->name('getAllApplications');

// Experiences
Route::get('/experiences/all', 'UserController@getExperiences')
    ->name('getAllExperiences');
Route::get('/experience/{experienceId}', 'UserController@getExperience')
    ->name('getExperience');
Route::post('/experience/create', 'ExperienceController@createExperience')
    ->name('createExperience');
Route::post('/experience/update', 'ExperienceController@updateExperience')
    ->name('updateExperience');
Route::get('/experience/delete/{experiences}', 'ExperienceController@deleteExperiences')
    ->name('deleteExperiences');

// Education
Route::get('/education/all', 'UserController@getEducation')
    ->name('getEducation');
Route::get('/education/delete/{listStudyId}', 'EducationController@deleteEducation')
    ->name('deleteEducation');
Route::post('/study/create', 'EducationController@createStudy')
    ->name('createStudy');

// Alerts
Route::get('/alerts/all', 'UserController@getAlerts')
    ->name('getAlerts');
Route::get('/alert/{alertId}', 'UserController@getAlert')
    ->name('getAlert');
Route::get('/alert/delete/{alertId}', 'AlertController@deleteAlerts')
    ->name('deleteAlerts');
Route::get('/alert/save_changes/{alertId}/{alertFrequencyId}/{title}/{jobNamingId}/{place}', 'UserController@saveAlertChanges')
    ->name('saveAlertChanges');
Route::get('/alert/create/{alertFrequencyId}/{title}/{jobNamingId}/{place}', 'AlertController@createAlert')
    ->name('getAlerts');

// Testimonials
Route::get('/testimonials/all', 'UserController@getTestimonials')
    ->name('getTestimonials');
Route::get('/created_testimonials/all', 'UserController@getCreatedTestimonials')
    ->name('getCreatedTestimonials');

// Diplomas
Route::get('/diplomas/all', 'ReferenceController@getAllDiplomas')
    ->name('getAllDiplomas');

// Businesses
Route::get('/business/create/{name}/{lat}/{lon}/{adress}/{postalCode}/{city}/{website?}/{typeId}/{phone}/{email}/{description?}', 'BusinessController@create')
    ->name('getAllDiplomas');
Route::get('/business/{businessId}/', 'UserController@getBusiness')
    ->name('getBusiness');
Route::get('/businesses/all/', 'BusinessController@getAll')
    ->name('getAllBusinesses');

// Places
Route::get('/place/save/{googlePlaceId}/{adress}/{lat}/{lon}/{viewport_b_lat}/{viewport_b_lon}/{viewport_f_lat}/{viewport_f_lon}/{types}/{title}/{phone?}/{website?}/{city?}/{postalCode?}', 'PlaceController@save')
    ->name('savePlace');

// Files
Route::get('/file/upload/{bucket}/{fileName}', 'FileController@upload')
    ->name('uploadFile');

// JobXpLevels
Route::get('/job_xp_levels/all', 'ReferenceController@getAllJobXpLevels')
    ->name('getAllJobXpLevels');

// Plans
Route::get('/user/plans/all', 'UserController@getPlans')
    ->name('getAllPlans');

// Socialite
Route::get('/auth/{provider}', 'Auth\AuthController@redirectToProvider');
Route::get('/auth/{provider}/callback', 'Auth\AuthController@handleProviderCallback');

// Password reset link request routes
Route::get('/password/email', 'Auth\PasswordController@getEmail');
Route::post('/password/email', 'Auth\PasswordController@postEmail');

// Password reset routes
Route::get('/password/reset/{token}', 'Auth\PasswordController@getReset');
Route::post('/password/reset', 'Auth\PasswordController@postReset');