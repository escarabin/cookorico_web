System.register(['@angular/core', '@angular/router', '../../services/reference.service', '../../services/user.service', '../../services/notification.service', '../../models/experience', '../../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_1, reference_service_1, user_service_1, notification_service_1, experience_1, notification_1;
    var CreateExperienceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (experience_1_1) {
                experience_1 = experience_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            CreateExperienceComponent = (function () {
                function CreateExperienceComponent(referenceService, userService, notificationService, route, router) {
                    var _this = this;
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.router = router;
                    this.experience = new experience_1.Experience();
                    this.isLoading = false;
                    this.referenceService.getAllJobNamingGroups().subscribe(function (res) {
                        _this.jobNamingGroups = res.json();
                    });
                }
                CreateExperienceComponent.prototype.ngAfterViewInit = function () {
                    var __this = this;
                    this.route.params.subscribe(function (params) {
                        if (params) {
                            __this.experience.id = params["experienceId"];
                            if (__this.experience.id) {
                                // Editing a specific item, let's retrieve it's data
                                __this.userService.getExperience(__this.experience.id).subscribe(function (res) {
                                    __this.experience = res.json();
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
                        this.userService.createExperience(__this.experience).subscribe(function (res) {
                            if (res['_body']) {
                                __this.notificationService.show(new notification_1.Notification('success', 'Votre expérience a bien été créee'));
                                // Redirect to experience edition
                                _this.router.navigate(['/profil/experience/editer/' + res.json()['id']]);
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
                    console.log('business id has changed', businessId);
                    this.experience.business_id = businessId;
                };
                CreateExperienceComponent = __decorate([
                    core_1.Component({
                        selector: 'create-experience',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        templateUrl: '../templates/create-experience.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, notification_service_1.NotificationsService, router_1.ActivatedRoute, router_1.Router])
                ], CreateExperienceComponent);
                return CreateExperienceComponent;
            }());
            exports_1("CreateExperienceComponent", CreateExperienceComponent);
        }
    }
});
