"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Pagination
var ng2_pagination_1 = require('ng2-pagination');
var BusinessesComponent = (function () {
    function BusinessesComponent(userService, businessService) {
        var _this = this;
        this.userService = userService;
        this.businessService = businessService;
        this.items = [];
        this.checkedItemsList = [];
        this.isLoading = true;
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.user_type_id == 1) {
            this.businessService.getAll().subscribe(function (res) {
                __this.items = res.json();
                _this.isLoading = false;
            });
        }
        else {
            this.userService.getBusinesses(this.user.id).subscribe(function (res) {
                __this.items = res.json();
                _this.isLoading = false;
            });
        }
    }
    /**
     * Pagination triggers
     */
    BusinessesComponent.prototype.pageChanged = function () {
        window.scrollTo(0, 100);
    };
    BusinessesComponent.prototype.searchBusiness = function () {
        var _this = this;
        if (this.searchText) {
            this.businessService.search(this.searchText).subscribe(function (res) {
                _this.items = res.json();
            });
        }
        else {
            this.businessService.getAll().subscribe(function (res) {
                __this.items = res.json();
            });
        }
    };
    BusinessesComponent = __decorate([
        core_1.Component({
            selector: 'businesses',
            providers: [ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe],
            templateUrl: '../../../templates/businesses.component.html'
        })
    ], BusinessesComponent);
    return BusinessesComponent;
}());
exports.BusinessesComponent = BusinessesComponent;
