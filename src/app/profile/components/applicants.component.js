"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var notification_1 = require('../../models/notification');
var ApplicantsComponent = (function () {
    function ApplicantsComponent(userService, notificationService, applicationService, route) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.applicationService = applicationService;
        this.route = route;
        this.items = [];
        this.jobPosts = [];
        this.jobPostId = 0;
        this.businessId = 0;
        this.checkedItemsList = [];
        this.user = {};
        this.userBusinesses = [];
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userService.getBusinesses(this.user.id).subscribe(function (res) {
            __this.userBusinesses = res.json();
        });
        this.userService.getJobPosts(this.user.id).subscribe(function (res) {
            __this.jobPosts = res.json();
        });
        this.retrieveApplicants();
        /**
         * Get current jobPostId
         */
        route.params.subscribe(function (params) {
            if (params) {
                __this.jobPostId = parseInt(params["jobPostId"]);
            }
        });
    }
    ApplicantsComponent.prototype.retrieveApplicants = function () {
        var __this = this;
        this.items = [];
        this.userService.getApplicants(this.user.id).subscribe(function (res) {
            console.log('res is', res.json());
            var allApplicants = res.json();
            for (var i = 0; i < allApplicants.length; i++) {
                var application = allApplicants[i];
                application['acceptedTemplate'] = "Un mail sera envoyé à <u><br/>" + application['user']['email'] + "</u>" +
                    "<br/><br/>Votre candidature intéresse l'établissement " +
                    "<strong>" + application['job']['business']['title'] + "</strong> " +
                    "(" + application['job']['business']['place']['postalCode'] + " " +
                    "" + application['job']['business']['place']['city'] + ") pour le poste de : " +
                    "<strong>" + application['job']['jobNaming']['title'] + "</strong>.<br/><br/>" +
                    "Merci de bien vouloir prendre contact directement avec eux.";
                application['rejectedTemplate'] = "Un mail sera envoyé à <u><br/>" + application['user']['email'] + "</u>" +
                    "<br/><br/>Bonjour,<br/><br/>" +
                    "Votre candidature n'a pas été retenue pour le poste de : " +
                    "<strong>" + application['job']['jobNaming']['title'] + "</strong> dans l'établissement " +
                    "<strong>" + application['job']['business']['title'] + "</strong> (" + application['job']['business']['place']['postalCode'] + "" +
                    " " + application['job']['business']['place']['city'] + ").<br/><br/>" +
                    "Postulez à une nouvelle offre d'emploi sur " +
                    "<a href=http://cookorico.fr/>http://cookorico.fr/</a>.";
                if (!application.is_rejected) {
                    __this.items.push(application);
                }
            }
        });
    };
    /**
     * Accept specific application
     * @param applicationId
     */
    ApplicantsComponent.prototype.acceptApplication = function (applicationId) {
        var _this = this;
        var __this = this;
        this.applicationService.accept(applicationId).subscribe(function (res) {
            __this.notificationService.show(new notification_1.Notification('success', 'Le candidat a été alerté de votre intérêt'));
            _this.retrieveApplicants();
        });
    };
    /**
     * Reject specific application
     * @param applicationId
     */
    ApplicantsComponent.prototype.rejectApplication = function (applicationId) {
        var _this = this;
        var __this = this;
        this.applicationService.reject(applicationId).subscribe(function (res) {
            __this.notificationService.show(new notification_1.Notification('success', 'Le candidat a été alerté que sa candidature n\'a pas été retenue'));
            _this.retrieveApplicants();
        });
    };
    ApplicantsComponent = __decorate([
        core_1.Component({
            selector: 'applicants',
            templateUrl: '../../../templates/applicants.component.html'
        })
    ], ApplicantsComponent);
    return ApplicantsComponent;
}());
exports.ApplicantsComponent = ApplicantsComponent;
