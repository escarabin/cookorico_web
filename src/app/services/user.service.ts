import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { apiUrl } from '../globals';

// Models
import { Notification } from '../models/notification';
import { User } from '../models/user';
import { Experience } from '../models/experience';
import { Study } from '../models/study';

@Injectable()
export class UserService {
    signInUrl = apiUrl + '/sign-in/';
    getUserInfosUrl = apiUrl + '/user/get_infos';
    getUserUrl = apiUrl + '/user/get';
    getApplicationsUrl = apiUrl + '/user/applications';
    archivateApplicationUrl = apiUrl + '/application/archivate';
    getPlansUrl = apiUrl + '/user/plans/all';
    getExperiencesUrl = apiUrl + '/user/experiences';
    getExperienceUrl = apiUrl + '/experience';
    deleteExperiencesUrl = apiUrl + '/experience/delete';
    deleteEducationUrl = apiUrl + '/education/delete';
    getStudyUrl = apiUrl + '/study';
    updateStudyUrl = apiUrl + '/study/update';
    deleteAlertUrl = apiUrl + '/alert/delete';
    getEducationUrl = apiUrl + '/user/education';
    getAlertsUrl = apiUrl + '/alerts/all';
    getBusinessesUrl = apiUrl + '/user/businesses';
    getMatchingProfilesUrl = apiUrl + '/user/matching_profiles';
    getJobPostsUrl = apiUrl + '/user/job-posts/all';
    deleteJobPostsUrl = apiUrl + '/job-posts/delete';
    getBusinessUrl = apiUrl + '/business';
    getTestimonialsUrl = apiUrl + '/user/testimonials';
    getTestimonialUrl = apiUrl + '/testimonial';
    rejectTestimonialRequestUrl= apiUrl + '/testimonial/reject';
    saveTestimonialUrl = apiUrl + '/testimonial/save';
    getCreatedTestimonialsUrl = apiUrl + '/created_testimonials/all';
    createExperienceUrl = apiUrl + '/experience/create';
    updateExperienceUrl = apiUrl + '/experience/update';
    createStudyUrl = apiUrl + '/study/create';
    createAlertUrl = apiUrl + '/alert/create';
    getAlertUrl = apiUrl + '/alert';
    getApplicantsUrl = apiUrl + '/applicants/all';
    updateAlertUrl = apiUrl + '/alert/update';
    createUserUrl = apiUrl + '/user/create';
    createCandidateUserUrl = apiUrl + '/user/candidate/create';
    resetPasswordUrl = apiUrl + '/password/email';
    changePasswordUrl = apiUrl + '/password/update';
    saveUserInfoUrl = apiUrl + '/user/save_info';
    signOutUrl = apiUrl + '/user/sign_out';
    uploadProfilePictureUrl = apiUrl + '/user/upload_profile_picture';
    uploadResumeUrl = apiUrl + '/user/upload_resume';
    // createCandidateUrl = apiUrl + '/user/create_candidate';
    confirmEmailAddressUrl = apiUrl + '/user/confirm_address';
    activateUserUrl = apiUrl + '/user/activate';
    loginUsingIdUrl = apiUrl + '/user/login_using_id';
    disableAccountUrl = apiUrl + '/user/disable_account';
    getFillPercentageUrl = apiUrl + '/user/get_profile_percentage';
    makeCandidateAccessibleUrl = apiUrl + '/user/make_candidate_accessible';
    doRecruiterHasAccessToCandidateUrl = apiUrl + '/user/access_to_candidate';
    acceptJobPostUrl = apiUrl + '/job-post/accept';
    rejectJobPostUrl = apiUrl + '/job-post/reject';
    saveLanguagesUrl = apiUrl + '/user/languages/save';
    getSpokenLanguagesUrl = apiUrl + '/user/languages';
    saveJobSeekingDataUrl = apiUrl + '/user/save-job-seeking-data';
    isUserPartOfAGroupUrl = apiUrl + '/user/is-part-of-a-group';
    skipJobCreationUrl = apiUrl + '/user/skip-job-creation';
    getAllRecruitersUrl = apiUrl + '/user/recruiters/all';
    searchRecruitersUrl = apiUrl + '/user/recruiters/search';
    noExperienceUrl = apiUrl + '/user/no-experience';
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
     * @param userId
     * @returns {Observable<Response>}
     */
    getUserInfos(userId?: number) {
        let __this = this;

        return this.http.get(__this.getUserInfosUrl + '/' + userId);
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
     * @param userId
     */
    getMatchingProfiles(userId?: number) {
        return this.http.get(this.getMatchingProfilesUrl + '/' + userId);
    }

    /**
     * Get user's job posts
     * @param userId
     */
    getJobPosts(userId?: number) {
        return this.http.get(this.getJobPostsUrl + '/' + userId);
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
     * @param userId
     */
    getAskedTestimonials(userId?: number) {
        return this.http.get(this.getCreatedTestimonialsUrl + '/' + userId);
    }

    /**
     * Get user's businesses
     * @param userId
     */
    getBusinesses(userId?: number) {
        console.log('getting businesses with userId' + userId);

        return this.http.get(this.getBusinessesUrl + '/' + userId);
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
     * @param userId
     * @returns {any}
     */
    getPlans(userId?: number) {
        return this.http.get(this.getPlansUrl + '/' + userId);
    }

    /**
     * Get users that applied to logged user job offers
     * @param userId
     * @returns {any}
     */
    getApplicants(userId?: number) {
        return this.http.get(this.getApplicantsUrl + '/' + userId);
    }

    /**
     * Create new work experience
     * @param experience
     * @param userId
     * @returns {Observable<Response>}
     */
    createExperience(experience: Experience, userId?: number) {
        let requestBody = JSON.stringify({ experience });

        return this.http.post(this.createExperienceUrl + '/' + userId, requestBody, this.postRequestOptions);
    }

    /**
     * Update existing work experience
     * @param experience
     * @param userId
     * @returns {Observable<Response>}
     */
    updateExperience(experience: Experience) {
        let requestBody = JSON.stringify({ experience });

        return this.http.post(this.updateExperienceUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Create new study
     * @param study
     * @param userId
     * @returns {Observable<Response>}
     */
    createStudy(study: Study, userId?: number) {
        let requestBody = JSON.stringify({ study });

        return this.http.post(this.createStudyUrl + '/' + userId, requestBody, this.postRequestOptions);
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
     * @param userId
     * @returns {Observable<Response>}
     */
    uploadProfilePicture(base64: string, userId?: number) {
        let requestBody = JSON.stringify({ base64 });

        return this.http.post(this.uploadProfilePictureUrl + '/' + userId, requestBody, this.postRequestOptions);
    }

    /**
     * Save the fact that the current has no experience
     * @param userId
     */
    noExperience(userId?: number) {
        return this.http.request(this.noExperienceUrl + '/' + userId);
    }

    /**
     * Upload new resume for current user
     * @param resume
     * @param userId
     * @returns {Observable<Response>}
     */
    uploadResume(resume: any, userId?: number) {
        let requestBody = JSON.stringify({ resume });
        let pdfPostRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
        let pdfPostRequestOptions = new RequestOptions({ headers: pdfPostRequestHeaders });
        return this.makeFileRequest(this.uploadResumeUrl + '/' + userId, [ resume ]);
    }

    private makeFileRequest (url: string, files: File[]): Observable {
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
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
    }

    /**
     * Save logged user edited profile info
     * @param key
     * @param value
     * @param userId
     * @returns {Observable<Response>}
     */
    updateInfo(key: string, value: string, userId?: number) {
        let requestBody = JSON.stringify({ key, value });

        let userJson = JSON.parse(localStorage.getItem('user'));
        userJson[key] = value;

        localStorage.setItem('user', JSON.stringify(userJson));

        return this.http.post(this.saveUserInfoUrl + '/' + userId, requestBody, this.postRequestOptions);
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
    getProfilePercentage(userId?: number) {
        return this.http.get(this.getFillPercentageUrl + '/' + userId);
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
     * @param userId
     * @returns {Observable<Response>}
     */
    saveJobSeekingData(lookingForJobNamingList: any, alertFrequencyId: number, userId?: number) {
        let requestBody = JSON.stringify({ lookingForJobNamingList, alertFrequencyId });

        return this.http.post(this.saveJobSeekingDataUrl + '/' + userId, requestBody, this.postRequestOptions);
    }

    /**
     * Save user's spoken languages
     * @param languages
     * @param userId
     * @returns {Observable<Response>}
     */
    saveSpokenLanguages(languages: any, userId?: number) {
        let requestBody = JSON.stringify({ languages });

        return this.http.post(this.saveLanguagesUrl + '/' + userId, requestBody, this.postRequestOptions);
    }

    /**
     * Get user's spoken languages
     * @param userId
     * @returns {Observable<Response>}
     */
    getSpokenLanguages(userId?: number) {
        return this.http.get(this.getSpokenLanguagesUrl + '/' + userId);
    }

    /**
     * Know if user businesses are part of a group
     * @param userId
     * @returns {Observable<Response>}
     */
    isUserPartOfAGroup(userId?: number) {
        return this.http.get(this.isUserPartOfAGroupUrl + '/' + userId);
    }

    /**
     * Skip recruiter job creation on sign-up
     * @param userId
     * @returns {Observable<Response>}
     */
    skipJobCreation(userId?: number) {
        return this.http.get(this.skipJobCreationUrl + '/' + userId);
    }

    /**
     * Update current user password
     * @param oldPassword
     * @param newPassword
     * @param userId
     */
    changePassword(oldPassword: string, newPassword: string, userId?: number) {
        return this.http.get(this.changePasswordUrl + '/' + oldPassword + '/' + newPassword + '/' + userId);
    }

    /**
     * GET listing of all recruiters accounts
     */
    getAllRecruiters() {
        return this.http.get(this.getAllRecruitersUrl);
    }

    /**
     * GET listing of all recruiters accounts
     */
    searchRecruiters(email: string) {
        return this.http.get(this.searchRecruitersUrl + '/' + email);
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