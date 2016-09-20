System.register(['@angular/core', '../../services/reference.service', '../../services/job.service', '../../services/search.service'], function(exports_1, context_1) {
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
    var core_1, reference_service_1, job_service_1, search_service_1;
    var JobSearchSidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            }],
        execute: function() {
            JobSearchSidebarComponent = (function () {
                function JobSearchSidebarComponent(referenceService, jobService, ref, SearchService, searchService) {
                    var _this = this;
                    this.referenceService = referenceService;
                    this.jobService = jobService;
                    this.ref = ref;
                    this.searchService = searchService;
                    this.contractTypes = [];
                    this.jobNamings = [];
                    this.studyLevels = [];
                    this.isStudyLevelCollapsed = false;
                    this.isContractTypeCollapsed = false;
                    this.isJobNamingCollapsed = false;
                    this.jobNamingList = [];
                    this.jobNamingTextList = [];
                    this.contractTypeList = [];
                    this.studyLevelList = [];
                    this.parametersList = {};
                    this.jobs = [];
                    this.isMobileSearchVisible = false;
                    /**
                     * By default, populate place object with France coords
                     */
                    this.zoom = 4;
                    this.mapLat = 46.227638;
                    this.mapLng = 2.213749;
                    this.mobileMenuHidden = true;
                    this.searchParametersChanged = new core_1.EventEmitter();
                    var __this = this;
                    /**
                     * Retrieve references
                     */
                    referenceService.getAllContractTypes().subscribe(function (res) {
                        __this.contractTypes = res.json();
                    });
                    referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                        for (var i = 0; i < __this.jobNamings.length; i++) {
                            __this.jobNamingTextList.push(__this.jobNamings[i].title);
                        }
                    });
                    referenceService.getAllStudyLevels().subscribe(function (res) {
                        __this.studyLevels = res.json();
                    });
                    /**
                     * Subscribe to new search parameters coming from other components
                     */
                    SearchService.parametersEmitter.subscribe(function (res) {
                        /**
                         * Parse place infos
                         */
                        __this.place = res['place'];
                        if (res['place']) {
                            __this.locationName = __this.place['formatted_address'];
                            __this.mapLat = __this.place['geometry']['location'].lat();
                            __this.mapLng = __this.place['geometry']['location'].lng();
                            __this.zoom = 8;
                        }
                        for (var i = 0; i < res['contractTypeIdList']; i++) {
                            var paramId = res['contractTypeIdList'][i];
                            __this.contractTypeList[paramId] = _this.getParamTitleFromId(paramId, 'contractType');
                        }
                        for (var i = 0; i < res['studyLevelIdList']; i++) {
                            var paramId = res['studyLevelIdList'][i];
                            __this.studyLevelList[paramId] = _this.getParamTitleFromId(paramId, 'studyLevel');
                        }
                        for (var i = 0; i < res['jobNamingIdList']; i++) {
                            var paramId = res['jobNamingIdList'][i];
                            __this.jobNamingList[paramId] = _this.getParamTitleFromId(paramId, 'jobNaming');
                        }
                    });
                    /**
                     * Subscribe to new search results coming from search.service
                     */
                    SearchService.resultsEmitter.subscribe(function (results) {
                        __this.jobs = results.json();
                    });
                }
                /**
                 * Get parameter title from its id
                 * @param parameterId
                 * @param parameterType
                 */
                JobSearchSidebarComponent.prototype.getParamTitleFromId = function (parameterId, parameterType) {
                    switch (parameterType) {
                        case "jobNaming":
                            for (var i = 0; i < this.jobNamings.length; i++) {
                                if (this.jobNamings[i].id == parameterId) {
                                    return this.jobNamings[i]['title'];
                                }
                            }
                            break;
                        case "contractType":
                            for (var i = 0; i < this.contractTypes.length; i++) {
                                if (this.contractTypes[i].id == parameterId) {
                                    return this.contractTypes[i]['title'];
                                }
                            }
                            break;
                        case "studyLevel":
                            for (var i = 0; i < this.studyLevels.length; i++) {
                                if (this.studyLevels[i].id == parameterId) {
                                    return this.studyLevels[i]['title'];
                                }
                            }
                            break;
                    }
                };
                /**
                 * Function used to get jobs count regarding given parameters
                 * @param parameterKey
                 * @param parameterValue
                 * @returns {number}
                 */
                JobSearchSidebarComponent.prototype.jobsCountFromParameterValue = function (parameterKey, parameterValue) {
                    var jobsCount = 0;
                    for (var i = 0; i < this.jobs.length; i++) {
                        if (this.jobs[i][parameterKey] == parameterValue) {
                            jobsCount += 1;
                        }
                    }
                    return jobsCount;
                };
                /**
                 * Function used to get actual length of parameters arrays
                 * (beause .length only gives the next index available in the array)
                 *  @param parametersArray
                 */
                JobSearchSidebarComponent.prototype.parametersCount = function (parametersArray) {
                    for (var i = 0, count = 0; i < parametersArray.length; i++, parametersArray[i] !== undefined && count++)
                        ;
                    return count;
                };
                /**
                 * Update search with new parameters
                 * @param parameterType
                 * @param parameterId
                 * @param parameterTitle
                 */
                JobSearchSidebarComponent.prototype.updateSearchParameter = function (parameterType, parameterId, parameterTitle) {
                    var _this = this;
                    /**
                     * Add or remove the parameters from their respective arrays
                     */
                    switch (parameterType) {
                        case "jobNaming":
                            if (!this.jobNamingList[parameterId]) {
                                if (parameterTitle.length > 25) {
                                    this.jobNamingList[parameterId] = parameterTitle.substr(0, 25) + '...';
                                }
                                else {
                                    this.jobNamingList[parameterId] = parameterTitle;
                                }
                            }
                            else {
                                delete this.jobNamingList[parameterId];
                            }
                            break;
                        case "contractType":
                            if (!this.contractTypeList[parameterId]) {
                                this.contractTypeList[parameterId] = parameterTitle;
                            }
                            else {
                                delete this.contractTypeList[parameterId];
                            }
                            break;
                        case "studyLevel":
                            if (!this.studyLevelList[parameterId]) {
                                this.studyLevelList[parameterId] = parameterTitle;
                            }
                            else {
                                delete this.studyLevelList[parameterId];
                            }
                            break;
                    }
                    this.parametersList['contractTypeList'] = this.contractTypeList;
                    this.parametersList['jobNamingList'] = this.jobNamingList;
                    this.parametersList['studyLevelList'] = this.studyLevelList;
                    // TODO : remove that shit
                    this.jobService.getAllJobs().subscribe(function (res) {
                        _this.jobs = res.json();
                    });
                    this.searchService.search(this.parametersList);
                    this.ref.detectChanges();
                };
                JobSearchSidebarComponent.prototype.mapClicked = function (event) {
                    this.searchService.toggleMapSearch(this.parametersList['place']);
                };
                /**
                 * Function triggered after user found a place
                 * @param place
                 */
                JobSearchSidebarComponent.prototype.parseAdress = function (place) {
                    this.parametersList['place'] = place;
                    this.searchService.search(this.parametersList);
                    this.mapLat = place['geometry']['location'].lat();
                    this.mapLng = place['geometry']['location'].lng();
                    this.zoom = 8;
                    this.ref.detectChanges();
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], JobSearchSidebarComponent.prototype, "searchParametersChanged", void 0);
                JobSearchSidebarComponent = __decorate([
                    core_1.Component({
                        providers: [reference_service_1.ReferenceService, job_service_1.JobService],
                        selector: 'job-search-sidebar',
                        templateUrl: '../templates/job-search-sidebar.component.html',
                    }),
                    __param(3, core_1.Inject(search_service_1.SearchService)), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, job_service_1.JobService, core_1.ChangeDetectorRef, Object, search_service_1.SearchService])
                ], JobSearchSidebarComponent);
                return JobSearchSidebarComponent;
            }());
            exports_1("JobSearchSidebarComponent", JobSearchSidebarComponent);
        }
    }
});
