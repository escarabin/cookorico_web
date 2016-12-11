"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BusinessPageComponent = (function () {
    function BusinessPageComponent(jobService, businessService, clubService, route) {
        this.jobService = jobService;
        this.businessService = businessService;
        this.clubService = clubService;
        this.route = route;
        this.jobs = [];
        this.business = {};
        this.club = {};
        this.user = {};
        this.scrollTop = 0;
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        /**
         * Get all jobs related to current business
         */
        route.params.subscribe(function (params) {
            if (params) {
                if (params['businessId']) {
                    __this.businessId = params['businessId'];
                    /**
                     * Get jobs listing from specific business
                     */
                    __this.jobService.getJobsFromBusiness(__this.businessId).subscribe(function (results) {
                        __this.jobs = results.json();
                    });
                    /**
                     * Get specific business data
                     */
                    __this.businessService.get(__this.businessId).subscribe(function (res) {
                        __this.business = res.json();
                    });
                }
                else if (params['clubId']) {
                    __this.clubId = params['clubId'];
                    /**
                     * Get jobs listing from specific club
                     */
                    __this.jobService.getJobsFromClub(__this.clubId).subscribe(function (results) {
                        __this.jobs = results.json();
                    });
                    /**
                     * Get specific club data
                     */
                    __this.clubService.getClub(__this.clubId).subscribe(function (res) {
                        __this.club = res.json();
                    });
                }
            }
        });
    }
    BusinessPageComponent = __decorate([
        core_1.Component({
            selector: 'business-page',
            templateUrl: '../../../templates/business-page.component.html'
        })
    ], BusinessPageComponent);
    return BusinessPageComponent;
}());
exports.BusinessPageComponent = BusinessPageComponent;
