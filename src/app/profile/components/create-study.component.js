"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var study_1 = require('../../models/study');
var notification_1 = require('../../models/notification');
var CreateStudyComponent = (function () {
    function CreateStudyComponent(referenceService, notificationService, userService, businessService, route, router) {
        this.referenceService = referenceService;
        this.notificationService = notificationService;
        this.userService = userService;
        this.businessService = businessService;
        this.route = route;
        this.router = router;
        this.isLoading = false;
        this.study = new study_1.Study();
        this.user = {};
        this.business = {};
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        route.params.subscribe(function (params) {
            if (params) {
                __this.study.id = params["studyId"];
                if (__this.study.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.userService.getStudy(__this.study.id).subscribe(function (res) {
                        __this.study = res.json();
                        __this.businessService.get(__this.study.business_id).subscribe(function (res) {
                            __this.business = res.json();
                        });
                    });
                }
            }
        });
        this.referenceService.getAllDiplomas().subscribe(function (res) {
            __this.diplomas = res.json();
        });
    }
    CreateStudyComponent.prototype.submitStudy = function () {
        var _this = this;
        this.isLoading = true;
        var __this = this;
        if (!this.study.id) {
            this.userService.createStudy(__this.study, __this.user.id).subscribe(function (res) {
                if (res['_body']) {
                    __this.notificationService.show(new notification_1.Notification('success', 'Votre formation a bien été créee'));
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
            templateUrl: '../../../templates/create-study.component.html'
        })
    ], CreateStudyComponent);
    return CreateStudyComponent;
}());
exports.CreateStudyComponent = CreateStudyComponent;
