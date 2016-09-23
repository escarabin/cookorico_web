System.register(['@angular/core', './../../services/business.service', './../../services/place.service', './../../services/user.service'], function(exports_1, context_1) {
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
    var core_1, business_service_1, place_service_1, user_service_1;
    var BusinessSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (business_service_1_1) {
                business_service_1 = business_service_1_1;
            },
            function (place_service_1_1) {
                place_service_1 = place_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            BusinessSelectComponent = (function () {
                function BusinessSelectComponent(businessService, placeService, userService) {
                    this.businessService = businessService;
                    this.placeService = placeService;
                    this.userService = userService;
                    this.businesses = [];
                    this.businessInputText = "";
                    this.isGooglePlaceInput = true;
                    this.businessIdChange = new core_1.EventEmitter();
                    this.isViewInit = false;
                }
                BusinessSelectComponent.prototype.ngAfterViewChecked = function () {
                    var _this = this;
                    var __this = this;
                    if (this.businessId && !this.isViewInit) {
                        console.log('business id is ' + this.businessId);
                        /**
                         * Check if we have to show only user's businesses in select options
                         */
                        if (this.onlyUserBusinesses) {
                            this.userService.getBusinesses().subscribe(function (res) {
                                __this.businesses = res.json();
                                _this.createBusinessesOptionsText();
                            });
                        }
                        else {
                            this.businessService.getAll().subscribe(function (res) {
                                __this.businesses = res.json();
                                _this.createBusinessesOptionsText();
                            });
                        }
                        /**
                         * Retrieve business infos
                         */
                        if (this.businessId) {
                            this.businessService.get(this.businessId).subscribe(function (res) {
                                __this.businessInputText = res.json()['title'];
                                _this.createBusinessesOptionsText();
                            });
                        }
                        this.isViewInit = true;
                    }
                };
                BusinessSelectComponent.prototype.createBusinessesOptionsText = function () {
                    /**
                     * Property ['text'] is used by ng2-select to display option titles
                     */
                    for (var i = 0; i < this.businesses.length; i++) {
                        this.businesses[i]['text'] = this.businesses[i]['title'];
                    }
                };
                BusinessSelectComponent.prototype.parseAdress = function (place) {
                    var __this = this;
                    // Save selected place data for further use
                    this.placeService.save(place).subscribe(function (res) {
                        __this.businessId = res.json()['id'];
                        __this.businessIdHasChanged();
                    });
                };
                /**
                 * Function fired when user types something in business input
                 * @param newText
                 */
                BusinessSelectComponent.prototype.businessInputTextHasChanged = function (newText) {
                    this.businessInputText = newText;
                };
                BusinessSelectComponent.prototype.businessIdHasChanged = function () {
                    this.businessIdChange.emit(this.businessId);
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
                    core_1.Input, 
                    __metadata('design:type', Boolean)
                ], BusinessSelectComponent.prototype, "isMultiple", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], BusinessSelectComponent.prototype, "businessIdChange", void 0);
                BusinessSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'business-select',
                        providers: [business_service_1.BusinessService, place_service_1.PlaceService, user_service_1.UserService],
                        templateUrl: '../templates/business-select.component.html',
                        inputs: ['businessId', 'onlyUserBusinesses', 'isRequired', 'isMultiple']
                    }), 
                    __metadata('design:paramtypes', [business_service_1.BusinessService, place_service_1.PlaceService, user_service_1.UserService])
                ], BusinessSelectComponent);
                return BusinessSelectComponent;
            }());
            exports_1("BusinessSelectComponent", BusinessSelectComponent);
        }
    }
});
