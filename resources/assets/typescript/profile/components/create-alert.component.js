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
var reference_service_1 = require('./.././reference.service');
var user_service_1 = require('./.././user.service');
var notification_service_1 = require('./.././notification.service');
// Models
var alert_1 = require('./.././alert');
var notification_1 = require('./.././notification');
var CreateAlertComponent = (function () {
    function CreateAlertComponent(referenceService, userService, notificationService, router, routeParams) {
        this.referenceService = referenceService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.router = router;
        this.routeParams = routeParams;
        this.alert = new alert_1.Alert();
        this.isLoading = false;
        var __this = this;
        this.alert.id = routeParams.get("alertId");
        if (this.alert.id) {
            // Editing a specific alert, let's retrieve it's data
            this.userService.getAlert(__this.alert.id).subscribe(function (res) {
                __this.alert = res.json();
            });
        }
        this.referenceService.getAllJobNamingGroups().subscribe(function (res) {
            __this.jobNamingGroups = res.json();
        });
        this.referenceService.getAllAlertFrequencies().subscribe(function (res) {
            __this.alertFrequencies = res.json();
        });
    }
    CreateAlertComponent.prototype.submitAlert = function () {
        var _this = this;
        this.isLoading = true;
        var __this = this;
        if (!this.alert.id) {
            this.userService.createAlert(__this.alert).subscribe(function (res) {
                if (res['_body']) {
                    __this.notificationService.show(new notification_1.Notification('success', 'Votre alerte a bien été créee'));
                    // Redirect to experience edition
                    _this.router.navigate(['/Profile/EditAlert', { alertId: res.json()['id'] }]);
                }
                else {
                    __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
                }
                _this.isLoading = false;
            });
        }
        else {
            this.userService.updateAlert(__this.alert).subscribe(function (res) {
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
    CreateAlertComponent = __decorate([
        core_1.Component({
            selector: 'create-alert',
            providers: [reference_service_1.ReferenceService, user_service_1.UserService],
            directives: [router_deprecated_1.RouterLink],
            templateUrl: '../templates/create-alert.component.html'
        }), 
        __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, notification_service_1.NotificationsService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], CreateAlertComponent);
    return CreateAlertComponent;
}());
exports.CreateAlertComponent = CreateAlertComponent;
//# sourceMappingURL=create-alert.component.js.map