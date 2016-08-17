"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// Services
var job_service_1 = require('./../services/job.service');
var notification_service_1 = require('./../services/notification.service');
var user_service_1 = require('./../services/user.service');
// Directives
var tiny_mce_component_1 = require('./tiny-mce.component');
// Models
var notification_1 = require('./../models/notification');
var application_1 = require('./../models/application');
var NewApplicationFormComponent = (function () {
    function NewApplicationFormComponent(routeParams, jobService, userService, notificationService, router) {
        this.routeParams = routeParams;
        this.jobService = jobService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.router = router;
        this.application = new application_1.Application();
        this.jobId = routeParams.get("jobId");
        this.application.job_id = parseInt(this.jobId);
        var __this = this;
        this.userService.getApplications().subscribe(function (res) {
            if (res['_body']) {
                var applications = res.json();
                for (var i = 0; i < applications.length; i++) {
                    if (applications[i]['job_id'] == __this.jobId) {
                        console.log(applications[i]);
                        __this.application = applications[i];
                    }
                }
            }
        });
    }
    NewApplicationFormComponent.prototype.submitApplication = function () {
        var _this = this;
        var __this = this;
        this.jobService.apply(__this.application).subscribe(function (res) {
            _this.notificationService.show(new notification_1.Notification('success', 'Votre candidature a bien été enregistrée'));
            _this.router.navigate(['/Profile/Applications']);
        });
    };
    NewApplicationFormComponent.prototype.commentChanged = function (newComment) {
        this.application.comment = newComment;
    };
    __decorate([
        core_1.Input, 
        __metadata('design:type', String)
    ], NewApplicationFormComponent.prototype, "jobId", void 0);
    NewApplicationFormComponent = __decorate([
        core_1.Component({
            directives: [router_deprecated_1.RouterLink, tiny_mce_component_1.UNITYTinyMCE],
            providers: [job_service_1.JobService, user_service_1.UserService],
            selector: 'new-application-form',
            templateUrl: '../templates/new-application-form.component.html',
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, job_service_1.JobService, user_service_1.UserService, notification_service_1.NotificationsService, router_deprecated_1.Router])
    ], NewApplicationFormComponent);
    return NewApplicationFormComponent;
}());
exports.NewApplicationFormComponent = NewApplicationFormComponent;
//# sourceMappingURL=new-application-form.component.js.map