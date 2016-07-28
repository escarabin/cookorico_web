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
var reference_service_1 = require('./../services/reference.service');
var user_service_1 = require('./../services/user.service');
var notification_service_1 = require('./../services/notification.service');
// Models
var experience_1 = require('./../models/experience');
var notification_1 = require('./../models/notification');
// Components
var business_select_component_1 = require('./business-select.component');
var CreateExperienceComponent = (function () {
    function CreateExperienceComponent(referenceService, userService, notificationService, routeParams, router) {
        this.referenceService = referenceService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.routeParams = routeParams;
        this.router = router;
        this.experience = new experience_1.Experience();
        this.isLoading = false;
        var __this = this;
        this.experience.id = routeParams.get("experienceId");
        if (this.experience.id) {
            // Editing a specific experience, let's retrieve it's data
            this.userService.getExperience(__this.experience.id).subscribe(function (res) {
                __this.experience = res.json();
            });
        }
        this.referenceService.getAllJobNamingGroups().subscribe(function (res) {
            __this.jobNamingGroups = res.json();
        });
    }
    CreateExperienceComponent.prototype.submitExperience = function () {
        var _this = this;
        this.isLoading = true;
        var __this = this;
        if (!this.experience.id) {
            this.userService.createExperience(__this.experience).subscribe(function (res) {
                if (res['_body']) {
                    __this.notificationService.show(new notification_1.Notification('success', 'Votre expérience a bien été créee'));
                    // Redirect to experience edition
                    _this.router.navigate(['/Profile/EditExperience', { experienceId: res.json()['id'] }]);
                }
                else {
                    __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
                }
                _this.isLoading = false;
            });
        }
        else {
            this.userService.updateExperience(__this.experience).subscribe(function (res) {
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
        this.experience.business_id = businessId;
    };
    CreateExperienceComponent = __decorate([
        core_1.Component({
            selector: 'create-experience',
            providers: [reference_service_1.ReferenceService, user_service_1.UserService],
            directives: [router_deprecated_1.RouterLink, business_select_component_1.BusinessSelectComponent],
            templateUrl: '../templates/create-experience.component.html'
        }), 
        __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, notification_service_1.NotificationsService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], CreateExperienceComponent);
    return CreateExperienceComponent;
}());
exports.CreateExperienceComponent = CreateExperienceComponent;
//# sourceMappingURL=create-experience.component.js.map