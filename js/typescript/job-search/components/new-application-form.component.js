System.register(['@angular/core', '@angular/router', '../../services/job.service', '../../services/notification.service', '../../services/user.service', '../../models/notification', '../../models/application'], function(exports_1, context_1) {
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
    var core_1, router_1, job_service_1, notification_service_1, user_service_1, notification_1, application_1;
    var NewApplicationFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            },
            function (application_1_1) {
                application_1 = application_1_1;
            }],
        execute: function() {
            NewApplicationFormComponent = (function () {
                function NewApplicationFormComponent(route, jobService, userService, notificationService, router) {
                    var _this = this;
                    this.route = route;
                    this.jobService = jobService;
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.user = {};
                    this.application = new application_1.Application();
                    route.params.subscribe(function (params) {
                        if (params) {
                            _this.jobId = params["jobId"];
                        }
                    });
                    this.application.job_id = parseInt(this.jobId);
                    var __this = this;
                    this.userService.getUserInfos().subscribe(function (res) {
                        __this.user = res.json();
                    });
                    this.userService.getApplications().subscribe(function (res) {
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
                    this.jobService.apply(__this.application).subscribe(function (res) {
                        _this.notificationService.show(new notification_1.Notification('success', 'Votre candidature a bien été enregistrée'));
                        _this.router.navigate(['/profil/candidatures']);
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
                        providers: [job_service_1.JobService, user_service_1.UserService],
                        selector: 'new-application-form',
                        templateUrl: '../templates/new-application-form.component.html',
                        inputs: ['jobId']
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, job_service_1.JobService, user_service_1.UserService, notification_service_1.NotificationsService, router_1.Router])
                ], NewApplicationFormComponent);
                return NewApplicationFormComponent;
            }());
            exports_1("NewApplicationFormComponent", NewApplicationFormComponent);
        }
    }
});
