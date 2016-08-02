"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// Services
var reference_service_1 = require('./../services/reference.service');
var user_service_1 = require('./../services/user.service');
var location_service_1 = require('./../services/location.service');
var business_service_1 = require('./../services/business.service');
// Directives
var googleplace_directive_1 = require('angular2-google-map-auto-complete/directives/googleplace.directive');
// Models
var business_1 = require('./../models/business');
var place_1 = require('./../models/place');
var CreateBusinessComponent = (function () {
    function CreateBusinessComponent(referenceService, userService, businessService, locationService, routeParams) {
        this.referenceService = referenceService;
        this.userService = userService;
        this.businessService = businessService;
        this.locationService = locationService;
        this.routeParams = routeParams;
        this.business = new business_1.Business();
        this.place = new place_1.Place();
        var __this = this;
        this.business.id = parseInt(routeParams.get("businessId"));
        if (this.business.id) {
            // Editing a specific business, let's retrieve it's data
            this.userService.getBusiness(__this.business.id).subscribe(function (res) {
                __this.business = res.json();
            });
        }
        this.referenceService.getAllBusinessTypes().subscribe(function (res) {
            __this.businessTypes = res.json();
        });
    }
    CreateBusinessComponent.prototype.parseAdress = function (place) {
        var location = place['geometry']['location'];
        this.place.lat = location.lat();
        this.place.lon = location.lng();
        this.business.phone = place['formatted_phone_number'];
        this.business.website = place['website'];
        this.place.adress = place['formatted_address'];
        this.business.title = place['name'];
        // Loop through photos to get url
        for (var i = 0; i < place['photos'].length; i++) {
            var photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });
            3;
            if (!this.business.photos) {
                this.business.photos = [photoUrl];
            }
            else {
                this.business.photos.push(photoUrl);
            }
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
        this.place.city = place['address_components'][2]['long_name'];
        this.place.postalCode = place['address_components'][6]['long_name'];
    };
    CreateBusinessComponent.prototype.submitBusiness = function () {
        var __this = this;
        this.businessService.create(__this.business).subscribe(function (res) {
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
        __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, business_service_1.BusinessService, location_service_1.LocationService, router_deprecated_1.RouteParams])
    ], CreateBusinessComponent);
    return CreateBusinessComponent;
}());
exports.CreateBusinessComponent = CreateBusinessComponent;
//# sourceMappingURL=create-business.component.js.map