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
// Services
var business_service_1 = require('././business.service');
var place_service_1 = require('././place.service');
var user_service_1 = require('././user.service');
var notification_service_1 = require('././notification.service');
// Directives
var googleplace_directive_1 = require('angular2-google-map-auto-complete/directives/googleplace.directive');
var BusinessSelectComponent = (function () {
    function BusinessSelectComponent(businessService, placeService, notificationService, userService) {
        this.businessService = businessService;
        this.placeService = placeService;
        this.notificationService = notificationService;
        this.userService = userService;
        this.businesses = [];
        this.isGooglePlaceInput = false;
        this.businessIdChange = new core_1.EventEmitter();
        var __this = this;
        /**
         * Check if we have to show only user's businesses in select options
         */
        if (this.onlyUserBusinesses) {
            userService.getBusinesses().subscribe(function (res) {
                __this.businesses = res.json();
            });
        }
        else {
            businessService.getAll().subscribe(function (res) {
                __this.businesses = res.json();
            });
        }
    }
    BusinessSelectComponent.prototype.parseAdress = function (place) {
        var __this = this;
        console.log(place);
        // Save selected place data for further use
        this.placeService.save(place).subscribe(function (res) {
            console.log(res.json());
            __this.businessId = res.json()['id'];
            __this.businessIdChanged();
            __this.businessService.getAll().subscribe(function (res1) {
                __this.businesses = res1.json();
                __this.isGooglePlaceInput = false;
            });
        });
    };
    BusinessSelectComponent.prototype.businessIdChanged = function (newBusinessId) {
        this.businessIdChange.emit(newBusinessId);
    };
    __decorate([
        core_1.Input, 
        __metadata('design:type', Number)
    ], BusinessSelectComponent.prototype, "businessId", void 0);
    __decorate([
        core_1.Input, 
        __metadata('design:type', Boolean)
    ], BusinessSelectComponent.prototype, "onlyUserBusinesses", void 0);
    __decorate([
        core_1.Input, 
        __metadata('design:type', Boolean)
    ], BusinessSelectComponent.prototype, "isRequired", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BusinessSelectComponent.prototype, "businessIdChange", void 0);
    BusinessSelectComponent = __decorate([
        core_1.Component({
            selector: 'business-select',
            providers: [business_service_1.BusinessService, place_service_1.PlaceService, user_service_1.UserService, notification_service_1.NotificationsService],
            directives: [googleplace_directive_1.GoogleplaceDirective],
            templateUrl: '../templates/business-select.component.html',
            inputs: ['businessId', 'onlyUserBusinesses', 'isRequired']
        }), 
        __metadata('design:paramtypes', [business_service_1.BusinessService, place_service_1.PlaceService, notification_service_1.NotificationsService, user_service_1.UserService])
    ], BusinessSelectComponent);
    return BusinessSelectComponent;
}());
exports.BusinessSelectComponent = BusinessSelectComponent;
//# sourceMappingURL=business-select.component.js.map