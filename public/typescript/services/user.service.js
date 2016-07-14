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
                    this.getExperiencesUrl = '/experiences/all';
                    this.getExperienceUrl = '/experience';
                    this.getEducationUrl = '/education/all';
                    this.getAlertsUrl = '/alerts/all';
                    this.getBusinessesUrl = '/user/businesses';
                    this.getBusinessUrl = '/business';
                    this.getTestimonialsUrl = '/testimonials/all';
                    this.getCreatedTestimonialsUrl = '/created_testimonials/all';
                    this.createExperienceUrl = '/experience/create';
                    this.updateExperienceUrl = '/experience/update';
                    this.createStudyUrl = '/study/create';
                    this.createAlertUrl = '/alert/create';
                    this.getAlertUrl = '/alert';
                    this.saveAlertChangesUrl = '/alert/save_changes/';
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
                 * Get user's education
                 */
                UserService.prototype.getEducation = function () {
                    var __this = this;
                    return this.http.get(__this.getEducationUrl);
                };
                /**
                 * Get user's new job alerts
                 */
                UserService.prototype.getAlerts = function () {
                    var __this = this;
                    return this.http.get(__this.getAlertsUrl);
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
                UserService.prototype.createExperience = function (jobNamingId, businessId, startDate, endDate, description) {
                    var __this = this;
                    return this.http.get(__this.createExperienceUrl + '/' +
                        jobNamingId + '/' +
                        businessId + '/' +
                        startDate + '/' +
                        endDate + '/' +
                        description).catch(this.handleError("", __this.notificationService));
                };
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
                UserService.prototype.updateExperience = function (experienceId, jobNamingId, businessId, startDate, endDate, description) {
                    var __this = this;
                    return this.http.get(__this.updateExperienceUrl + '/' +
                        experienceId + '/' +
                        jobNamingId + '/' +
                        businessId + '/' +
                        startDate + '/' +
                        endDate + '/' +
                        description);
                };
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
                UserService.prototype.createStudy = function (diplomaId, businessId, startDate, endDate, place, description) {
                    var __this = this;
                    return this.http.get(__this.createStudyUrl + '/' +
                        diplomaId + '/' +
                        businessId + '/' +
                        startDate + '/' +
                        endDate + '/' +
                        place + '/' +
                        description);
                };
                /**
                 * Create new job alert
                 * @param alert
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createAlert = function (alert) {
                    var __this = this;
                    return this.http.get(__this.createAlertUrl + '/' +
                        alert.alert_frequency_id + '/' +
                        alert.title + '/' +
                        alert.job_naming_id + '/' +
                        alert.place + '/');
                };
                /**
                 * Save changes to an exisiting job alert
                 * @param alert
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.saveAlertChanges = function (alert) {
                    var __this = this;
                    return this.http.get(__this.saveAlertChangesUrl + '/' +
                        alert.id + '/' +
                        alert.alert_frequency_id + '/' +
                        alert.title + '/' +
                        alert.job_naming_id + '/' +
                        alert.place + '/');
                };
                /**
                 * Error handling
                 * @param error
                 */
                UserService.prototype.handleError = function (error, notificationService) {
                    var __this = this;
                    console.log(__this, __this.notificationService);
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue s\'est produite, veuillez rééssayer'));
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
