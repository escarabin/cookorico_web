System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../services/location.service', './../services/business.service', './../services/notification.service', 'angular2-google-map-auto-complete/directives/googleplace.directive', './../models/business', './../models/place', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, location_service_1, business_service_1, notification_service_1, googleplace_directive_1, business_1, place_1, notification_1;
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
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            },
            function (business_1_1) {
                business_1 = business_1_1;
            },
            function (place_1_1) {
                place_1 = place_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            CreateBusinessComponent = (function () {
                function CreateBusinessComponent(referenceService, userService, notificationService, businessService, locationService, router, routeParams) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.businessService = businessService;
                    this.locationService = locationService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.business = new business_1.Business();
                    this.place = new place_1.Place();
                    this.isLoading = false;
                    var __this = this;
                    this.business.id = parseInt(routeParams.get("businessId"));
                    if (this.business.id) {
                        // Editing a specific business, let's retrieve it's data
                        this.userService.getBusiness(__this.business.id).subscribe(function (res) {
                            __this.business = res.json();
                            __this.place = res.json()['place'];
                        });
                    }
                    this.referenceService.getAllBusinessTypes().subscribe(function (res) {
                        __this.businessTypes = res.json();
                    });
                }
                CreateBusinessComponent.prototype.parseAdress = function (place) {
                    /**
                     * Parse google maps API data into [business] & [place] objects
                     */
                    var location = place['geometry']['location'];
                    this.place.lat = location.lat();
                    this.place.lon = location.lng();
                    this.business.phone = place['formatted_phone_number'];
                    this.business.website = place['website'];
                    this.place.adress = place['formatted_address'];
                    this.business.title = place['name'];
                    this.business.photos = [];
                    // Loop through photos to get url
                    for (var i = 0; i < place['photos'].length; i++) {
                        var photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });
                        3;
                        this.business.photos.push({ url: photoUrl });
                    }
                    // Get business's type
                    if (place['types'].indexOf('restaurant')) {
                        this.business.business_type_id = 2;
                    }
                    else if (place['types'].indexOf('lodging')) {
                        this.business.business_type_id = 1;
                    }
                    else if (place['types'].indexOf('campground')) {
                        this.business.business_type_id = 6;
                    }
                    else if (place['types'].indexOf('cafe') || place['types'].indexOf('bar')) {
                        this.business.business_type_id = 8;
                    }
                    else {
                        this.business.business_type_id = 9;
                    }
                    this.place.googlePlaceId = place['place_id'];
                    this.place.city = place['address_components'][2]['long_name'];
                    this.place.postalCode = place['address_components'][6]['long_name'];
                };
                CreateBusinessComponent.prototype.submitBusiness = function () {
                    var _this = this;
                    var __this = this;
                    this.businessService.create(__this.business, __this.place).subscribe(function (res) {
                        if (res['_body']) {
                            __this.notificationService.show(new notification_1.Notification('success', 'Votre établissement a bien été créee'));
                            // Redirect to experience edition
                            __this.router.navigate(['/Profile/EditBusiness', { businessId: res.json()['id'] }]);
                        }
                        else {
                            __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
                        }
                        _this.isLoading = false;
                    });
                };
                CreateBusinessComponent.prototype.deleteBusinessPhoto = function (photo) {
                    var indexOfPhoto = this.business.photos.indexOf(photo);
                    this.business.photos.splice(indexOfPhoto, 1);
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
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, notification_service_1.NotificationsService, business_service_1.BusinessService, location_service_1.LocationService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
                ], CreateBusinessComponent);
                return CreateBusinessComponent;
            }());
            exports_1("CreateBusinessComponent", CreateBusinessComponent);
        }
    }
});
