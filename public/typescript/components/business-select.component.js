System.register(['@angular/core', './../services/business.service'], function(exports_1, context_1) {
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
    var core_1, business_service_1;
    var BusinessSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (business_service_1_1) {
                business_service_1 = business_service_1_1;
            }],
        execute: function() {
            BusinessSelectComponent = (function () {
                function BusinessSelectComponent(businessService) {
                    this.businessService = businessService;
                    this.businesses = [];
                    var __this = this;
                    businessService.getAll().subscribe(function (res) {
                        __this.businesses = res.json();
                    });
                }
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', Number)
                ], BusinessSelectComponent.prototype, "businessId", void 0);
                BusinessSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'business-select',
                        providers: [business_service_1.BusinessService],
                        templateUrl: '../templates/business-select.component.html',
                        inputs: ['businessId']
                    }), 
                    __metadata('design:paramtypes', [business_service_1.BusinessService])
                ], BusinessSelectComponent);
                return BusinessSelectComponent;
            }());
            exports_1("BusinessSelectComponent", BusinessSelectComponent);
        }
    }
});
