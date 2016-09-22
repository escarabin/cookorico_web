System.register(['@angular/core', '@angular/router', '../../services/search.service', 'ng2-pagination'], function(exports_1, context_1) {
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
    var core_1, router_1, search_service_1, ng2_pagination_1;
    var JobSearchResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            }],
        execute: function() {
            JobSearchResultsComponent = (function () {
                function JobSearchResultsComponent(searchService, route) {
                    var _this = this;
                    this.searchService = searchService;
                    this.route = route;
                    this.jobs = [];
                    this.isMapModeEnabled = false;
                    this.parametersList = [];
                    /**
                     * By default, populate place object with France coords
                     */
                    this.zoom = 6;
                    this.mapLat = 46.227638;
                    this.mapLng = 2.213749;
                    var __this = this;
                    route.params.subscribe(function (params) {
                        if (params) {
                            __this.xpLevelId = params['xpLevelId'];
                            __this.contractTypeId = params['contractTypeId'];
                            __this.jobNamingId = params['jobNamingId'];
                            __this.searchText = params['searchText'];
                            __this.placeId = params['placeId'];
                            _this.parametersList['contractTypeIdList'] = [_this.contractTypeId];
                            _this.parametersList['jobNamingIdList'] = [_this.jobNamingId];
                            _this.parametersList['xpLevelIdList'] = [_this.xpLevelId];
                            /**
                             * Get google maps data from placeId using reverse geocoding API
                             */
                            var geocoder = new google.maps.Geocoder;
                            geocoder.geocode({ 'placeId': __this.placeId }, function (results) {
                                var place = results[0];
                                __this.parametersList['place'] = place;
                                searchService.search(__this.parametersList);
                            });
                        }
                    });
                    /**
                     * Subscribe to new search parameters coming from search.service
                     */
                    searchService.parametersEmitter.subscribe(function (params) {
                        _this.parametersList = params;
                    });
                    /**
                     * Subscribe to new search results coming from search.service
                     */
                    searchService.resultsEmitter.subscribe(function (results) {
                        __this.jobs = results.json();
                    });
                    /**
                     * Subscribe to map mode emitter
                     */
                    searchService.mapModeEmitter.subscribe(function (place) {
                        _this.isMapModeEnabled = !_this.isMapModeEnabled;
                        if (place) {
                            _this.parametersList['place'] = place;
                            _this.mapLat = place['geometry']['location'].lat();
                            _this.mapLng = place['geometry']['location'].lng();
                            _this.zoom = 8;
                        }
                    });
                    /**
                     * Do initial search without params (getting all jobs)
                     * TODO: remove it
                     */
                    // searchService.search();
                }
                /**
                 * Function used to flush place object and emit event to other components
                 */
                JobSearchResultsComponent.prototype.resetPlace = function () {
                    this.parametersList['place'] = null;
                    this.searchService.search(this.parametersList);
                };
                /**
                 * Function called from search.component
                 * after user changed the search parameters
                 * @param searchParameters
                 */
                JobSearchResultsComponent.prototype.updateSearchResults = function (searchParameters) {
                    var __this = this;
                    __this.jobs = [];
                    /*this.jobService.searchJobs(searchParameters).subscribe((res: Response) => {
                        __this.jobs = res.json();
                    });*/
                };
                JobSearchResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'job-search-results',
                        providers: [ng2_pagination_1.PaginationService],
                        pipes: [ng2_pagination_1.PaginatePipe],
                        templateUrl: '../templates/job-search-results.component.html',
                    }),
                    __param(0, core_1.Inject(search_service_1.SearchService)), 
                    __metadata('design:paramtypes', [search_service_1.SearchService, router_1.ActivatedRoute])
                ], JobSearchResultsComponent);
                return JobSearchResultsComponent;
            }());
            exports_1("JobSearchResultsComponent", JobSearchResultsComponent);
        }
    }
});
