System.register(['@angular/core', '@angular/router', '../../services/reference.service', '../../services/user.service', '../../services/notification.service', '../../models/study', '../../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_1, reference_service_1, user_service_1, notification_service_1, study_1, notification_1;
    var CreateStudyComponent;
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
            function (study_1_1) {
                study_1 = study_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            CreateStudyComponent = (function () {
                function CreateStudyComponent(referenceService, notificationService, userService, route, router) {
                    this.referenceService = referenceService;
                    this.notificationService = notificationService;
                    this.userService = userService;
                    this.route = route;
                    this.router = router;
                    this.isLoading = false;
                    this.study = new study_1.Study();
                    var __this = this;
                    route.params.subscribe(function (params) {
                        if (params) {
                            __this.study.id = params["studyId"];
                            if (__this.study.id) {
                                // Editing a specific item, let's retrieve it's data
                                __this.userService.getStudy(__this.study.id).subscribe(function (res) {
                                    __this.study = res.json();
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
                        this.userService.createStudy(__this.study).subscribe(function (res) {
                            if (res['_body']) {
                                __this.notificationService.show(new notification_1.Notification('success', 'Votre expérience a bien été créee'));
                                // Redirect to experience edition
                                _this.router.navigate(['/profil/formation/editer/' + res.json()['id']]);
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
                    console.log('business id received', businessId);
                    this.study.business_id = businessId;
                };
                CreateStudyComponent = __decorate([
                    core_1.Component({
                        selector: 'create-experience',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        templateUrl: '../templates/create-study.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, notification_service_1.NotificationsService, user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
                ], CreateStudyComponent);
                return CreateStudyComponent;
            }());
            exports_1("CreateStudyComponent", CreateStudyComponent);
        }
    }
});
