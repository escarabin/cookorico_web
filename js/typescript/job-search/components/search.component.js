System.register(['@angular/core', '@angular/router', './job-search-results.component'], function(exports_1, context_1) {
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
    var core_1, router_1, job_search_results_component_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (job_search_results_component_1_1) {
                job_search_results_component_1 = job_search_results_component_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(route) {
                    var _this = this;
                    this.route = route;
                    this.searchParameters = [];
                    route.params.subscribe(function (params) {
                        if (params) {
                            _this.placeId = params['placeId'];
                            _this.jobNamingId = parseInt(params['jobNamingId']);
                            _this.contractTypeId = parseInt(params['contractTypeId']);
                            _this.studyLevelId = parseInt(params['studyLevelId']);
                        }
                    });
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
                        providers: [job_search_results_component_1.JobSearchResultsComponent],
                        templateUrl: '../templates/search.component.html',
                        selector: 'search',
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
