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
var application_1 = require('../../models/application');
var NewApplicationFormComponent = (function () {
    function NewApplicationFormComponent(route, jobService, userService, notificationService, router) {
        var _this = this;
        this.route = route;
        this.jobService = jobService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.router = router;
        this.user = {};
        this.application = new application_1.Application();
        this.isLoading = false;
        var __this = this;
        /**
         * Retrieve user Object from localStorage
         */
        this.user = JSON.parse(localStorage.getItem('user'));
        /**
         * Retrieve job from route params
         */
        route.params.subscribe(function (params) {
            if (params) {
                _this.jobId = params["jobId"];
                _this.application.job_id = parseInt(_this.jobId);
            }
        });
        /**
         * Retrieve fresh user data
         */
        this.userService.getUserInfos(this.user.id).subscribe(function (res) {
            __this.user = res.json();
        });
        /**
         * GET existing user applications
         */
        this.userService.getApplications(this.user.id).subscribe(function (res) {
            if (res['_body']) {
                var applications = res.json();
                for (var i = 0; i < applications.length; i++) {
                    if (applications[i]['job_id'] == __this.jobId) {
                        __this.application = applications[i];
                    }
                }
            }
        });
    }
    NewApplicationFormComponent.prototype.submitApplication = function () {
        var _this = this;
        var __this = this;
        this.isLoading = true;
        if (this.application.comment) {
            this.jobService.apply(__this.application, __this.user.id).subscribe(function (res) {
                _this.notificationService.show(new notification_1.Notification('success', 'Votre candidature a bien été enregistrée'));
                _this.isLoading = false;
                _this.router.navigate(['/profil/candidatures']);
            });
        }
        else {
            this.isLoading = false;
            this.notificationService.show(new notification_1.Notification('error', 'Vous devez écrire un commentaire dans la zone dédiée pour postuler'));
        }
    };
    NewApplicationFormComponent.prototype.commentChanged = function (newComment) {
        this.application.comment = newComment;
    };
    NewApplicationFormComponent = __decorate([
        core_1.Component({
            selector: 'new-application-form',
            templateUrl: '../../../templates/new-application-form.component.html'
        })
    ], NewApplicationFormComponent);
    return NewApplicationFormComponent;
}());
exports.NewApplicationFormComponent = NewApplicationFormComponent;
