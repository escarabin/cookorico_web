System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../services/location.service', './../services/business.service', 'angular2-google-map-auto-complete/directives/googleplace.directive'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, location_service_1, business_service_1, googleplace_directive_1;
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
            function (business_service_1_1) {
                business_service_1 = business_service_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            }],
        execute: function() {
            CreateBusinessComponent = (function () {
                function CreateBusinessComponent(referenceService, userService, businessService, locationService) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.businessService = businessService;
                    this.locationService = locationService;
                    this.photos = [];
                    var __this = this;
                    this.referenceService.getAllBusinessTypes().subscribe(function (res) {
                        __this.businessTypes = res.json();
                    });
                }
                CreateBusinessComponent.prototype.getAdress = function (place) {
                    var location = place['geometry']['location'];
                    this.lat = location.lat();
                    this.lon = location.lng();
                    this.phone = place['formatted_phone_number'];
                    this.website = place['website'];
                    this.fullAdress = place['formatted_address'];
                    this.adress = place['name'];
                    // Loop through photos to get url
                    for (var i = 0; i < place['photos'].length; i++) {
                        var photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });
                        this.photos.push(photoUrl);
                    }
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
                    this.city = place['address_components'][2]['long_name'];
                };
                CreateBusinessComponent.prototype.submitBusiness = function () {
                    var __this = this;
                    this.businessService.create(__this.adress, __this.lat, __this.lon, __this.fullAdress, __this.postalCode, __this.city, 
                    // Encode url in order to pass it as a parameter
                    __this.website.replace('/', '--'), __this.businessTypeId, __this.phone, __this.email, __this.description).subscribe(function (res) {
                        console.log(res.json());
                    });
                };
                CreateBusinessComponent = __decorate([
                    core_1.Component({
                        selector: 'create-business',
                        providers: [reference_service_1.ReferenceService,
                            user_service_1.UserService,
                            location_service_1.LocationService,
                            business_service_1.BusinessService],
                        directives: [router_deprecated_1.RouterLink, googleplace_directive_1.GoogleplaceDirective],
                        templateUrl: '../templates/create-business.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, business_service_1.BusinessService, location_service_1.LocationService])
                ], CreateBusinessComponent);
                return CreateBusinessComponent;
            }());
            exports_1("CreateBusinessComponent", CreateBusinessComponent);
        }
    }
});
