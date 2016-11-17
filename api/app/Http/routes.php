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
use Illuminate\Support\Facades\App;
use SellsyApi\Client;

App::bind('SellsyClient', function($app)
{
    $client = new Client([
        'userToken' => env('SELLSY_USER_TOKEN'),
        'userSecret' => env('SELLSY_USER_SECRET'),
        'consumerToken'  => env('SELLSY_CONSUMER_TOKEN'),
        'consumerSecret' => env('SELLSY_CONSUMER_SECRET'),
    ]);

    return $client;
});

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
Route::get('/job-post/accept/{jobPostId}', 'JobController@accept')
    ->name('acceptJobPost');
Route::get('/job-post/reject/{jobPostId}', 'JobController@reject')
    ->name('rejectJobPost');
Route::get('/job-post/deactivate/{jobId}', 'JobController@deactivate')
    ->name('deactivateJobPost');
Route::get('/job-post/pull-up/{jobId}', 'JobController@pulluP')
    ->name('pulluP');

// User
Route::get('/sign-in/{email}/{password}', 'UserController@signIn')
    ->name('signIn');
Route::get('/user/get_infos/{userId?}', 'UserController@getInfos')
    ->name('getInfos');
Route::get('/user/confirm_address/{userId}', 'UserController@confirmEmailAddress')
    ->name('confirmEmailAddress');
Route::get('/user/activate/{userId}', 'UserController@activateAccount')
    ->name('activateAccount');
Route::get('/user/get/{userId}', 'UserController@get')
    ->name('getUserData');
Route::get('/user/sign_out', 'UserController@signOut')
    ->name('signOut');
Route::get('/user/login_using_id/{userId}', 'UserController@loginUsingId')
    ->name('loginUsingId');
Route::post('/user/create', 'UserController@createUser')
    ->name('createUser');
Route::post('/user/candidate/create', 'UserController@createCandidateUser')
    ->name('createCandidateUser');
Route::get('/user/matching_profiles/{userId?}', 'UserController@getMatchingProfiles')
    ->name('getMatchingProfiles');
Route::get('/user/businesses/{userId?}', 'UserController@getBusinesses')
    ->name('getAllUserBusinesses');
Route::post('/user/upload_profile_picture/{userId?}', 'UserController@uploadProfilePicture')
    ->name('uploadProfilePicture');
Route::post('/user/upload_resume/{userId?}', 'UserController@uploadResume')
    ->name('uploadResume');
Route::post('/user/save_info/{userId?}', 'UserController@saveInfo');
/*Route::post('/user/create_candidate', 'UserController@fillCandidateInfos')
    ->name('createCandidate');*/
Route::get('/user/get_profile_percentage/{userId?}', 'UserController@getProfilePercentage')
    ->name('getProfilePercentage');
Route::get('/user/disable_account', 'UserController@disableAccount')
    ->name('disableAccount');
Route::get('/user/make_candidate_accessible/{candidateId}', 'UserController@subtractProfileContact')
    ->name('subtractProfileContact');
Route::get('/user/access_to_candidate/{candidateId}', 'UserController@doRecruiterHasAccessToCandidate')
    ->name('doRecruiterHasAccessToCandidate');
Route::post('/user/save-job-seeking-data/{userId?}', 'UserController@saveJobSeekingData')
    ->name('saveJobSeekingData');
Route::post('/user/languages/save/{userId?}', 'UserController@saveSpokenLanguages')
    ->name('saveSpokenLanguages');
Route::get('/user/languages/{userId?}', 'UserController@getSpokenLanguages')
    ->name('getSpokenLanguages');
Route::get('/user/is-part-of-a-group/{userId?}', 'UserController@isPartOfAGroup')
    ->name('isUserPartOfAGroup');
Route::get('/user/skip-job-creation/{userId?}', 'UserController@skipJobCreationOnSignUp')
    ->name('skipJobCreationOnSignUp');
Route::get('/user/log', 'UserController@logUserInfos')
    ->name('logUserInfos');
Route::get('/password/update/{oldPassword}/{newPassword}/{userId?}', 'UserController@signIn')
    ->name('signIn');

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
Route::get('/club/detach-business/{clubId}/{businessId}', 'ClubController@detachBusiness')
    ->name('detachBusinessFromClub');
Route::get('/club/attach-business/{clubId}/{businessId}', 'ClubController@attachBusiness')
    ->name('attachBusinessToClub');
Route::post('/club/create', 'ClubController@create')
    ->name('createClub');
Route::get('/club/delete/{clubId}', 'ClubController@delete')
    ->name('createClub');
Route::get('/club/jobs/{clubId}', 'ClubController@getJobs')
    ->name('getClubJobs');

// Groups
Route::get('/groups/all', 'ClubController@getAllGroups')
    ->name('getAllGroups');

// References
Route::get('/states/all', 'ReferenceController@getAllStates')
    ->name('getAllStates');
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
Route::get('/candidate-statuses/all', 'ReferenceController@getAllCandidateStatuses')
    ->name('getAllCandidateStatuses');
Route::get('/languages/all', 'ReferenceController@getAllLanguages')
    ->name('getAllLanguages');
Route::get('/language-levels/all', 'ReferenceController@getAllLanguageLevels')
    ->name('getAllLanguageLevels');

// Applications
Route::get('/user/applications/{userId?}', 'UserController@getApplications')
    ->name('getApplications');
Route::post('/application/archivate/{applicationId}', 'UserController@archivateApplication')
    ->name('archivateApplication');
Route::get('/application/reject/{applicationId?}', 'ApplicationController@reject')
    ->name('rejectApplication');
Route::get('/application/accept/{applicationId?}', 'ApplicationController@accept')
    ->name('acceptApplication');

// Experiences
Route::get('/user/experiences/{userId?}', 'UserController@getExperiences')
    ->name('getAllExperiences');
Route::get('/experience/{experienceId}', 'UserController@getExperience')
    ->name('getExperience');
Route::post('/experience/create/{userId?}', 'ExperienceController@createExperience')
    ->name('createExperience');
Route::post('/experience/update/{userId?}', 'ExperienceController@updateExperience')
    ->name('updateExperience');
Route::get('/experience/delete/{experiences}', 'ExperienceController@deleteExperiences')
    ->name('deleteExperiences');

// Education
Route::get('/user/education/{userId?}', 'UserController@getEducation')
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
Route::get('/user/testimonials/{userId?}', 'UserController@getTestimonials')
    ->name('getTestimonials');
Route::get('/testimonial/reject/{testimonialId}', 'TestimonialController@reject')
    ->name('rejectTestimonial');
Route::get('/testimonial/{testimonialId?}', 'TestimonialController@get')
    ->name('getTestimonial');
Route::get('/created_testimonials/all', 'UserController@getCreatedTestimonials')
    ->name('getCreatedTestimonials');
Route::get('/testimonial/request/{businessId}/{experienceId}', 'TestimonialController@request')
    ->name('requestTestimonials');
Route::post('/testimonial/save/{testimonialId}', 'TestimonialController@update')
    ->name('updateTestimonial');

// Diplomas
Route::get('/diplomas/all', 'ReferenceController@getAllDiplomas')
    ->name('getAllDiplomas');

// Businesses
Route::post('/business/create/{userId?}', 'BusinessController@create')
    ->name('createBusiness');
Route::get('/business/{businessId}', 'BusinessController@get')
    ->name('getBusiness');
Route::get('/business/jobs/{businessId}', 'BusinessController@getJobs')
    ->name('getJobsFromBusiness');
Route::get('/businesses/all/', 'BusinessController@getAll')
    ->name('getAllBusinesses');
Route::get('/business/attach-user/{userId}/{businessId}', 'BusinessController@attachUser')
    ->name('attachUserToBusiness');
Route::get('/business/detach-user/{userId}/{businessId}', 'BusinessController@detachUser')
    ->name('detachUserFromBusiness');

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
Route::post('/plan/payment/save', 'UserController@savePayment')
    ->name('savePayment');

// Applicants
Route::get('/applicants/all', 'UserController@getApplicants')
    ->name('getAllApplicants');

// Mails
Route::get('/mail/templates/all', 'MailController@getTemplates')
    ->name('getMailTemplates');
Route::post('/mail/edit_template', 'MailController@editTemplate')
    ->name('editMailTemplate');
Route::get('/mail/template/{id}', 'MailController@getTemplate')
    ->name('getMailTemplate');

// Options
Route::post('/option/save', 'OptionController@save')
    ->name('saveOption');

// Socialite
Route::get('/auth/{provider}', 'Auth\AuthController@redirectToProvider')
    ->name('redirectToAuthProvider');
Route::get('/auth/{provider}/callback', 'Auth\AuthController@handleProviderCallback')
    ->name('handleAuthProviderCallback');

// Editor
Route::get('/website_editor/traffic_cats', 'WebsiteEditorController@getTrafficDrivenCats')
    ->name('getTrafficDrivenCats');
Route::post('/website_editor/save_traffic_cats', 'WebsiteEditorController@saveTrafficDrivenCats')
    ->name('saveTrafficDrivenCats');
Route::post('/seo-route', 'WebsiteEditorController@getSeoRoute')
    ->name('getSeoRoute');

// Sellsy
Route::get('/sellsy/services/all', 'SellsyController@getServices')
    ->name('getAllSellsyServices');

// Password reset link request routes
Route::get('/password/email', 'Auth\PasswordController@getEmail');
Route::post('/password/email', 'Auth\PasswordController@postEmail');

// Password reset routes
Route::get('/password/reset/{token}', 'Auth\PasswordController@getReset');
Route::post('/password/reset', 'Auth\PasswordController@postReset');

Route::get('/payline', 'UserController@doPaylinePayment');

Route::get('/import-db', 'ImportController@importDB')
    ->name('importDB');