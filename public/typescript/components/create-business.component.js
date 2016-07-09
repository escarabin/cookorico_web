System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../services/location.service', 'angular2-google-map-auto-complete/directives/googleplace.directive'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, location_service_1, googleplace_directive_1;
    var CreateBusinessComponent;
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
            function (location_service_1_1) {
                location_service_1 = location_service_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            }],
        execute: function() {
            CreateBusinessComponent = (function () {
                function CreateBusinessComponent(referenceService, userService, locationService) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.locationService = locationService;
                    var __this = this;
                    this.referenceService.getAllBusinessTypes().subscribe(function (res) {
                        __this.businessTypes = res.json();
                    });
                }
                CreateBusinessComponent.prototype.submitBusiness = function () {
                    console.log('submitting');
                };
                CreateBusinessComponent.prototype.getAdress = function (place) {
                    var location = place['geometry']['location'];
                    this.lat = location.lat();
                    this.lon = location.lng();
                    this.phone = place['formatted_phone_number'];
                    this.website = place['website'];
                    this.fullAdress = place['formatted_address'];
                    this.city = place['address_components'][2]['long_name'];
                    this.adress = place['name'];
                    // Get business's type
                    if (place['types'].indexOf('restaurant')) {
                        this.businessTypeId = 2;
                    }
                    else if (place['types'].indexOf('lodging')) {
                        this.businessTypeId = 1;
                    }
                    else if (place['types'].indexOf('campground')) {
                        this.businessTypeId = 6;
                    }
                    else if (place['types'].indexOf('cafe') || place['types'].indexOf('bar')) {
                        this.businessTypeId = 8;
                    }
                    else {
                        this.businessTypeId = 9;
                    }
                    console.log("Address Object", place);
                };
                CreateBusinessComponent = __decorate([
                    core_1.Component({
                        selector: 'create-business',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService, location_service_1.LocationService],
                        directives: [router_deprecated_1.RouterLink, googleplace_directive_1.GoogleplaceDirective],
                        templateUrl: '../templates/create-business.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, location_service_1.LocationService])
                ], CreateBusinessComponent);
                return CreateBusinessComponent;
            }());
            exports_1("CreateBusinessComponent", CreateBusinessComponent);
        }
    }
});
