System.register(['@angular/core', '@angular/router-deprecated', './job-search-bar.component', './job-search-results.component', './job-search-sidebar.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, job_search_bar_component_1, job_search_results_component_1, job_search_sidebar_component_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (job_search_bar_component_1_1) {
                job_search_bar_component_1 = job_search_bar_component_1_1;
            },
            function (job_search_results_component_1_1) {
                job_search_results_component_1 = job_search_results_component_1_1;
            },
            function (job_search_sidebar_component_1_1) {
                job_search_sidebar_component_1 = job_search_sidebar_component_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(routeParams) {
                    this.routeParams = routeParams;
                }
                SearchComponent = __decorate([
                    core_1.Component({
                        directives: [job_search_results_component_1.JobSearchResultsComponent,
                            job_search_sidebar_component_1.JobSearchSidebarComponent,
                            job_search_bar_component_1.JobSearchBarComponent],
                        templateUrl: '../templates/search.component.html',
                        selector: 'search',
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object])
                ], SearchComponent);
                return SearchComponent;
                var _a;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
