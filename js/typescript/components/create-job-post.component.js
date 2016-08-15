System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../services/job-post.service', './../services/notification.service', './../models/job-post', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, job_post_service_1, notification_service_1, job_post_1, notification_1;
    var CreateJobPostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (job_post_service_1_1) {
                job_post_service_1 = job_post_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (job_post_1_1) {
                job_post_1 = job_post_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            CreateJobPostComponent = (function () {
                function CreateJobPostComponent(referenceService, userService, jobPostService, notificationService, routeParams, router) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.jobPostService = jobPostService;
                    this.notificationService = notificationService;
                    this.routeParams = routeParams;
                    this.router = router;
                    this.diplomas = [];
                    this.jobNamings = [];
                    this.alertFrequencies = [];
                    this.contractTypes = [];
                    this.jobTypes = [];
                    this.studyLevels = [];
                    this.jobXpLevels = [];
                    this.jobPost = new job_post_1.JobPost();
                    this.userCanPostJob = false;
                    var __this = this;
                    this.jobPost.id = routeParams.get("jobPostId");
                    if (this.jobPost.id) {
                        this.userCanPostJob = true;
                        // Editing a specific experience, let's retrieve it's data
                        this.jobPostService.get(__this.jobPost.id).subscribe(function (res) {
                            __this.jobPost = res.json();
                        });
                    }
                    /**
                     * Check if user is able to post a new job regarding credits amount on his account
                     */
                    this.userService.getPlans().subscribe(function (res) {
                        var plans = res.json();
                        for (var i = 0; i < plans.length; i++) {
                            if (plans[i]['credits'] > 0) {
                                __this.userCanPostJob = true;
                            }
                        }
                    });
                    this.referenceService.getAllDiplomas().subscribe(function (res) {
                        __this.diplomas = res.json();
                    });
                    this.referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                    this.referenceService.getAllAlertFrequencies().subscribe(function (res) {
                        __this.alertFrequencies = res.json();
                    });
                    this.referenceService.getAllContractTypes().subscribe(function (res) {
                        __this.contractTypes = res.json();
                    });
                    this.referenceService.getAllJobTypes().subscribe(function (res) {
                        __this.jobTypes = res.json();
                    });
                    this.referenceService.getAllStudyLevels().subscribe(function (res) {
                        __this.studyLevels = res.json();
                    });
                    this.referenceService.getAllJobXpLevels().subscribe(function (res) {
                        __this.jobXpLevels = res.json();
                    });
                }
                CreateJobPostComponent.prototype.submitJobPost = function () {
                    var __this = this;
                    this.jobPostService.create(__this.jobPost).subscribe(function (res) {
                        var job = res['_body'];
                        if (job) {
                            __this.notificationService.show(new notification_1.Notification('success', 'Votre annonce vient d\'être publiée'));
                            __this.router.navigate(['/JobSearch/ShowJob', { jobId: res.json()['id'] }]);
                        }
                        else {
                            __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
                        }
                    });
                };
                CreateJobPostComponent.prototype.handleBusinessIdChange = function (businessId) {
                    this.jobPost.business_id = businessId;
                };
                CreateJobPostComponent.prototype.jobDescriptionChanged = function (newDescription) {
                    this.jobPost.description = newDescription;
                };
                CreateJobPostComponent = __decorate([
                    core_1.Component({
                        selector: 'create-job-post',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService, job_post_service_1.JobPostService],
                        templateUrl: '../templates/create-job-post.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, job_post_service_1.JobPostService, notification_service_1.NotificationsService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
                ], CreateJobPostComponent);
                return CreateJobPostComponent;
            }());
            exports_1("CreateJobPostComponent", CreateJobPostComponent);
        }
    }
});
