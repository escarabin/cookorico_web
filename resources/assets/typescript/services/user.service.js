"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
var appGlobals = require('./../globals'); //<==== this one
// Services
var notification_service_1 = require('./notification.service.ts');
// Models
var notification_1 = require('./../models/notification');
var UserService = (function () {
    function UserService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
        this.signInUrl = appGlobals.apiUrl + '/sign-in/';
        this.getUserInfosUrl = appGlobals.apiUrl + '/user/get_infos';
        this.getApplicationsUrl = appGlobals.apiUrl + '/applications/all';
        this.getPlansUrl = appGlobals.apiUrl + '/user/plans/all';
        this.getExperiencesUrl = appGlobals.apiUrl + '/experiences/all';
        this.getExperienceUrl = appGlobals.apiUrl + '/experience';
        this.deleteExperiencesUrl = appGlobals.apiUrl + '/experience/delete';
        this.deleteEducationUrl = appGlobals.apiUrl + '/education/delete';
        this.getStudyUrl = appGlobals.apiUrl + '/study';
        this.updateStudyUrl = appGlobals.apiUrl + '/study/update';
        this.deleteAlertUrl = appGlobals.apiUrl + '/alert/delete';
        this.getEducationUrl = appGlobals.apiUrl + '/education/all';
        this.getAlertsUrl = appGlobals.apiUrl + '/alerts/all';
        this.getBusinessesUrl = appGlobals.apiUrl + '/user/businesses';
        this.getJobPostsUrl = appGlobals.apiUrl + '/user/job-posts/all';
        this.deleteJobPostsUrl = appGlobals.apiUrl + '/job-posts/delete';
        this.getBusinessUrl = appGlobals.apiUrl + '/business';
        this.getTestimonialsUrl = appGlobals.apiUrl + '/testimonials/all';
        this.getCreatedTestimonialsUrl = appGlobals.apiUrl + '/created_testimonials/all';
        this.createExperienceUrl = appGlobals.apiUrl + '/experience/create';
        this.updateExperienceUrl = appGlobals.apiUrl + '/experience/update';
        this.createStudyUrl = appGlobals.apiUrl + '/study/create';
        this.createAlertUrl = appGlobals.apiUrl + '/alert/create';
        this.getAlertUrl = appGlobals.apiUrl + '/alert';
        this.updateAlertUrl = appGlobals.apiUrl + '/alert/update';
        this.createUserUrl = appGlobals.apiUrl + '/user/create';
        this.saveUserInfoUrl = appGlobals.apiUrl + '/user/save_info';
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
        var __this = this;
        return this.http.get(__this.signInUrl + email + '/' + password);
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
        var requestBody = resume;
        var pdfPostRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/pdf' });
        var pdfPostRequestOptions = new http_1.RequestOptions({ headers: pdfPostRequestHeaders });
        return this.http.post(__this.uploadResumeUrl, requestBody, pdfPostRequestOptions);
    };
    /**
     * Save logged user edited profile info
     * @param key
     * @param value
     * @returns {Observable<Response>}
     */
    UserService.prototype.updateInfo = function (key, value) {
        var __this = this;
        var requestBody = JSON.stringify({ key: key, value: value });
        var userJson = JSON.parse(localStorage.getItem('user'));
        userJson[key] = value;
        localStorage.setItem('user', JSON.stringify(userJson));
        return this.http.post(__this.saveUserInfoUrl, requestBody, this.postRequestOptions);
    };
    /**
     * Error handling
     * @param error
     * @param notificationService
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
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map