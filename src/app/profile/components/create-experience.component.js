"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var experience_1 = require('../../models/experience');
var notification_1 = require('../../models/notification');
var CreateExperienceComponent = (function () {
    function CreateExperienceComponent(referenceService, userService, notificationService, businessService, testimonialService, route, router) {
        var _this = this;
        this.referenceService = referenceService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.businessService = businessService;
        this.testimonialService = testimonialService;
        this.route = route;
        this.router = router;
        this.experience = new experience_1.Experience();
        this.isLoading = false;
        this.isBusinessIdentified = false;
        this.sendTestimonialRequest = false;
        this.user = {};
        this.business = {};
        this.referenceService.getAllJobNamingGroups().subscribe(function (res) {
            _this.jobNamingGroups = res.json();
        });
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    CreateExperienceComponent.prototype.ngAfterViewInit = function () {
        var __this = this;
        this.route.params.subscribe(function (params) {
            if (params) {
                __this.experience.id = params["experienceId"];
                if (__this.experience.id) {
                    __this.isBusinessIdentified = true;
                    // Editing a specific item, let's retrieve it's data
                    __this.userService.getExperience(__this.experience.id).subscribe(function (res) {
                        __this.experience = res.json();
                        __this.businessService.get(__this.experience.business_id).subscribe(function (res) {
                            __this.business = res.json();
                        });
                    });
                }
            }
        });
    };
    CreateExperienceComponent.prototype.submitExperience = function () {
        var _this = this;
        this.isLoading = true;
        var __this = this;
        if (!this.experience.id) {
            this.userService.createExperience(__this.experience, this.user.id).subscribe(function (res) {
                _this.experience = res.json();
                if (res['_body']) {
                    __this.notificationService.show(new notification_1.Notification('success', 'Votre expérience a bien été créee'));
                    /**
                     * Send testimonial request to recruiter
                     */
                    if (_this.sendTestimonialRequest) {
                        _this.testimonialService.requestTestimonial(_this.experience.business_id, _this.experience.id).subscribe(function (res) {
                            console.log('testimonial requested');
                        });
                    }
                    // Redirect to profile-preview
                    _this.router.navigate(['/profil/apercu']);
                }
                else {
                    __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
                }
                _this.isLoading = false;
            });
        }
        else {
            this.userService.updateExperience(__this.experience, this.user.id).subscribe(function (res) {
                if (res['_body']) {
                    __this.notificationService.show(new notification_1.Notification('success', 'Vos modifications ont bien été enregistrées'));
                }
                else {
                    __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
                }
                _this.isLoading = false;
            });
        }
    };
    CreateExperienceComponent.prototype.handleBusinessIdChange = function (businessId) {
        this.isBusinessIdentified = true;
        this.experience.business_id = businessId;
    };
    CreateExperienceComponent = __decorate([
        core_1.Component({
            selector: 'create-experience',
            templateUrl: '../../../templates/create-experience.component.html'
        })
    ], CreateExperienceComponent);
    return CreateExperienceComponent;
}());
exports.CreateExperienceComponent = CreateExperienceComponent;
