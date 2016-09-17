System.register(['@angular/core', '@angular/router', './../../services/user.service', './../../services/reference.service', './../../services/place.service', './../../models/user'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, reference_service_1, place_service_1, user_1;
    var ConfirmAccountCreationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (place_service_1_1) {
                place_service_1 = place_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            ConfirmAccountCreationComponent = (function () {
                function ConfirmAccountCreationComponent(route, router, userService, placeService, referenceService) {
                    this.route = route;
                    this.router = router;
                    this.userService = userService;
                    this.placeService = placeService;
                    this.referenceService = referenceService;
                    this.user = new user_1.User();
                    this.lookingForJobNamingIdList = [];
                    this.jobNamings = [];
                    var __this = this;
                    this.referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                    route.params.subscribe(function (params) {
                        if (params) {
                            var userId_1 = params['userId'];
                            __this.userService.confirmEmailAddress(userId_1).subscribe(function (res) {
                                __this.userService.loginUsingId(userId_1).subscribe(function (userInfos) {
                                    __this.user = userInfos.json();
                                    localStorage.setItem('user', JSON.stringify(__this.user));
                                    __this.userService.userChangeEmitter.emit(__this.user);
                                });
                            });
                        }
                    });
                }
                ConfirmAccountCreationComponent.prototype.parseAdress = function (place) {
                    var _this = this;
                    this.placeService.save(place).subscribe(function (res) {
                        var placeObject = res.json();
                        _this.user.place_id = placeObject.id;
                    });
                };
                ConfirmAccountCreationComponent.prototype.submitCandidateInfos = function () {
                    var _this = this;
                    this.userService.createCandidate(this.user, this.lookingForJobNamingIdList).subscribe(function (res) {
                        localStorage.setItem('user', JSON.stringify(res.json()));
                        _this.userService.loginUsingId(res.json()['id']);
                        _this.router.navigate(['/profile/show']);
                    });
                };
                ConfirmAccountCreationComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../templates/confirm-account-creation.component.html',
                        providers: [user_service_1.UserService, reference_service_1.ReferenceService, place_service_1.PlaceService],
                        selector: 'confirm-account-creation',
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, user_service_1.UserService, place_service_1.PlaceService, reference_service_1.ReferenceService])
                ], ConfirmAccountCreationComponent);
                return ConfirmAccountCreationComponent;
            }());
            exports_1("ConfirmAccountCreationComponent", ConfirmAccountCreationComponent);
        }
    }
});
