System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/catch', './../globals', './notification.service', '../models/notification'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, appGlobals, notification_service_1, notification_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (appGlobals_1) {
                appGlobals = appGlobals_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http, notificationService) {
                    this.http = http;
                    this.notificationService = notificationService;
                    this.signInUrl = appGlobals.apiUrl + '/sign-in/';
                    this.getUserInfosUrl = appGlobals.apiUrl + '/user/get_infos';
                    this.getUserUrl = appGlobals.apiUrl + '/user/get';
                    this.getApplicationsUrl = appGlobals.apiUrl + '/user/applications';
                    this.archivateApplicationUrl = appGlobals.apiUrl + '/application/archivate';
                    this.getPlansUrl = appGlobals.apiUrl + '/user/plans/all';
                    this.getExperiencesUrl = appGlobals.apiUrl + '/user/experiences';
                    this.getExperienceUrl = appGlobals.apiUrl + '/experience';
                    this.deleteExperiencesUrl = appGlobals.apiUrl + '/experience/delete';
                    this.deleteEducationUrl = appGlobals.apiUrl + '/education/delete';
                    this.getStudyUrl = appGlobals.apiUrl + '/study';
                    this.updateStudyUrl = appGlobals.apiUrl + '/study/update';
                    this.deleteAlertUrl = appGlobals.apiUrl + '/alert/delete';
                    this.getEducationUrl = appGlobals.apiUrl + '/user/education';
                    this.getAlertsUrl = appGlobals.apiUrl + '/alerts/all';
                    this.getBusinessesUrl = appGlobals.apiUrl + '/user/businesses';
                    this.getJobPostsUrl = appGlobals.apiUrl + '/user/job-posts/all';
                    this.deleteJobPostsUrl = appGlobals.apiUrl + '/job-posts/delete';
                    this.getBusinessUrl = appGlobals.apiUrl + '/business';
                    this.getTestimonialsUrl = appGlobals.apiUrl + '/user/testimonials';
                    this.getCreatedTestimonialsUrl = appGlobals.apiUrl + '/created_testimonials/all';
                    this.createExperienceUrl = appGlobals.apiUrl + '/experience/create';
                    this.updateExperienceUrl = appGlobals.apiUrl + '/experience/update';
                    this.createStudyUrl = appGlobals.apiUrl + '/study/create';
                    this.createAlertUrl = appGlobals.apiUrl + '/alert/create';
                    this.getAlertUrl = appGlobals.apiUrl + '/alert';
                    this.getApplicantsUrl = appGlobals.apiUrl + '/applicants/all';
                    this.updateAlertUrl = appGlobals.apiUrl + '/alert/update';
                    this.createUserUrl = appGlobals.apiUrl + '/user/create';
                    this.resetPasswordUrl = appGlobals.apiUrl + '/password/email';
                    this.saveUserInfoUrl = appGlobals.apiUrl + '/user/save_info';
                    this.signOutUrl = appGlobals.apiUrl + '/user/sign_out';
                    this.uploadProfilePictureUrl = appGlobals.apiUrl + '/user/upload_profile_picture';
                    this.uploadResumeUrl = appGlobals.apiUrl + '/user/upload_resume';
                    this.postRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.postRequestOptions = new http_1.RequestOptions({ headers: this.postRequestHeaders });
                }
                /**
                 * Sign user in
                 * @param email
                 * @param password
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.login = function (email, password) {
                    return this.http.get(this.signInUrl + email + '/' + password);
                };
                /**
                 * Get data from specific user
                 * @param userId
                 */
                UserService.prototype.get = function (userId) {
                    return this.http.get(this.getUserUrl + '/' + userId);
                };
                /**
                 * Sign out current user
                 */
                UserService.prototype.signOut = function () {
                    return this.http.get(this.signOutUrl);
                };
                /**
                 *
                 * @param email
                 * @returns {any}
                 */
                UserService.prototype.resetPassword = function (email) {
                    var requestBody = JSON.stringify({ email: email });
                    return this.http.post(this.resetPasswordUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Get current user infos
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getUserInfos = function () {
                    var __this = this;
                    return this.http.get(__this.getUserInfosUrl);
                };
                /**
                 * Create a new user
                 * @param user
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createUser = function (user) {
                    return this.http.get(this.createUserUrl + '/' +
                        user.email + '/' +
                        user.password + '/' +
                        user.firstName + '/' +
                        user.lastName + '/' +
                        user.phone + '/' +
                        user.birth_date + '/' +
                        user.user_type_id + '/' +
                        user.civility_id);
                };
                /**
                 * Get user's job applications
                 * @param userId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getApplications = function (userId) {
                    return this.http.get(this.getApplicationsUrl + '/' + userId);
                };
                /**
                 * Archivate specific user application
                 * @param applicationId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.archivateApplication = function (applicationId) {
                    var requestBody = JSON.stringify({ applicationId: applicationId });
                    return this.http.post(this.archivateApplicationUrl + '/' + applicationId, requestBody, this.postRequestOptions);
                };
                /**
                 * Get user's work experiences
                 * @param userId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getExperiences = function (userId) {
                    return this.http.get(this.getExperiencesUrl + '/' + userId);
                };
                /**
                 * Get user's specific experience
                 * @param experienceId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getExperience = function (experienceId) {
                    return this.http.get(this.getExperienceUrl + '/' + experienceId);
                };
                /**
                 * Delete experiences based on a comma separated list of ids
                 * @param listExperienceId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.deleteExperiences = function (listExperienceId) {
                    return this.http.get(this.deleteExperiencesUrl + '/' + listExperienceId);
                };
                /**
                 * Get user's education
                 * @param userId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getEducation = function (userId) {
                    return this.http.get(this.getEducationUrl + '/' + userId);
                };
                /**
                 * Get user's specific study regarding id
                 * @param studyId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getStudy = function (studyId) {
                    return this.http.get(this.getStudyUrl + '/' + studyId);
                };
                /**
                 * Delete specific user's education studies
                 * @param listStudyId
                 */
                UserService.prototype.deleteEducation = function (listStudyId) {
                    return this.http.get(this.deleteEducationUrl + '/' + listStudyId);
                };
                /**
                 * Get user's new job alerts
                 */
                UserService.prototype.getAlerts = function () {
                    return this.http.get(this.getAlertsUrl);
                };
                /**
                 * Get user's job posts
                 */
                UserService.prototype.getJobPosts = function () {
                    return this.http.get(this.getJobPostsUrl);
                };
                /**
                 * Delete specific user's job posts
                 * @param listJobPostId
                 */
                UserService.prototype.deleteJobPosts = function (listJobPostId) {
                    return this.http.get(this.deleteJobPostsUrl + '/' + listJobPostId);
                };
                /**
                 * Delete specific user's alerts
                 * @param studyId
                 */
                UserService.prototype.deleteAlerts = function (listAlertId) {
                    return this.http.get(this.deleteAlertUrl + '/' + listAlertId);
                };
                /**
                 * Get user specific job alert
                 * @param alertId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getAlert = function (alertId) {
                    return this.http.get(this.getAlertUrl + '/' + alertId);
                };
                /**
                 * Get user's testimonials
                 * @param userId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getTestimonials = function (userId) {
                    return this.http.get(this.getTestimonialsUrl + '/' + userId);
                };
                /**
                 * Get user's created testimonials
                 */
                UserService.prototype.getCreatedTestimonials = function () {
                    return this.http.get(this.getCreatedTestimonialsUrl);
                };
                /**
                 * Get user's businesses
                 */
                UserService.prototype.getBusinesses = function () {
                    return this.http.get(this.getBusinessesUrl);
                };
                /**
                 * Get user specific business
                 * @param businessId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getBusiness = function (businessId) {
                    return this.http.get(this.getBusinessUrl + '/' + businessId);
                };
                /**
                 * Get the plans that current user subscribed to
                 * @returns {any}
                 */
                UserService.prototype.getPlans = function () {
                    return this.http.get(this.getPlansUrl);
                };
                /**
                 * Get users that applied to logged user job offers
                 * @returns {any}
                 */
                UserService.prototype.getApplicants = function () {
                    return this.http.get(this.getApplicantsUrl);
                };
                /**
                 * Create new work experience
                 * @param experience
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createExperience = function (experience) {
                    var requestBody = JSON.stringify({ experience: experience });
                    return this.http.post(this.createExperienceUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Update existing work experience
                 * @param experience
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.updateExperience = function (experience) {
                    var requestBody = JSON.stringify({ experience: experience });
                    return this.http.post(this.updateExperienceUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Create new study
                 * @param study
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createStudy = function (study) {
                    var requestBody = JSON.stringify({ study: study });
                    return this.http.post(this.createStudyUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Update existing study
                 * @param study
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.updateStudy = function (study) {
                    var requestBody = JSON.stringify({ study: study });
                    return this.http.post(this.updateStudyUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Create new job alert
                 * @param alert
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createAlert = function (alert) {
                    var requestBody = JSON.stringify({ alert: alert });
                    return this.http.post(this.createAlertUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Update exisiting job alert
                 * @param alert
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.updateAlert = function (alert) {
                    var requestBody = JSON.stringify({ alert: alert });
                    return this.http.post(this.updateAlertUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Upload new profile picture for current user
                 * @param base64
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.uploadProfilePicture = function (base64) {
                    var requestBody = JSON.stringify({ base64: base64 });
                    return this.http.post(this.uploadProfilePictureUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Upload new resume for current user
                 * @param resume
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.uploadResume = function (resume) {
                    var requestBody = resume;
                    var pdfPostRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/pdf' });
                    var pdfPostRequestOptions = new http_1.RequestOptions({ headers: pdfPostRequestHeaders });
                    return this.http.post(this.uploadResumeUrl, requestBody, pdfPostRequestOptions);
                };
                /**
                 * Save logged user edited profile info
                 * @param key
                 * @param value
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.updateInfo = function (key, value) {
                    var requestBody = JSON.stringify({ key: key, value: value });
                    var userJson = JSON.parse(localStorage.getItem('user'));
                    userJson[key] = value;
                    localStorage.setItem('user', JSON.stringify(userJson));
                    return this.http.post(this.saveUserInfoUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Error handling
                 * @param error
                 * @param notificationService
                 */
                UserService.prototype.handleError = function (error, notificationService) {
                    var errMsg = (error.message) ? error.message : error.status;
                    if (!errMsg) {
                        errMsg = 'Une erreur inconnue s\'est produite, veuillez rééssayer';
                    }
                    notificationService.show(new notification_1.Notification('error', errMsg));
                    console.error(errMsg); // log to console instead
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, notification_service_1.NotificationsService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
