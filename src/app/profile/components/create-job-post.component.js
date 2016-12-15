"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var job_post_1 = require('../../models/job-post');
var notification_1 = require('../../models/notification');
var CreateJobPostComponent = (function () {
    function CreateJobPostComponent(referenceService, userService, jobPostService, notificationService, businessService, route, router) {
        var _this = this;
        this.referenceService = referenceService;
        this.userService = userService;
        this.jobPostService = jobPostService;
        this.notificationService = notificationService;
        this.businessService = businessService;
        this.route = route;
        this.router = router;
        this.diplomas = [];
        this.jobNamings = [];
        this.alertFrequencies = [];
        this.contractTypes = [];
        this.jobTypes = [];
        this.studyLevels = [];
        this.jobXpLevels = [];
        this.user = [];
        this.businesses = [];
        this.jobPost = new job_post_1.JobPost(null, '', '', null, null, null, null, null, null, null, null, 1, null, '', '', false, false, false);
        this.userCanPostJob = false;
        this.isLoading = false;
        this.showTinyMceEditor = false;
        var __this = this;
        /**
         * Scroll back to the top
         */
        window.scrollTo(0, 0);
        this.user = JSON.parse(localStorage.getItem('user'));
        route.params.subscribe(function (params) {
            if (params) {
                __this.jobPost.id = params["jobPostId"];
                __this.jobPost.business_id = params["businessId"];
            }
        });
        /**
         * If user is on the web site for the first time,
         * he can post a free job offer
         */
        if (!this.user.is_active || this.user.user_type_id == 4 || this.user.user_type_id == 5) {
            __this.userCanPostJob = true;
        }
        /**
         * Check if user is able to post a new job regarding credits amount on his account
         */
        this.userService.getPlans(this.user.id).subscribe(function (res) {
            var plans = res.json();
            for (var i = 0; i < plans.length; i++) {
                if (plans[i]['credits'] > 0 || plans[i]['credits'] == -1) {
                    __this.userCanPostJob = true;
                }
            }
        });
        /**
         * If user is admin, show him every businesses
         */
        if (this.user.user_type_id == 1) {
            this.businessService.getAll().subscribe(function (res) {
                _this.businesses = res.json();
            });
        }
        else {
            this.userService.getBusinesses(this.user.id).subscribe(function (res) {
                _this.businesses = res.json();
            });
        }
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
    CreateJobPostComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var __this = this;
        if (this.jobPost.id) {
            // Editing a specific item, let's retrieve it's data
            this.jobPostService.get(this.jobPost.id).subscribe(function (res) {
                _this.jobPost = res.json();
                setTimeout(function () {
                    __this.showTinyMceEditor = true;
                }, 500);
            });
            /**
             * If user is currently editing an existing job offer, let him do it
             */
            this.userCanPostJob = true;
        }
        else {
            this.showTinyMceEditor = true;
        }
    };
    CreateJobPostComponent.prototype.submitJobPost = function () {
        var _this = this;
        var __this = this;
        this.isLoading = true;
        this.jobPostService.save(__this.jobPost, this.user.id).subscribe(function (res) {
            var job = res['_body'];
            if (job) {
                if (__this.jobPost.id) {
                    __this.notificationService.show(new notification_1.Notification('success', 'Votre annonce a bien été mise à jour'));
                }
                else {
                    __this.notificationService.show(new notification_1.Notification('success', 'Votre annonce est en cours de validation'));
                }
                if (!__this.user['is_active']) {
                    __this.userService.activateAccount(__this.user.id).subscribe(function (res) {
                        __this.router.navigate(['/profil/confirmation-du-compte/2']);
                    });
                }
                else {
                    if (_this.user.user_type_id != 1) {
                        __this.router.navigate(['/profil/annonce/', { jobId: res.json()['id'] }]);
                    }
                }
            }
            else {
                __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
            }
            _this.isLoading = false;
        });
    };
    CreateJobPostComponent.prototype.skipJobCreation = function () {
        var _this = this;
        this.userService.skipJobCreation(this.user.id).subscribe(function (res) {
            _this.userService.activateAccount(_this.user.id).subscribe(function (res) {
                _this.router.navigate(['/profil/confirmation-du-compte/2']);
            });
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
            templateUrl: '../../../templates/create-job-post.component.html'
        })
    ], CreateJobPostComponent);
    return CreateJobPostComponent;
}());
exports.CreateJobPostComponent = CreateJobPostComponent;
