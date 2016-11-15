import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import appGlobals = require('./../globals');

// Models
import { Notification } from '../models/notification';
import { User } from '../models/user';
import { Experience } from '../models/experience';
import { Study } from '../models/study';

@Injectable()
export class UserService {
    signInUrl = appGlobals.apiUrl + '/sign-in/';
    getUserInfosUrl = appGlobals.apiUrl + '/user/get_infos';
    getUserUrl = appGlobals.apiUrl + '/user/get';
    getApplicationsUrl = appGlobals.apiUrl + '/user/applications';
    archivateApplicationUrl = appGlobals.apiUrl + '/application/archivate';
    getPlansUrl = appGlobals.apiUrl + '/user/plans/all';
    getExperiencesUrl = appGlobals.apiUrl + '/user/experiences';
    getExperienceUrl = appGlobals.apiUrl + '/experience';
    deleteExperiencesUrl = appGlobals.apiUrl + '/experience/delete';
    deleteEducationUrl = appGlobals.apiUrl + '/education/delete';
    getStudyUrl = appGlobals.apiUrl + '/study';
    updateStudyUrl = appGlobals.apiUrl + '/study/update';
    deleteAlertUrl = appGlobals.apiUrl + '/alert/delete';
    getEducationUrl = appGlobals.apiUrl + '/user/education';
    getAlertsUrl = appGlobals.apiUrl + '/alerts/all';
    getBusinessesUrl = appGlobals.apiUrl + '/user/businesses';
    getMatchingProfilesUrl = appGlobals.apiUrl + '/user/matching_profiles';
    getJobPostsUrl = appGlobals.apiUrl + '/user/job-posts/all';
    deleteJobPostsUrl = appGlobals.apiUrl + '/job-posts/delete';
    getBusinessUrl = appGlobals.apiUrl + '/business';
    getTestimonialsUrl = appGlobals.apiUrl + '/user/testimonials';
    getTestimonialUrl = appGlobals.apiUrl + '/testimonial';
    rejectTestimonialRequestUrl= appGlobals.apiUrl + '/testimonial/reject';
    saveTestimonialUrl = appGlobals.apiUrl + '/testimonial/save';
    getCreatedTestimonialsUrl = appGlobals.apiUrl + '/created_testimonials/all';
    createExperienceUrl = appGlobals.apiUrl + '/experience/create';
    updateExperienceUrl = appGlobals.apiUrl + '/experience/update';
    createStudyUrl = appGlobals.apiUrl + '/study/create';
    createAlertUrl = appGlobals.apiUrl + '/alert/create';
    getAlertUrl = appGlobals.apiUrl + '/alert';
    getApplicantsUrl = appGlobals.apiUrl + '/applicants/all';
    updateAlertUrl = appGlobals.apiUrl + '/alert/update';
    createUserUrl = appGlobals.apiUrl + '/user/create';
    createCandidateUserUrl = appGlobals.apiUrl + '/user/candidate/create';
    resetPasswordUrl = appGlobals.apiUrl + '/password/email';
    changePasswordUrl = appGlobals.apiUrl + '/password/update';
    saveUserInfoUrl = appGlobals.apiUrl + '/user/save_info';
    signOutUrl = appGlobals.apiUrl + '/user/sign_out';
    uploadProfilePictureUrl = appGlobals.apiUrl + '/user/upload_profile_picture';
    uploadResumeUrl = appGlobals.apiUrl + '/user/upload_resume';
    // createCandidateUrl = appGlobals.apiUrl + '/user/create_candidate';
    confirmEmailAddressUrl = appGlobals.apiUrl + '/user/confirm_address';
    activateUserUrl = appGlobals.apiUrl + '/user/activate';
    loginUsingIdUrl = appGlobals.apiUrl + '/user/login_using_id';
    disableAccountUrl = appGlobals.apiUrl + '/user/disable_account';
    getFillPercentageUrl = appGlobals.apiUrl + '/user/get_profile_percentage';
    makeCandidateAccessibleUrl = appGlobals.apiUrl + '/user/make_candidate_accessible';
    doRecruiterHasAccessToCandidateUrl = appGlobals.apiUrl + '/user/access_to_candidate';
    acceptJobPostUrl = appGlobals.apiUrl + '/job-post/accept';
    rejectJobPostUrl = appGlobals.apiUrl + '/job-post/reject';
    saveLanguagesUrl = appGlobals.apiUrl + '/user/languages/save';
    getSpokenLanguagesUrl = appGlobals.apiUrl + '/user/languages';
    saveJobSeekingDataUrl = appGlobals.apiUrl + '/user/save-job-seeking-data';
    isUserPartOfAGroupUrl = appGlobals.apiUrl + '/user/is-part-of-a-group';
    skipJobCreationUrl = appGlobals.apiUrl + '/user/skip-job-creation';
    postRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
    postRequestOptions = new RequestOptions({ headers: this.postRequestHeaders });

    userChangeEmitter: EventEmitter;

    constructor(private http: Http) {
        this.userChangeEmitter = new EventEmitter();
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
     * Login user using specific id
     * @param userId
     */
    loginUsingId(userId: number) {
        return this.http.get(this.loginUsingIdUrl + '/' + userId);
    }

    /**
     * Activate specific user account
     * @param userId
     * @returns {Observable<Response>}
     */
    activateAccount(userId) {
        this.userChangeEmitter.emit(userId);

        return this.http.get(this.activateUserUrl + '/' + userId);
    }

    /**
     * Disable currently logged user account
     * @returns {Observable<Response>}
     */
    disableAccount() {
        return this.http.get(this.disableAccountUrl);
    }

    /**
     * Get data from specific user
     * @param userId
     */
    get(userId) {
        return this.http.get(this.getUserUrl + '/' + userId);
    }

    /**
     * Save testimonial recruiter reply
     * @param tesimonialId
     * @param testimonialReplyContent
     * @returns {Observable<Response>}
     */
    saveTestimonialReply(tesimonialId: number, testimonialReplyContent: string) {
        let requestBody = JSON.stringify({ answer_content: testimonialReplyContent, is_accepted: true });

        return this.http.post(this.saveTestimonialUrl + '/' + tesimonialId, requestBody, this.postRequestOptions);
    }

    /**
     * Reject specific testimonial request
     * @param testimonialId
     */
    rejectTestimonialRequest(testimonialId: number) {
        return this.http.get(this.rejectTestimonialRequestUrl + '/' + testimonialId);
    }

    /**
     * Sign out current user
     */
    signOut() {
        localStorage.removeItem('user');

        this.userChangeEmitter.emit('logout');

        return this.http.get(this.signOutUrl);
    }

    /**
     * Confirm account email address
     * @param userId
     */
    confirmEmailAddress(userId: number) {
        console.log('emitting userId');

        this.userChangeEmitter.emit(userId);

        return this.http.get(this.confirmEmailAddressUrl + '/' + userId)
    }

    /**
     * Send user a mail to reset his password
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
     * @param email
     * @param password
     * @param user_type_id
     * @param firstName
     * @param lastName
     * @param civilityId
     * @returns {Observable<Response>}
     */
    createUser(email: string,
               password: string,
               user_type_id: number,
               lastName: string,
               firstName: string,
               civilityId: number) {
        let requestBody = JSON.stringify({ email, password, user_type_id, firstName, lastName, civilityId });

        return this.http.post(this.createUserUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Create a candidate new user
     * @param user
     * @param lookingForJobNamingList
     * @returns {Observable<Response>}
     */
    createCandidateUser(user: User, lookingForJobNamingList: any) {
        let requestBody = JSON.stringify({ user: user, lookingForJobNamingList: lookingForJobNamingList });

        return this.http.post(this.createCandidateUserUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Get user's job applications
     * @param userId
     * @returns {Observable<Response>}
     */
    getApplications(userId?: number) {
        return this.http.get(this.getApplicationsUrl + '/' + userId);
    }

    /**
     * Archivate specific user application
     * @param applicationId
     * @returns {Observable<Response>}
     */
    archivateApplication(applicationId: number) {
        let requestBody = JSON.stringify({ applicationId });

        return this.http.post(this.archivateApplicationUrl + '/' + applicationId, requestBody, this.postRequestOptions);
    }

    /**
     * Get user's work experiences
     * @param userId
     * @returns {Observable<Response>}
     */
    getExperiences(userId?: number) {
        return this.http.get(this.getExperiencesUrl + '/' + userId);
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
     * @param userId
     * @returns {Observable<Response>}
     */
    getEducation(userId?: number) {
        return this.http.get(this.getEducationUrl + '/' + userId);
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
     * Get user's matching profiles for all job-posts
     */
    getMatchingProfiles() {
        return this.http.get(this.getMatchingProfilesUrl);
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
     * @param userId
     * @returns {Observable<Response>}
     */
    getTestimonials(userId?: number) {
        return this.http.get(this.getTestimonialsUrl + '/' + userId);
    }

    /**
     * Get user's specific testimonial
     * @param testimonialId
     * @returns {Observable<Response>}
     */
    getTestimonial(testimonialId?: number) {
        return this.http.get(this.getTestimonialUrl + '/' + testimonialId);
    }

    /**
     * Get user's created testimonials
     */
    getAskedTestimonials() {
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
     * Get users that applied to logged user job offers
     * @returns {any}
     */
    getApplicants() {
        return this.http.get(this.getApplicantsUrl);
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
        console.log('uploading resume', resume);

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
    getProfilePercentage() {
        return this.http.get(this.getFillPercentageUrl);
    }

    /**
     * Subtract one contact credit from user after he asked
     * for access to user infos
     */
    makeCandidateAccessible(amount: number) {
        return this.http.get(this.makeCandidateAccessibleUrl + '/' + amount);
    }

    /**
     * Check out if recruiter has access to specific candidate infos
     */
    doRecruiterHasAccessToCandidate(candidateId: number) {
        return this.http.get(this.doRecruiterHasAccessToCandidateUrl + '/' + candidateId);
    }

    /**
     * Accept specifc job post as admin user
     * @param jobPostId
     */
    acceptJobPost(jobPostId: number) {
        return this.http.get(this.acceptJobPostUrl + '/' + jobPostId);
    }

    /**
     * Reject specifc job post as admin user
     * @param jobPostId
     */
    rejectJobPost(jobPostId: number) {
        return this.http.get(this.rejectJobPostUrl + '/' + jobPostId);
    }

    /**
     * Save logged user job seeking data
     * @param lookingForJobNamingList
     * @param alertFrequencyId
     * @returns {Observable<Response>}
     */
    saveJobSeekingData(lookingForJobNamingList: any, alertFrequencyId: number) {
        let requestBody = JSON.stringify({ lookingForJobNamingList, alertFrequencyId });

        return this.http.post(this.saveJobSeekingDataUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Save user's spoken languages
     * @param languages
     * @returns {Observable<Response>}
     */
    saveSpokenLanguages(languages: any) {
        let requestBody = JSON.stringify({ languages });

        return this.http.post(this.saveLanguagesUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Get user's spoken languages
     * @returns {Observable<Response>}
     */
    getSpokenLanguages() {
        return this.http.get(this.getSpokenLanguagesUrl);
    }

    /**
     * Know if user businesses are part of a group
     * @returns {Observable<Response>}
     */
    isUserPartOfAGroup() {
        return this.http.get(this.isUserPartOfAGroupUrl);
    }

    /**
     * Skip recruiter job creation on sign-up
     * @returns {Observable<Response>}
     */
    skipJobCreation() {
        return this.http.get(this.skipJobCreationUrl);
    }

    /**
     * Update current user password
     * @param oldPassword
     * @param newPassword
     */
    changePassword(oldPassword: string, newPassword: string) {
        return this.http.get(this.changePasswordUrl + '/' + oldPassword + '/' + newPassword);
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