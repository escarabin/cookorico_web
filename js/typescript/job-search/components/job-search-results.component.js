System.register(['@angular/core', '@angular/router', '../../services/job.service', '../../services/search.service', 'ng2-pagination'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, job_service_1, search_service_1, ng2_pagination_1;
    var JobSearchResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            }],
        execute: function() {
            JobSearchResultsComponent = (function () {
                function JobSearchResultsComponent(jobService, SearchService, route) {
                    this.jobService = jobService;
                    this.route = route;
                    this.jobs = [];
                    var __this = this;
                    route.params.subscribe(function (params) {
                        if (params) {
                            __this.placeId = params['placeId'];
                            __this.studyLevelId = params['studyLevelId'];
                            __this.contractTypeId = params['contractTypeId'];
                            __this.jobNamingId = params['jobNamingId'];
                            __this.searchText = params['searchText'];
                            SearchService.sendSearchParameters(__this.placeId, [__this.jobNamingId], [__this.contractTypeId], __this.studyLevelId);
                        }
                    });
                    this.jobService.getAllJobs().subscribe(function (res) {
                        __this.jobs = res.json();
                        console.log(__this.jobs);
                    });
                }
                /**
                 * Function called from search.component
                 * after user changed the search parameters
                 * @param searchParameters
                 */
                JobSearchResultsComponent.prototype.updateSearchResults = function (searchParameters) {
                    var __this = this;
                    console.log('params bitch ', searchParameters);
                    __this.jobs = [];
                    /*this.jobService.searchJobs(searchParameters).subscribe((res: Response) => {
                        __this.jobs = res.json();
                    });*/
                };
                JobSearchResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'job-search-results',
                        providers: [job_service_1.JobService, ng2_pagination_1.PaginationService],
                        pipes: [ng2_pagination_1.PaginatePipe],
                        templateUrl: '../templates/job-search-results.component.html',
                    }),
                    __param(1, core_1.Inject(search_service_1.SearchService)), 
                    __metadata('design:paramtypes', [job_service_1.JobService, Object, router_1.ActivatedRoute])
                ], JobSearchResultsComponent);
                return JobSearchResultsComponent;
            }());
            exports_1("JobSearchResultsComponent", JobSearchResultsComponent);
        }
    }
});