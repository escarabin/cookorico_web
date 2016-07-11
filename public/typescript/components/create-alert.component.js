System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../models/alert'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, alert_1;
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
            function (alert_1_1) {
                alert_1 = alert_1_1;
            }],
        execute: function() {
            CreateAlertComponent = (function () {
                function CreateAlertComponent(referenceService, userService, routeParams) {
                    this.referenceService = referenceService;
                    this.userService = userService;
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
                    this.referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                    this.referenceService.getAllAlertFrequencies().subscribe(function (res) {
                        __this.alertFrequencies = res.json();
                    });
                }
                CreateAlertComponent.prototype.createAlert = function () {
                    var __this = this;
                    this.userService.createAlert(__this.alert).subscribe(function (res) {
                    });
                };
                CreateAlertComponent.prototype.saveAlertChanges = function () {
                    var __this = this;
                    this.userService.saveAlertChanges(__this.alert).subscribe(function (res) {
                    });
                };
                CreateAlertComponent = __decorate([
                    core_1.Component({
                        selector: 'create-alert',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/create-alert.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, router_deprecated_1.RouteParams])
                ], CreateAlertComponent);
                return CreateAlertComponent;
            }());
            exports_1("CreateAlertComponent", CreateAlertComponent);
        }
    }
});
