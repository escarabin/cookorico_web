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
var study_1 = require('./../models/study');
var notification_1 = require('./../models/notification');
// Components
var business_select_component_1 = require('./business-select.component');
var CreateStudyComponent = (function () {
    function CreateStudyComponent(referenceService, notificationService, userService, routeParams, router) {
        this.referenceService = referenceService;
        this.notificationService = notificationService;
        this.userService = userService;
        this.routeParams = routeParams;
        this.router = router;
        this.isLoading = false;
        this.study = new study_1.Study();
        var __this = this;
        this.study.id = routeParams.get("studyId");
        if (this.study.id) {
            // Editing a specific experience, let's retrieve it's data
            this.userService.getStudy(__this.study.id).subscribe(function (res) {
                __this.study = res.json();
            });
        }
        this.referenceService.getAllDiplomas().subscribe(function (res) {
            __this.diplomas = res.json();
        });
    }
    CreateStudyComponent.prototype.submitStudy = function () {
        var _this = this;
        this.isLoading = true;
        var __this = this;
        if (!this.study.id) {
            this.userService.createStudy(__this.study).subscribe(function (res) {
                if (res['_body']) {
                    __this.notificationService.show(new notification_1.Notification('success', 'Votre expérience a bien été créee'));
                    // Redirect to experience edition
                    _this.router.navigate(['/Profile/EditStudy', { studyId: res.json()['id'] }]);
                }
                else {
                    __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
                }
                _this.isLoading = false;
            });
        }
        else {
            this.userService.updateStudy(__this.study).subscribe(function (res) {
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
    CreateStudyComponent.prototype.handleBusinessIdChange = function (businessId) {
        this.study.business_id = businessId;
    };
    CreateStudyComponent = __decorate([
        core_1.Component({
            selector: 'create-experience',
            providers: [reference_service_1.ReferenceService, user_service_1.UserService],
            directives: [router_deprecated_1.RouterLink, business_select_component_1.BusinessSelectComponent],
            templateUrl: '../templates/create-study.component.html'
        }), 
        __metadata('design:paramtypes', [reference_service_1.ReferenceService, notification_service_1.NotificationsService, user_service_1.UserService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], CreateStudyComponent);
    return CreateStudyComponent;
}());
exports.CreateStudyComponent = CreateStudyComponent;
//# sourceMappingURL=create-study.component.js.map