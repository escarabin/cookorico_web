"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var alert_1 = require('../../models/alert');
var notification_1 = require('../../models/notification');
var CreateAlertComponent = (function () {
    function CreateAlertComponent(referenceService, userService, notificationService, placeService, router, route) {
        this.referenceService = referenceService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.placeService = placeService;
        this.router = router;
        this.route = route;
        this.alert = new alert_1.Alert();
        this.isLoading = false;
        var __this = this;
        route.params.subscribe(function (params) {
            if (params) {
                __this.alert.id = params["alertId"];
                if (__this.alert.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.userService.getAlert(__this.alert.id).subscribe(function (res) {
                        __this.alert = res.json();
                    });
                }
            }
        });
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
                    console.log('alert has been created');
                    __this.notificationService.show(new notification_1.Notification('success', 'Vos modifications ont bien été enregistrées'));
                }
                else {
                    console.log('error in alert creation');
                    __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
                }
                _this.isLoading = false;
            });
        }
    };
    CreateAlertComponent.prototype.parseAddress = function (place) {
        this.placeService.save(place).subscribe(function (res) {
            console.log('got response', res);
        });
    };
    CreateAlertComponent = __decorate([
        core_1.Component({
            selector: 'create-alert',
            templateUrl: '../../../templates/create-alert.component.html'
        })
    ], CreateAlertComponent);
    return CreateAlertComponent;
}());
exports.CreateAlertComponent = CreateAlertComponent;
