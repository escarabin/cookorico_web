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
// Components
var right_sidebar_component_1 = require('./right-sidebar.component');
var job_search_results_component_1 = require('./job-search-results.component');
var job_search_sidebar_component_1 = require('./job-search-sidebar.component');
var new_application_form_component_1 = require('./new-application-form.component');
var job_component_1 = require('./job.component');
var SearchComponent = (function () {
    function SearchComponent(routeParams, router) {
        this.routeParams = routeParams;
        this.router = router;
        this.searchParameters = [];
        this.placeId = parseInt(routeParams.get('placeId'));
        this.jobNamingId = parseInt(routeParams.get('jobNamingId'));
        this.contractTypeId = parseInt(routeParams.get('contractTypeId'));
        this.searchText = routeParams.get('searchText');
    }
    SearchComponent.prototype.updateSearchResults = function (parameters) {
        this.searchParameters = parameters;
        this.router.navigate(['/JobSearch/SearchJobs', { parameters: parameters }]);
    };
    SearchComponent = __decorate([
        core_1.Component({
            directives: [job_search_sidebar_component_1.JobSearchSidebarComponent,
                right_sidebar_component_1.RightSidebarComponent,
                router_deprecated_1.RouterOutlet],
            templateUrl: '../templates/search.component.html',
            selector: 'search',
        }),
        router_deprecated_1.RouteConfig([
            { path: '/jobs/search/', name: 'ShowAllJobs', component: job_search_results_component_1.JobSearchResultsComponent, useAsDefault: true },
            { path: '/job/:jobId/', name: 'ShowJob', component: job_component_1.JobComponent },
            { path: '/jobs/search/:parameters',
                name: 'SearchJobs', component: job_search_results_component_1.JobSearchResultsComponent },
            { path: '/apply/:jobId', name: 'Apply', component: new_application_form_component_1.NewApplicationFormComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map