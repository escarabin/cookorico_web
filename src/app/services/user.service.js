"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
var Observable_1 = require('rxjs/Observable');
var globals_1 = require('../globals');
// Models
var notification_1 = require('../models/notification');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.signInUrl = globals_1.apiUrl + '/sign-in/';
        this.getUserInfosUrl = globals_1.apiUrl + '/user/get_infos';
        this.getUserUrl = globals_1.apiUrl + '/user/get';
        this.getApplicationsUrl = globals_1.apiUrl + '/user/applications';
        this.archivateApplicationUrl = globals_1.apiUrl + '/application/archivate';
        this.getPlansUrl = globals_1.apiUrl + '/user/plans/all';
        this.getExperiencesUrl = globals_1.apiUrl + '/user/experiences';
        this.getExperienceUrl = globals_1.apiUrl + '/experience';
        this.deleteExperiencesUrl = globals_1.apiUrl + '/experience/delete';
        this.deleteEducationUrl = globals_1.apiUrl + '/education/delete';
        this.getStudyUrl = globals_1.apiUrl + '/study';
        this.updateStudyUrl = globals_1.apiUrl + '/study/update';
        this.deleteAlertUrl = globals_1.apiUrl + '/alert/delete';
        this.getEducationUrl = globals_1.apiUrl + '/user/education';
        this.getAlertsUrl = globals_1.apiUrl + '/alerts/all';
        this.getBusinessesUrl = globals_1.apiUrl + '/user/businesses';
        this.getMatchingProfilesUrl = globals_1.apiUrl + '/user/matching_profiles';
        this.getJobPostsUrl = globals_1.apiUrl + '/user/job-posts/all';
        this.deleteJobPostsUrl = globals_1.apiUrl + '/job-posts/delete';
        this.getBusinessUrl = globals_1.apiUrl + '/business';
        this.getTestimonialsUrl = globals_1.apiUrl + '/user/testimonials';
        this.getTestimonialUrl = globals_1.apiUrl + '/testimonial';
        this.rejectTestimonialRequestUrl = globals_1.apiUrl + '/testimonial/reject';
        this.saveTestimonialUrl = globals_1.apiUrl + '/testimonial/save';
        this.getCreatedTestimonialsUrl = globals_1.apiUrl + '/created_testimonials/all';
        this.createExperienceUrl = globals_1.apiUrl + '/experience/create';
        this.updateExperienceUrl = globals_1.apiUrl + '/experience/update';
        this.createStudyUrl = globals_1.apiUrl + '/study/create';
        this.createAlertUrl = globals_1.apiUrl + '/alert/create';
        this.getAlertUrl = globals_1.apiUrl + '/alert';
        this.getApplicantsUrl = globals_1.apiUrl + '/applicants/all';
        this.updateAlertUrl = globals_1.apiUrl + '/alert/update';
        this.createUserUrl = globals_1.apiUrl + '/user/create';
        this.createCandidateUserUrl = globals_1.apiUrl + '/user/candidate/create';
        this.resetPasswordUrl = globals_1.apiUrl + '/password/email';
        this.changePasswordUrl = globals_1.apiUrl + '/password/update';
        this.saveUserInfoUrl = globals_1.apiUrl + '/user/save_info';
        this.signOutUrl = globals_1.apiUrl + '/user/sign_out';
        this.uploadProfilePictureUrl = globals_1.apiUrl + '/user/upload_profile_picture';
        this.uploadResumeUrl = globals_1.apiUrl + '/user/upload_resume';
        // createCandidateUrl = apiUrl + '/user/create_candidate';
        this.confirmEmailAddressUrl = globals_1.apiUrl + '/user/confirm_address';
        this.activateUserUrl = globals_1.apiUrl + '/user/activate';
        this.loginUsingIdUrl = globals_1.apiUrl + '/user/login_using_id';
        this.disableAccountUrl = globals_1.apiUrl + '/user/disable_account';
        this.getFillPercentageUrl = globals_1.apiUrl + '/user/get_profile_percentage';
        this.makeCandidateAccessibleUrl = globals_1.apiUrl + '/user/make_candidate_accessible';
        this.doRecruiterHasAccessToCandidateUrl = globals_1.apiUrl + '/user/access_to_candidate';
        this.acceptJobPostUrl = globals_1.apiUrl + '/job-post/accept';
        this.rejectJobPostUrl = globals_1.apiUrl + '/job-post/reject';
        this.saveLanguagesUrl = globals_1.apiUrl + '/user/languages/save';
        this.getSpokenLanguagesUrl = globals_1.apiUrl + '/user/languages';
        this.saveJobSeekingDataUrl = globals_1.apiUrl + '/user/save-job-seeking-data';
        this.isUserPartOfAGroupUrl = globals_1.apiUrl + '/user/is-part-of-a-group';
        this.skipJobCreationUrl = globals_1.apiUrl + '/user/skip-job-creation';
        this.getAllRecruitersUrl = globals_1.apiUrl + '/user/recruiters/all';
        this.searchRecruitersUrl = globals_1.apiUrl + '/user/recruiters/search';
        this.noExperienceUrl = globals_1.apiUrl + '/user/no-experience';
        this.postRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.postRequestOptions = new http_1.RequestOptions({ headers: this.postRequestHeaders });
        this.userChangeEmitter = new core_1.EventEmitter();
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
     * Login user using specific id
     * @param userId
     */
    UserService.prototype.loginUsingId = function (userId) {
        return this.http.get(this.loginUsingIdUrl + '/' + userId);
    };
    /**
     * Activate specific user account
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.activateAccount = function (userId) {
        this.userChangeEmitter.emit(userId);
        return this.http.get(this.activateUserUrl + '/' + userId);
    };
    /**
     * Disable currently logged user account
     * @returns {Observable<Response>}
     */
    UserService.prototype.disableAccount = function () {
        return this.http.get(this.disableAccountUrl);
    };
    /**
     * Get data from specific user
     * @param userId
     */
    UserService.prototype.get = function (userId) {
        return this.http.get(this.getUserUrl + '/' + userId);
    };
    /**
     * Save testimonial recruiter reply
     * @param tesimonialId
     * @param testimonialReplyContent
     * @returns {Observable<Response>}
     */
    UserService.prototype.saveTestimonialReply = function (tesimonialId, testimonialReplyContent) {
        var requestBody = JSON.stringify({ answer_content: testimonialReplyContent, is_accepted: true });
        return this.http.post(this.saveTestimonialUrl + '/' + tesimonialId, requestBody, this.postRequestOptions);
    };
    /**
     * Reject specific testimonial request
     * @param testimonialId
     */
    UserService.prototype.rejectTestimonialRequest = function (testimonialId) {
        return this.http.get(this.rejectTestimonialRequestUrl + '/' + testimonialId);
    };
    /**
     * Sign out current user
     */
    UserService.prototype.signOut = function () {
        localStorage.removeItem('user');
        this.userChangeEmitter.emit('logout');
        return this.http.get(this.signOutUrl);
    };
    /**
     * Confirm account email address
     * @param userId
     */
    UserService.prototype.confirmEmailAddress = function (userId) {
        console.log('emitting userId');
        this.userChangeEmitter.emit(userId);
        return this.http.get(this.confirmEmailAddressUrl + '/' + userId);
    };
    /**
     * Send user a mail to reset his password
     * @param email
     * @returns {any}
     */
    UserService.prototype.resetPassword = function (email) {
        return this.http.get(this.resetPasswordUrl + '/' + email);
    };
    /**
     * Get current user infos
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.getUserInfos = function (userId) {
        var __this = this;
        return this.http.get(__this.getUserInfosUrl + '/' + userId);
    };
    /**
     * Create a new user
     * @param email
     * @param password
     * @param user_type_id
     * @param firstName
     * @param lastName
     * @param civilityId
     * @returns {Observable<Response>}
     */
    UserService.prototype.createUser = function (email, password, user_type_id, lastName, firstName, civilityId) {
        var requestBody = JSON.stringify({ email: email, password: password, user_type_id: user_type_id, firstName: firstName, lastName: lastName, civilityId: civilityId });
        return this.http.post(this.createUserUrl, requestBody, this.postRequestOptions);
    };
    /**
     * Create a candidate new user
     * @param user
     * @param lookingForJobNamingList
     * @returns {Observable<Response>}
     */
    UserService.prototype.createCandidateUser = function (user, lookingForJobNamingList) {
        var requestBody = JSON.stringify({ user: user, lookingForJobNamingList: lookingForJobNamingList });
        return this.http.post(this.createCandidateUserUrl, requestBody, this.postRequestOptions);
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
     * Get user's matching profiles for all job-posts
     * @param userId
     */
    UserService.prototype.getMatchingProfiles = function (userId) {
        return this.http.get(this.getMatchingProfilesUrl + '/' + userId);
    };
    /**
     * Get user's job posts
     * @param userId
     * @param includeDisabled
     */
    UserService.prototype.getJobPosts = function (userId, includeDisabled) {
        return this.http.get(this.getJobPostsUrl + '/' + userId + '/' + includeDisabled);
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
     * Get user's specific testimonial
     * @param testimonialId
     * @returns {Observable<Response>}
     */
    UserService.prototype.getTestimonial = function (testimonialId) {
        return this.http.get(this.getTestimonialUrl + '/' + testimonialId);
    };
    /**
     * Get user's created testimonials
     * @param userId
     */
    UserService.prototype.getAskedTestimonials = function (userId) {
        return this.http.get(this.getCreatedTestimonialsUrl + '/' + userId);
    };
    /**
     * Get user's businesses
     * @param userId
     */
    UserService.prototype.getBusinesses = function (userId) {
        return this.http.get(this.getBusinessesUrl + '/' + userId);
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
     * @param userId
     * @returns {any}
     */
    UserService.prototype.getPlans = function (userId) {
        return this.http.get(this.getPlansUrl + '/' + userId);
    };
    /**
     * Get users that applied to logged user job offers
     * @param userId
     * @returns {any}
     */
    UserService.prototype.getApplicants = function (userId) {
        return this.http.get(this.getApplicantsUrl + '/' + userId);
    };
    /**
     * Create new work experience
     * @param experience
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.createExperience = function (experience, userId) {
        var requestBody = JSON.stringify({ experience: experience });
        return this.http.post(this.createExperienceUrl + '/' + userId, requestBody, this.postRequestOptions);
    };
    /**
     * Update existing work experience
     * @param experience
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.updateExperience = function (experience) {
        var requestBody = JSON.stringify({ experience: experience });
        return this.http.post(this.updateExperienceUrl, requestBody, this.postRequestOptions);
    };
    /**
     * Create new study
     * @param study
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.createStudy = function (study, userId) {
        var requestBody = JSON.stringify({ study: study });
        return this.http.post(this.createStudyUrl + '/' + userId, requestBody, this.postRequestOptions);
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
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.uploadProfilePicture = function (base64, userId) {
        var requestBody = JSON.stringify({ base64: base64 });
        return this.http.post(this.uploadProfilePictureUrl + '/' + userId, requestBody, this.postRequestOptions);
    };
    /**
     * Save the fact that the current has no experience
     * @param userId
     */
    UserService.prototype.noExperience = function (userId) {
        return this.http.request(this.noExperienceUrl + '/' + userId);
    };
    /**
     * Upload new resume for current user
     * @param resume
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.uploadResume = function (resume, userId) {
        var requestBody = JSON.stringify({ resume: resume });
        var pdfPostRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var pdfPostRequestOptions = new http_1.RequestOptions({ headers: pdfPostRequestHeaders });
        return this.makeFileRequest(this.uploadResumeUrl + '/' + userId, [resume]);
    };
    UserService.prototype.makeFileRequest = function (url, files) {
        return Observable_1.Observable.create(function (observer) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            /*xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);

                this.progressObserver.next(this.progress);
            };*/
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    };
    /**
     * Save logged user edited profile info
     * @param key
     * @param value
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.updateInfo = function (key, value, userId) {
        var requestBody = JSON.stringify({ key: key, value: value });
        var userJson = JSON.parse(localStorage.getItem('user'));
        userJson[key] = value;
        localStorage.setItem('user', JSON.stringify(userJson));
        return this.http.post(this.saveUserInfoUrl + '/' + userId, requestBody, this.postRequestOptions);
    };
    /**
     * Create candidate user
     * @param user

    createCandidate(user: User, lookingForJobsNamingIdList: any) {
        let requestBody = JSON.stringify({ user, lookingForJobsNamingIdList });

        return this.http.post(this.createCandidateUrl, requestBody, this.postRequestOptions);
    }
     */
    /**
     * Get the percentage which the profile is filled in
     */
    UserService.prototype.getProfilePercentage = function (userId) {
        return this.http.get(this.getFillPercentageUrl + '/' + userId);
    };
    /**
     * Subtract one contact credit from user after he asked
     * for access to user infos
     */
    UserService.prototype.makeCandidateAccessible = function (amount) {
        return this.http.get(this.makeCandidateAccessibleUrl + '/' + amount);
    };
    /**
     * Check out if recruiter has access to specific candidate infos
     */
    UserService.prototype.doRecruiterHasAccessToCandidate = function (candidateId, recruiterId) {
        return this.http.get(this.doRecruiterHasAccessToCandidateUrl + '/' + candidateId + '/' + recruiterId);
    };
    /**
     * Accept specifc job post as admin user
     * @param jobPostId
     */
    UserService.prototype.acceptJobPost = function (jobPostId) {
        return this.http.get(this.acceptJobPostUrl + '/' + jobPostId);
    };
    /**
     * Reject specifc job post as admin user
     * @param jobPostId
     */
    UserService.prototype.rejectJobPost = function (jobPostId) {
        return this.http.get(this.rejectJobPostUrl + '/' + jobPostId);
    };
    /**
     * Save logged user job seeking data
     * @param lookingForJobNamingList
     * @param alertFrequencyId
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.saveJobSeekingData = function (lookingForJobNamingList, alertFrequencyId, userId) {
        var requestBody = JSON.stringify({ lookingForJobNamingList: lookingForJobNamingList, alertFrequencyId: alertFrequencyId });
        return this.http.post(this.saveJobSeekingDataUrl + '/' + userId, requestBody, this.postRequestOptions);
    };
    /**
     * Save user's spoken languages
     * @param languages
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.saveSpokenLanguages = function (languages, userId) {
        var requestBody = JSON.stringify({ languages: languages });
        return this.http.post(this.saveLanguagesUrl + '/' + userId, requestBody, this.postRequestOptions);
    };
    /**
     * Get user's spoken languages
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.getSpokenLanguages = function (userId) {
        return this.http.get(this.getSpokenLanguagesUrl + '/' + userId);
    };
    /**
     * Know if user businesses are part of a group
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.isUserPartOfAGroup = function (userId) {
        return this.http.get(this.isUserPartOfAGroupUrl + '/' + userId);
    };
    /**
     * Skip recruiter job creation on sign-up
     * @param userId
     * @returns {Observable<Response>}
     */
    UserService.prototype.skipJobCreation = function (userId) {
        return this.http.get(this.skipJobCreationUrl + '/' + userId);
    };
    /**
     * Update current user password
     * @param oldPassword
     * @param newPassword
     * @param userId
     */
    UserService.prototype.changePassword = function (oldPassword, newPassword, userId) {
        return this.http.get(this.changePasswordUrl + '/' + oldPassword + '/' + newPassword + '/' + userId);
    };
    /**
     * GET listing of all recruiters accounts
     */
    UserService.prototype.getAllRecruiters = function () {
        return this.http.get(this.getAllRecruitersUrl);
    };
    /**
     * GET listing of all recruiters accounts
     */
    UserService.prototype.searchRecruiters = function (email) {
        return this.http.get(this.searchRecruitersUrl + '/' + email);
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
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
