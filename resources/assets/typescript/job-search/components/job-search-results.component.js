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
var job_service_1 = require('./../services/job.service');
// Components
var job_preview_component_1 = require('./job-preview.component.ts');
var custom_pagination_component_1 = require('./custom-pagination.component');
// Pagination
var ng2_pagination_1 = require('ng2-pagination');
var JobSearchResultsComponent = (function () {
    function JobSearchResultsComponent(jobService, routeParams) {
        this.jobService = jobService;
        this.routeParams = routeParams;
        this.jobs = [];
        var __this = this;
        this.placeId = this.routeParams.get('placeId');
        this.studyLevelId = this.routeParams.get('studyLevelId');
        this.contractTypeId = this.routeParams.get('contractTypeId');
        this.jobNamingId = this.routeParams.get('jobNamingId');
        this.searchText = this.routeParams.get('searchText');
        /*this.jobService.getAllJobs().subscribe(function (res) {
            __this.jobs = res.json();
        });*/
    }
    /**
     * Function called from search.component
     * after user changed the search parameters
     * @param searchParameters
     */
    JobSearchResultsComponent.prototype.updateSearchResults = function (searchParameters) {
        var __this = this;
        console.log('params bitch ', searchParameters);
        this.jobService.searchJobs(searchParameters).subscribe(function (res) {
            __this.jobs = res.json();
        });
    };
    JobSearchResultsComponent = __decorate([
        core_1.Component({
            selector: 'job-search-results',
            directives: [job_preview_component_1.JobPreviewComponent,
                ng2_pagination_1.PaginationControlsCmp,
                custom_pagination_component_1.CustomPaginationComponent],
            providers: [job_service_1.JobService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe],
            templateUrl: '../templates/job-search-results.component.html',
        }), 
        __metadata('design:paramtypes', [job_service_1.JobService, router_deprecated_1.RouteParams])
    ], JobSearchResultsComponent);
    return JobSearchResultsComponent;
}());
exports.JobSearchResultsComponent = JobSearchResultsComponent;
//# sourceMappingURL=job-search-results.component.js.map