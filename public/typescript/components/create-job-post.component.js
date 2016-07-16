System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../services/job-post.service', './../models/job-post', './business-select.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, job_post_service_1, job_post_1, business_select_component_1;
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
            function (job_post_1_1) {
                job_post_1 = job_post_1_1;
            },
            function (business_select_component_1_1) {
                business_select_component_1 = business_select_component_1_1;
            }],
        execute: function() {
            CreateJobPostComponent = (function () {
                function CreateJobPostComponent(referenceService, userService, jobPostService) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.jobPostService = jobPostService;
                    this.diplomas = [];
                    this.jobNamings = [];
                    this.alertFrequencies = [];
                    this.contractTypes = [];
                    this.jobTypes = [];
                    this.studyLevels = [];
                    this.jobXpLevels = [];
                    this.jobPost = new job_post_1.JobPost();
                    var __this = this;
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
                    console.log(__this.jobPost);
                    this.jobPostService.create(__this.jobPost).subscribe(function (res) {
                        console.log(res.json());
                    });
                };
                CreateJobPostComponent.prototype.handleBusinessIdChange = function (businessId) {
                    this.jobPost.business_id = businessId;
                };
                CreateJobPostComponent = __decorate([
                    core_1.Component({
                        selector: 'create-job-post',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService, job_post_service_1.JobPostService],
                        directives: [router_deprecated_1.RouterLink, business_select_component_1.BusinessSelectComponent],
                        templateUrl: '../templates/create-job-post.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, job_post_service_1.JobPostService])
                ], CreateJobPostComponent);
                return CreateJobPostComponent;
            }());
            exports_1("CreateJobPostComponent", CreateJobPostComponent);
        }
    }
});
