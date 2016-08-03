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
Route::post('/jobs/search/', 'JobController@search')
    ->name('searchJobs');
Route::get('/user/job-posts/all', 'UserController@getJobPosts')
    ->name('getMyJobPosts');
Route::post('/job-post/create', 'JobController@create')
    ->name('createJobPost');

// User
Route::get('/sign-in/{email}/{password}', 'UserController@signIn')
    ->name('signIn');
Route::get('/user/get_infos', 'UserController@getInfos')
    ->name('getInfos');
Route::get('/user/sign_out', 'UserController@signOut')
    ->name('signOut');
Route::get('/user/create/{email}/{password}/{firstName}/{lastName}/{phone}/{birthDate}/{user_type_id}/{civility_id}', 'UserController@createUser')
    ->name('createUser');
Route::get('/user/businesses/', 'UserController@getBusinesses')
    ->name('getAllUserBusinesses');
Route::post('/user/upload_profile_picture', 'UserController@uploadProfilePicture')
    ->name('uploadProfilePicture');
Route::post('/user/upload_resume', 'UserController@uploadResume')
    ->name('uploadResume');
Route::post('/user/save_info', 'UserController@saveInfo');

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
Route::get('/study/{studyId}', 'EducationController@getStudy')
    ->name('getStudy');
Route::get('/education/delete/{listStudyId}', 'EducationController@deleteEducation')
    ->name('deleteEducation');
Route::post('/study/create', 'EducationController@createStudy')
    ->name('createStudy');
Route::post('/study/update', 'EducationController@updateStudy')
    ->name('updateStudy');

// Alerts
Route::get('/alerts/all', 'UserController@getAlerts')
    ->name('getAlerts');
Route::get('/alert/{alertId}', 'UserController@getAlert')
    ->name('getAlert');
Route::get('/alert/delete/{alertId}', 'AlertController@deleteAlerts')
    ->name('deleteAlerts');
Route::post('/alert/update', 'AlertController@updateAlert')
    ->name('updateAlert');
Route::post('/alert/create', 'AlertController@createAlert')
    ->name('createAlert');

// Testimonials
Route::get('/testimonials/all', 'UserController@getTestimonials')
    ->name('getTestimonials');
Route::get('/created_testimonials/all', 'UserController@getCreatedTestimonials')
    ->name('getCreatedTestimonials');

// Diplomas
Route::get('/diplomas/all', 'ReferenceController@getAllDiplomas')
    ->name('getAllDiplomas');

// Businesses
Route::post('/business/create', 'BusinessController@create')
    ->name('createBusiness');
Route::get('/business/{businessId}/', 'BusinessController@get')
    ->name('getBusiness');
Route::get('/businesses/all/', 'BusinessController@getAll')
    ->name('getAllBusinesses');

// Places
Route::post('/place/save/', 'PlaceController@save')
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

// Mails
Route::get('/mail/templates/all', 'MailController@getTemplates')
    ->name('getMailTemplates');
Route::post('/mail/edit_template', 'MailController@editTemplate')
    ->name('editMailTemplate');
Route::get('/mail/template/{id}', 'MailController@getTemplate')
    ->name('getMailTemplate');

// Socialite
Route::get('/auth/{provider}', 'Auth\AuthController@redirectToProvider')
    ->name('redirectToAuthProvider');
Route::get('/auth/{provider}/callback', 'Auth\AuthController@handleProviderCallback')
    ->name('handleAuthProviderCallback');

// Password reset link request routes
Route::get('/password/email', 'Auth\PasswordController@getEmail');
Route::post('/password/email', 'Auth\PasswordController@postEmail');

// Password reset routes
Route::get('/password/reset/{token}', 'Auth\PasswordController@getReset');
Route::post('/password/reset', 'Auth\PasswordController@postReset');