import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import appGlobals = require('./../globals'); //<==== this one

// Services
import { NotificationsService } from './notification.service';

// Models
import { Notification } from './../models/notification';
import { User } from './../models/user';
import { Experience } from './../models/experience';
import { Study } from './../models/study';

@Injectable()
export class UserService {
    signInUrl = appGlobals.apiUrl + '/sign-in/';
    getUserInfosUrl = appGlobals.apiUrl + '/user/get_infos';
    getApplicationsUrl = appGlobals.apiUrl + '/applications/all';
    getPlansUrl = appGlobals.apiUrl + '/user/plans/all';
    getExperiencesUrl = appGlobals.apiUrl + '/experiences/all';
    getExperienceUrl = appGlobals.apiUrl + '/experience';
    deleteExperiencesUrl = appGlobals.apiUrl + '/experience/delete';
    deleteEducationUrl = appGlobals.apiUrl + '/education/delete';
    getStudyUrl = appGlobals.apiUrl + '/study';
    updateStudyUrl = appGlobals.apiUrl + '/study/update';
    deleteAlertUrl = appGlobals.apiUrl + '/alert/delete';
    getEducationUrl = appGlobals.apiUrl + '/education/all';
    getAlertsUrl = appGlobals.apiUrl + '/alerts/all';
    getBusinessesUrl = appGlobals.apiUrl + '/user/businesses';
    getJobPostsUrl = appGlobals.apiUrl + '/user/job-posts/all';
    deleteJobPostsUrl = appGlobals.apiUrl + '/job-posts/delete';
    getBusinessUrl = appGlobals.apiUrl + '/business';
    getTestimonialsUrl = appGlobals.apiUrl + '/testimonials/all';
    getCreatedTestimonialsUrl = appGlobals.apiUrl + '/created_testimonials/all';
    createExperienceUrl = appGlobals.apiUrl + '/experience/create';
    updateExperienceUrl = appGlobals.apiUrl + '/experience/update';
    createStudyUrl = appGlobals.apiUrl + '/study/create';
    createAlertUrl = appGlobals.apiUrl + '/alert/create';
    getAlertUrl = appGlobals.apiUrl + '/alert';
    updateAlertUrl = appGlobals.apiUrl + '/alert/update';
    createUserUrl = appGlobals.apiUrl + '/user/create';
    resetPasswordUrl = appGlobals.apiUrl + '/password/email';
    saveUserInfoUrl = appGlobals.apiUrl + '/user/save_info';
    signOutUrl = appGlobals.apiUrl + '/user/sign_out';
    uploadProfilePictureUrl = appGlobals.apiUrl + '/user/upload_profile_picture';
    uploadResumeUrl = appGlobals.apiUrl + '/user/upload_resume';
    postRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
    postRequestOptions = new RequestOptions({ headers: this.postRequestHeaders });

    constructor(private http: Http,
                private notificationService: NotificationsService) {

    }

    /**
     * Sign user in
     * @param email
     * @param password
     * @returns {Observable<Response>}
     */
    login(email, password) {
        return this.http.get(this.signInUrl + email + '/' + password);
    }

    /**
     * Sign out current user
     */
    signOut() {
        return this.http.get(this.signOutUrl);
    }

    /**
     *
     * @param email
     * @returns {any}
     */
    resetPassword(email) {
        let requestBody = JSON.stringify({ email: email });

        return this.http.post(this.resetPasswordUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Get current user infos
     * @returns {Observable<Response>}
     */
    getUserInfos() {
        let __this = this;

        return this.http.get(__this.getUserInfosUrl);
    }

    /**
     * Create a new user
     * @param user
     * @returns {Observable<Response>}
     */
    createUser(user: User) {
        return this.http.get(this.createUserUrl + '/' +
                            user.email + '/' +
                            user.password + '/' +
                            user.firstName + '/' +
                            user.lastName + '/' +
                            user.phone + '/' +
                            user.birth_date + '/' +
                            user.user_type_id + '/' +
                            user.civility_id);
    }

    /**
     * Get user's job applications
     */
    getApplications() {
        return this.http.get(this.getApplicationsUrl);
    }

    /**
     * Get user's work experiences
     */
    getExperiences() {
        return this.http.get(this.getExperiencesUrl);
    }

    /**
     * Get user's specific experience
     * @param experienceId
     * @returns {Observable<Response>}
     */
    getExperience(experienceId) {
        return this.http.get(this.getExperienceUrl + '/' + experienceId);
    }

    /**
     * Delete experiences based on a comma separated list of ids
     * @param listExperienceId
     * @returns {Observable<Response>}
     */
    deleteExperiences(listExperienceId) {
        return this.http.get(this.deleteExperiencesUrl + '/' + listExperienceId);
    }

    /**
     * Get user's education
     */
    getEducation() {
        return this.http.get(this.getEducationUrl);
    }

    /**
     * Get user's specific study regarding id
     * @param studyId
     * @returns {Observable<Response>}
     */
    getStudy(studyId) {
        return this.http.get(this.getStudyUrl + '/' + studyId);
    }

    /**
     * Delete specific user's education studies
     * @param listStudyId
     */
    deleteEducation(listStudyId) {
        return this.http.get(this.deleteEducationUrl + '/' + listStudyId);
    }

    /**
     * Get user's new job alerts
     */
    getAlerts() {
        return this.http.get(this.getAlertsUrl);
    }

    /**
     * Get user's job posts
     */
    getJobPosts() {
        return this.http.get(this.getJobPostsUrl);
    }

    /**
     * Delete specific user's job posts
     * @param listJobPostId
     */
    deleteJobPosts(listJobPostId) {
        return this.http.get(this.deleteJobPostsUrl + '/' + listJobPostId);
    }

    /**
     * Delete specific user's alerts
     * @param studyId
     */
    deleteAlerts(listAlertId) {
        return this.http.get(this.deleteAlertUrl + '/' + listAlertId);
    }

    /**
     * Get user specific job alert
     * @param alertId
     * @returns {Observable<Response>}
     */
    getAlert(alertId) {
        return this.http.get(this.getAlertUrl + '/' + alertId);
    }

    /**
     * Get user's testimonials
     */
    getTestimonials() {
        return this.http.get(this.getTestimonialsUrl);
    }

    /**
     * Get user's created testimonials
     */
    getCreatedTestimonials() {
        return this.http.get(this.getCreatedTestimonialsUrl);
    }

    /**
     * Get user's businesses
     */
    getBusinesses() {
        return this.http.get(this.getBusinessesUrl);
    }

    /**
     * Get user specific business
     * @param businessId
     * @returns {Observable<Response>}
     */
    getBusiness(businessId) {
        return this.http.get(this.getBusinessUrl + '/' + businessId);
    }

    /**
     * Get the plans that current user subscribed to
     * @returns {any}
     */
    getPlans() {
        return this.http.get(this.getPlansUrl);
    }

    /**
     * Create new work experience
     * @param experience
     * @returns {Observable<Response>}
     */
    createExperience(experience: Experience) {
        let requestBody = JSON.stringify({ experience });

        return this.http.post(this.createExperienceUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Update existing work experience
     * @param experience
     * @returns {Observable<Response>}
     */
    updateExperience(experience: Experience) {
        let requestBody = JSON.stringify({ experience });

        return this.http.post(this.updateExperienceUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Create new study
     * @param study
     * @returns {Observable<Response>}
     */
    createStudy(study: Study) {
        let requestBody = JSON.stringify({ study });

        return this.http.post(this.createStudyUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Update existing study
     * @param study
     * @returns {Observable<Response>}
     */
    updateStudy(study: Study) {
        let requestBody = JSON.stringify({ study });

        return this.http.post(this.updateStudyUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Create new job alert
     * @param alert
     * @returns {Observable<Response>}
     */
    createAlert(alert) {
        let requestBody = JSON.stringify({ alert });

        return this.http.post(this.createAlertUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Update exisiting job alert
     * @param alert
     * @returns {Observable<Response>}
     */
    updateAlert(alert) {
        let requestBody = JSON.stringify({ alert });

        return this.http.post(this.updateAlertUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Upload new profile picture for current user
     * @param base64
     * @returns {Observable<Response>}
     */
    uploadProfilePicture(base64: string) {
        let requestBody = JSON.stringify({ base64 });

        return this.http.post(this.uploadProfilePictureUrl, requestBody, this.postRequestOptions);
    }


    /**
     * Upload new resume for current user
     * @param resume
     * @returns {Observable<Response>}
     */
    uploadResume(resume: any) {
        let requestBody = resume;
        let pdfPostRequestHeaders = new Headers({ 'Content-Type': 'application/pdf' });
        let pdfPostRequestOptions = new RequestOptions({ headers: pdfPostRequestHeaders });

        return this.http.post(this.uploadResumeUrl, requestBody, pdfPostRequestOptions);
    }

    /**
     * Save logged user edited profile info
     * @param key
     * @param value
     * @returns {Observable<Response>}
     */
    updateInfo(key: string, value: string) {
        let requestBody = JSON.stringify({ key, value });

        let userJson = JSON.parse(localStorage.getItem('user'));
        userJson[key] = value;

        localStorage.setItem('user', JSON.stringify(userJson));

        return this.http.post(this.saveUserInfoUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Error handling
     * @param error
     * @param notificationService
     */
    handleError(error: any, notificationService: any) {
        let errMsg = (error.message) ? error.message : error.status;

        if (!errMsg) {
            errMsg = 'Une erreur inconnue s\'est produite, veuillez rééssayer';
        }

        notificationService.show(
            new Notification('error', errMsg)
        );

        console.error(errMsg); // log to console instead
    }
}