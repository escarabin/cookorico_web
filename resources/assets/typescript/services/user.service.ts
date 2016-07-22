import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';

// Services
import { NotificationsService } from './notification.service';

// Models
import { Notification } from './../models/notification';
import { User } from './../models/user';
import { Experience } from './../models/experience';

@Injectable()
export class UserService {
    signInUrl = '/sign-in/';
    getApplicationsUrl = '/applications/all';
    getPlansUrl = '/user/plans/all';
    getExperiencesUrl = '/experiences/all';
    getExperienceUrl = '/experience';
    deleteExperiencesUrl = '/experience/delete';
    deleteEducationUrl = '/education/delete';
    deleteAlertUrl = '/alert/delete';
    getEducationUrl = '/education/all';
    getAlertsUrl = '/alerts/all';
    getBusinessesUrl = '/user/businesses';
    getJobPostsUrl = '/user/job-posts/all';
    deleteJobPostsUrl = '/job-posts/delete';
    getBusinessUrl = '/business';
    getTestimonialsUrl = '/testimonials/all';
    getCreatedTestimonialsUrl = '/created_testimonials/all';
    createExperienceUrl = '/experience/create';
    updateExperienceUrl = '/experience/update';
    createStudyUrl = '/study/create';
    createAlertUrl = '/alert/create';
    getAlertUrl = '/alert';
    saveAlertChangesUrl = '/alert/save_changes/';
    createUserUrl = '/user/create';
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
        let __this = this;

        return this.http.get(__this.signInUrl + email + '/' + password);
    }

    /**
     * Create a new user
     * @param user
     * @returns {Observable<Response>}
     */
    createUser(user: User) {
        let __this = this;

        return this.http.get(__this.createUserUrl + '/' +
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
        let __this = this;

        return this.http.get(__this.getApplicationsUrl);
    }

    /**
     * Get user's work experiences
     */
    getExperiences() {
        let __this = this;

        return this.http.get(__this.getExperiencesUrl);
    }

    /**
     * Get user's specific experience
     * @param experienceId
     * @returns {Observable<Response>}
     */
    getExperience(experienceId) {
        let __this = this;

        return this.http.get(__this.getExperienceUrl + '/' + experienceId);
    }

    /**
     * Delete experiences based on a comma separated list of ids
     * @param listExperienceId
     * @returns {Observable<Response>}
     */
    deleteExperiences(listExperienceId) {
        let __this = this;

        return this.http.get(__this.deleteExperiencesUrl + '/' + listExperienceId);
    }

    /**
     * Get user's education
     */
    getEducation() {
        let __this = this;

        return this.http.get(__this.getEducationUrl);
    }

    /**
     * Delete specific user's education studies
     * @param listStudyId
     */
    deleteEducation(listStudyId) {
        let __this = this;

        return this.http.get(__this.deleteEducationUrl + '/' + listStudyId);
    }

    /**
     * Get user's new job alerts
     */
    getAlerts() {
        let __this = this;

        return this.http.get(__this.getAlertsUrl);
    }

    /**
     * Get user's job posts
     */
    getJobPosts() {
        let __this = this;

        return this.http.get(__this.getJobPostsUrl);
    }

    /**
     * Delete specific user's job posts
     * @param listJobPostId
     */
    deleteJobPosts(listJobPostId) {
        let __this = this;

        return this.http.get(__this.deleteJobPostsUrl + '/' + listJobPostId);
    }

    /**
     * Delete specific user's alerts
     * @param studyId
     */
    deleteAlerts(listAlertId) {
        let __this = this;

        return this.http.get(__this.deleteAlertUrl + '/' + listAlertId);
    }

    /**
     * Get user specific job alert
     * @param alertId
     * @returns {Observable<Response>}
     */
    getAlert(alertId) {
        let __this = this;

        return this.http.get(__this.getAlertUrl + '/' + alertId);
    }

    /**
     * Get user's testimonials
     */
    getTestimonials() {
        let __this = this;

        return this.http.get(__this.getTestimonialsUrl);
    }

    /**
     * Get user's created testimonials
     */
    getCreatedTestimonials() {
        let __this = this;

        return this.http.get(__this.getCreatedTestimonialsUrl);
    }

    /**
     * Get user's businesses
     */
    getBusinesses() {
        let __this = this;

        return this.http.get(__this.getBusinessesUrl);
    }

    /**
     * Get user specific business
     * @param businessId
     * @returns {Observable<Response>}
     */
    getBusiness(businessId) {
        let __this = this;

        return this.http.get(__this.getBusinessUrl + '/' + businessId);
    }

    /**
     * Get the plans that current user subscribed to
     * @returns {any}
     */
    getPlans() {
        let __this = this;

        return this.http.get(__this.getPlansUrl);
    }

    /**
     * Create new work experience
     * @param experience
     * @returns {Observable<Response>}
     */
    createExperience(experience: Experience) {
        let __this = this;

        let requestBody = JSON.stringify({ experience });

        return this.http.post(__this.createExperienceUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Update existing work experience
     * @param experience
     * @returns {Observable<Response>}
     */
    updateExperience(experience: Experience) {
        let __this = this;

        let requestBody = JSON.stringify({ experience });

        return this.http.post(__this.updateExperienceUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Create new study
     * @param diplomaId
     * @param businessId
     * @param startDate
     * @param endDate
     * @param place
     * @param description
     * @returns {Observable<Response>}
     */
    createStudy(diplomaId, businessId, startDate, endDate, place, description) {
        let __this = this;

        return this.http.get(
            __this.createStudyUrl + '/' +
            diplomaId + '/' +
            businessId + '/' +
            startDate + '/' +
            endDate + '/' +
            place + '/' +
            description);
    }

    /**
     * Create new job alert
     * @param alert
     * @returns {Observable<Response>}
     */
    createAlert(alert) {
        let __this = this;

        return this.http.get(
            __this.createAlertUrl + '/' +
            alert.alert_frequency_id + '/' +
            alert.title + '/' +
            alert.job_naming_id + '/' +
            alert.place + '/');
    }

    /**
     * Save changes to an exisiting job alert
     * @param alert
     * @returns {Observable<Response>}
     */
    updateAlert(alert) {
        let __this = this;

        return this.http.get(
            __this.saveAlertChangesUrl + '/' +
            alert.id + '/' +
            alert.alert_frequency_id + '/' +
            alert.title + '/' +
            alert.job_naming_id + '/' +
            alert.place + '/');
    }

    /**
     * Error handling
     * @param error
     */
    handleError(error: any, notificationService: any) {
        let __this = this;

        console.log(__this, __this.notificationService);

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