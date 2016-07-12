System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../models/experience', './business-select.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, experience_1, business_select_component_1;
    var CreateExperienceComponent;
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
            function (experience_1_1) {
                experience_1 = experience_1_1;
            },
            function (business_select_component_1_1) {
                business_select_component_1 = business_select_component_1_1;
            }],
        execute: function() {
            CreateExperienceComponent = (function () {
                function CreateExperienceComponent(referenceService, userService, routeParams) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.routeParams = routeParams;
                    this.experience = new experience_1.Experience();
                    var __this = this;
                    this.experience.id = routeParams.get("experienceId");
                    if (this.experience.id) {
                        // Editing a specific experience, let's retrieve it's data
                        this.userService.getExperience(__this.experience.id).subscribe(function (res) {
                            __this.experience = res.json();
                        });
                    }
                    this.referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                }
                CreateExperienceComponent.prototype.parseAdress = function (place) {
                    var location = place['geometry']['location'];
                    this.experience.lat = location.lat();
                    this.experience.lon = location.lng();
                };
                CreateExperienceComponent.prototype.submitExperience = function () {
                    var __this = this;
                    this.userService.createExperience(__this.experience.job_naming_id, __this.experience.business_id, __this.experience.start_date, __this.experience.end_date, __this.experience.adress, __this.experience.lat, __this.experience.lon, __this.experience.description).subscribe(function (res) {
                        console.log(res.json());
                    });
                };
                CreateExperienceComponent = __decorate([
                    core_1.Component({
                        selector: 'create-experience',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink, business_select_component_1.BusinessSelectComponent],
                        templateUrl: '../templates/create-experience.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, router_deprecated_1.RouteParams])
                ], CreateExperienceComponent);
                return CreateExperienceComponent;
            }());
            exports_1("CreateExperienceComponent", CreateExperienceComponent);
        }
    }
});
