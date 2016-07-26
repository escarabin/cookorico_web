System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/catch', './notification.service', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, http_1, notification_service_1, notification_1;
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
                    this.signInUrl = '/sign-in/';
                    this.getApplicationsUrl = '/applications/all';
                    this.getPlansUrl = '/user/plans/all';
                    this.getExperiencesUrl = '/experiences/all';
                    this.getExperienceUrl = '/experience';
                    this.deleteExperiencesUrl = '/experience/delete';
                    this.deleteEducationUrl = '/education/delete';
                    this.getStudyUrl = '/study';
                    this.updateStudyUrl = '/study/update';
                    this.deleteAlertUrl = '/alert/delete';
                    this.getEducationUrl = '/education/all';
                    this.getAlertsUrl = '/alerts/all';
                    this.getBusinessesUrl = '/user/businesses';
                    this.getJobPostsUrl = '/user/job-posts/all';
                    this.deleteJobPostsUrl = '/job-posts/delete';
                    this.getBusinessUrl = '/business';
                    this.getTestimonialsUrl = '/testimonials/all';
                    this.getCreatedTestimonialsUrl = '/created_testimonials/all';
                    this.createExperienceUrl = '/experience/create';
                    this.updateExperienceUrl = '/experience/update';
                    this.createStudyUrl = '/study/create';
                    this.createAlertUrl = '/alert/create';
                    this.getAlertUrl = '/alert';
                    this.updateAlertUrl = '/alert/update';
                    this.createUserUrl = '/user/create';
                    this.saveUserDescriptionUrl = '/user/save_description';
                    this.uploadProfilePictureUrl = '/user/upload_profile_picture';
                    this.uploadResumeUrl = '/user/upload_resume';
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
                    var __this = this;
                    return this.http.get(__this.signInUrl + email + '/' + password);
                };
                /**
                 * Create a new user
                 * @param user
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createUser = function (user) {
                    var __this = this;
                    return this.http.get(__this.createUserUrl + '/' +
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
                 */
                UserService.prototype.getApplications = function () {
                    var __this = this;
                    return this.http.get(__this.getApplicationsUrl);
                };
                /**
                 * Get user's work experiences
                 */
                UserService.prototype.getExperiences = function () {
                    var __this = this;
                    return this.http.get(__this.getExperiencesUrl);
                };
                /**
                 * Get user's specific experience
                 * @param experienceId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getExperience = function (experienceId) {
                    var __this = this;
                    return this.http.get(__this.getExperienceUrl + '/' + experienceId);
                };
                /**
                 * Delete experiences based on a comma separated list of ids
                 * @param listExperienceId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.deleteExperiences = function (listExperienceId) {
                    var __this = this;
                    return this.http.get(__this.deleteExperiencesUrl + '/' + listExperienceId);
                };
                /**
                 * Get user's education
                 */
                UserService.prototype.getEducation = function () {
                    var __this = this;
                    return this.http.get(__this.getEducationUrl);
                };
                /**
                 * Get user's specific study regarding id
                 * @param studyId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getStudy = function (studyId) {
                    var __this = this;
                    return this.http.get(__this.getStudyUrl + '/' + studyId);
                };
                /**
                 * Delete specific user's education studies
                 * @param listStudyId
                 */
                UserService.prototype.deleteEducation = function (listStudyId) {
                    var __this = this;
                    return this.http.get(__this.deleteEducationUrl + '/' + listStudyId);
                };
                /**
                 * Get user's new job alerts
                 */
                UserService.prototype.getAlerts = function () {
                    var __this = this;
                    return this.http.get(__this.getAlertsUrl);
                };
                /**
                 * Get user's job posts
                 */
                UserService.prototype.getJobPosts = function () {
                    var __this = this;
                    return this.http.get(__this.getJobPostsUrl);
                };
                /**
                 * Delete specific user's job posts
                 * @param listJobPostId
                 */
                UserService.prototype.deleteJobPosts = function (listJobPostId) {
                    var __this = this;
                    return this.http.get(__this.deleteJobPostsUrl + '/' + listJobPostId);
                };
                /**
                 * Delete specific user's alerts
                 * @param studyId
                 */
                UserService.prototype.deleteAlerts = function (listAlertId) {
                    var __this = this;
                    return this.http.get(__this.deleteAlertUrl + '/' + listAlertId);
                };
                /**
                 * Get user specific job alert
                 * @param alertId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getAlert = function (alertId) {
                    var __this = this;
                    return this.http.get(__this.getAlertUrl + '/' + alertId);
                };
                /**
                 * Get user's testimonials
                 */
                UserService.prototype.getTestimonials = function () {
                    var __this = this;
                    return this.http.get(__this.getTestimonialsUrl);
                };
                /**
                 * Get user's created testimonials
                 */
                UserService.prototype.getCreatedTestimonials = function () {
                    var __this = this;
                    return this.http.get(__this.getCreatedTestimonialsUrl);
                };
                /**
                 * Get user's businesses
                 */
                UserService.prototype.getBusinesses = function () {
                    var __this = this;
                    return this.http.get(__this.getBusinessesUrl);
                };
                /**
                 * Get user specific business
                 * @param businessId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getBusiness = function (businessId) {
                    var __this = this;
                    return this.http.get(__this.getBusinessUrl + '/' + businessId);
                };
                /**
                 * Get the plans that current user subscribed to
                 * @returns {any}
                 */
                UserService.prototype.getPlans = function () {
                    var __this = this;
                    return this.http.get(__this.getPlansUrl);
                };
                /**
                 * Create new work experience
                 * @param experience
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createExperience = function (experience) {
                    var __this = this;
                    var requestBody = JSON.stringify({ experience: experience });
                    return this.http.post(__this.createExperienceUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Update existing work experience
                 * @param experience
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.updateExperience = function (experience) {
                    var __this = this;
                    var requestBody = JSON.stringify({ experience: experience });
                    return this.http.post(__this.updateExperienceUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Create new study
                 * @param study
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createStudy = function (study) {
                    var __this = this;
                    var requestBody = JSON.stringify({ study: study });
                    return this.http.post(__this.createStudyUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Update existing study
                 * @param study
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.updateStudy = function (study) {
                    var __this = this;
                    var requestBody = JSON.stringify({ study: study });
                    return this.http.post(__this.updateStudyUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Create new job alert
                 * @param alert
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createAlert = function (alert) {
                    var __this = this;
                    var requestBody = JSON.stringify({ alert: alert });
                    return this.http.post(__this.createAlertUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Update exisiting job alert
                 * @param alert
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.updateAlert = function (alert) {
                    var __this = this;
                    var requestBody = JSON.stringify({ alert: alert });
                    return this.http.post(__this.updateAlertUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Upload new profile picture for current user
                 * @param base64
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.uploadProfilePicture = function (base64) {
                    var __this = this;
                    var requestBody = JSON.stringify({ base64: base64 });
                    return this.http.post(__this.uploadProfilePictureUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Upload new resume for current user
                 * @param resume
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.uploadResume = function (resume) {
                    var __this = this;
                    console.log('resume is ', resume);
                    var requestBody = resume;
                    var pdfPostRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/pdf' });
                    var pdfPostRequestOptions = new http_1.RequestOptions({ headers: pdfPostRequestHeaders });
                    return this.http.post(__this.uploadResumeUrl, requestBody, pdfPostRequestOptions);
                };
                /**
                 * Save logged user new description
                 * @param description
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.saveDescription = function (description) {
                    var __this = this;
                    var requestBody = JSON.stringify({ description: description });
                    return this.http.post(__this.saveUserDescriptionUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * Error handling
                 * @param error
                 */
                UserService.prototype.handleError = function (error, notificationService) {
                    var __this = this;
                    console.log(__this, __this.notificationService);
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
