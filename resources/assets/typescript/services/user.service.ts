import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import 'rxjs/add/operator/catch';

// Services
import { NotificationsService } from './notification.service';

// Models
import { Notification } from './../models/notification';

@Injectable()
export class UserService {
    signInUrl = '/sign-in/';
    getApplicationsUrl = '/applications/all';
    getExperiencesUrl = '/experiences/all';
    getExperienceUrl = '/experience';
    getEducationUrl = '/education/all';
    getAlertsUrl = '/alerts/all';
    getBusinessesUrl = '/user/businesses';
    getBusinessUrl = '/business';
    getTestimonialsUrl = '/testimonials/all';
    getCreatedTestimonialsUrl = '/created_testimonials/all';
    createExperienceUrl = '/experience/create';
    updateExperienceUrl = '/experience/update';
    createStudyUrl = '/study/create';
    createAlertUrl = '/alert/create';
    getAlertUrl = '/alert';
    saveAlertChangesUrl = '/alert/save_changes/';

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
     * Get user's education
     */
    getEducation() {
        let __this = this;

        return this.http.get(__this.getEducationUrl);
    }

    /**
     * Get user's new job alerts
     */
    getAlerts() {
        let __this = this;

        return this.http.get(__this.getAlertsUrl);
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
     * Create new work experience
     * @param jobNamingId
     * @param businessId
     * @param startDate
     * @param endDate
     * @param adress
     * @param lat
     * @param lon
     * @param description
     * @returns {Observable<Response>}
     */
    createExperience(jobNamingId, businessId, startDate, endDate, description) {
        let __this = this;

        return this.http.get(
            __this.createExperienceUrl + '/' +
            jobNamingId + '/' +
            businessId + '/' +
            startDate + '/' +
            endDate + '/' +
            description).catch(this.handleError("", __this.notificationService));
    }

    /**
     * Update existing work experience
     * @param experienceId
     * @param jobNamingId
     * @param businessId
     * @param startDate
     * @param endDate
     * @param adress
     * @param lat
     * @param lon
     * @param description
     * @returns {Observable<Response>}
     */
    updateExperience(experienceId, jobNamingId, businessId, startDate, endDate, description) {
        let __this = this;

        return this.http.get(
            __this.updateExperienceUrl + '/' +
            experienceId + '/' +
            jobNamingId + '/' +
            businessId + '/' +
            startDate + '/' +
            endDate + '/' +
            description);
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
    saveAlertChanges(alert) {
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

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        notificationService.show(
            new Notification('error', 'Une erreur inconnue s\'est produite, veuillez rééssayer')
        );

        console.error(errMsg); // log to console instead
    }
}