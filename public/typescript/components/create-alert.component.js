System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../services/notification.service', './../models/alert', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, notification_service_1, alert_1, notification_1;
    var CreateAlertComponent;
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
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (alert_1_1) {
                alert_1 = alert_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            CreateAlertComponent = (function () {
                function CreateAlertComponent(referenceService, userService, notificationService, router, routeParams) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.alert = new alert_1.Alert();
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
            exports_1("CreateAlertComponent", CreateAlertComponent);
        }
    }
});
