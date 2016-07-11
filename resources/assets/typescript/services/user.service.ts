import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class UserService {
    signInUrl = '/sign-in/';
    getApplicationsUrl = '/applications/all';
    getExperiencesUrl = '/experiences/all';
    getExperienceUrl = '/experience';
    getEducationUrl = '/education/all';
    getAlertsUrl = '/alerts/all';
    getBusinessesUrl = '/businesses/all';
    getBusinessUrl = '/business';
    getTestimonialsUrl = '/testimonials/all';
    getCreatedTestimonialsUrl = '/created_testimonials/all';
    createExperienceUrl = '/experience/create';
    createStudyUrl = '/study/create';
    createAlertUrl = '/alert/create';
    getAlertUrl = '/alert';
    saveAlertChangesUrl = '/alert/save_changes/';

    constructor(private http: Http) {

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
     * @param place
     * @param description
     * @returns {Observable<Response>}
     */
    createExperience(jobNamingId, businessId, startDate, endDate, place, description) {
        let __this = this;

        return this.http.get(
            __this.createExperienceUrl + '/' +
            jobNamingId + '/' +
            businessId + '/' +
            startDate + '/' +
            endDate + '/' +
            place + '/' +
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
}