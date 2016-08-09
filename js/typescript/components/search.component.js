System.register(['@angular/core', '@angular/router-deprecated', './right-sidebar.component', './job-search-results.component', './job-search-sidebar.component', './new-application-form.component', './job.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, right_sidebar_component_1, job_search_results_component_1, job_search_sidebar_component_1, new_application_form_component_1, job_component_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (right_sidebar_component_1_1) {
                right_sidebar_component_1 = right_sidebar_component_1_1;
            },
            function (job_search_results_component_1_1) {
                job_search_results_component_1 = job_search_results_component_1_1;
            },
            function (job_search_sidebar_component_1_1) {
                job_search_sidebar_component_1 = job_search_sidebar_component_1_1;
            },
            function (new_application_form_component_1_1) {
                new_application_form_component_1 = new_application_form_component_1_1;
            },
            function (job_component_1_1) {
                job_component_1 = job_component_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(routeParams) {
                    this.routeParams = routeParams;
                    this.searchParameters = [];
                    this.placeId = parseInt(routeParams.get('placeId'));
                    this.jobNamingId = parseInt(routeParams.get('jobNamingId'));
                    this.contractTypeId = parseInt(routeParams.get('contractTypeId'));
                    this.searchText = routeParams.get('searchText');
                }
                SearchComponent.prototype.updateSearchResults = function (parameters) {
                    this.searchParameters = parameters;
                    this.jobSearchResults.updateSearchResults(parameters);
                };
                __decorate([
                    core_1.ViewChild(job_search_results_component_1.JobSearchResultsComponent), 
                    __metadata('design:type', job_search_results_component_1.JobSearchResultsComponent)
                ], SearchComponent.prototype, "jobSearchResults", void 0);
                SearchComponent = __decorate([
                    core_1.Component({
                        directives: [job_search_sidebar_component_1.JobSearchSidebarComponent,
                            right_sidebar_component_1.RightSidebarComponent,
                            job_search_results_component_1.JobSearchResultsComponent,
                            router_deprecated_1.RouterOutlet],
                        providers: [job_search_results_component_1.JobSearchResultsComponent],
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
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
