System.register(['@angular/core', '@angular/router', '../../services/reference.service', '../../services/job.service', '../../services/search.service'], function(exports_1, context_1) {
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
    var core_1, router_1, reference_service_1, job_service_1, search_service_1;
    var JobSearchSidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                function JobSearchSidebarComponent(referenceService, jobService, SearchService, route) {
                    var _this = this;
                    this.referenceService = referenceService;
                    this.jobService = jobService;
                    this.route = route;
                    this.isStudyLevelCollapsed = true;
                    this.isContractTypeCollapsed = true;
                    this.isJobNamingCollapsed = true;
                    this.place = [];
                    this.jobNamingIdList = [];
                    this.jobNamingTextList = ["Cuisinier", "Chef de salle", "Serveur", "Dentiste"];
                    this.contractTypeIdList = [];
                    this.studyLevelIdList = [];
                    this.jobs = [];
                    this.searchParametersChanged = new core_1.EventEmitter();
                    var __this = this;
                    SearchService.parametersEmitter.subscribe(function (res) { return console.log('yihaaaaa', res); });
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
                    jobService.getAllJobs().subscribe(function (res) {
                        __this.jobs = res.json();
                    });
                    route.params.subscribe(function (params) {
                        if (params) {
                            _this.studyLevelIdList.push(parseInt(route['studyLevelId']));
                            _this.jobNamingIdList.push(parseInt(route['jobNamingId']));
                            _this.contractTypeIdList.push(parseInt(route['contractTypeId']));
                            _this.searchText = route['searchText'];
                        }
                    });
                }
                /**
                 * ng2-select functions
                 * @param value
                 */
                JobSearchSidebarComponent.prototype.selected = function (value) {
                    console.log('Selected value is: ', value);
                };
                JobSearchSidebarComponent.prototype.removed = function (value) {
                    console.log('Removed value is: ', value);
                };
                JobSearchSidebarComponent.prototype.refreshValue = function (value) {
                    this.value = value;
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
                 * Update search with new parameters
                 * @param parameterType
                 * @param parameterValue
                 */
                JobSearchSidebarComponent.prototype.updateSearchParameter = function (parameterType, parameterValue) {
                    var _this = this;
                    /**
                     * Add or remove the parameters from their respective arrays
                     */
                    switch (parameterType) {
                        case "contractType":
                            var contractTypeIndex = this.contractTypeIdList.indexOf(parameterValue);
                            if (contractTypeIndex == -1) {
                                this.contractTypeIdList.push(parseInt(parameterValue));
                            }
                            else {
                                this.contractTypeIdList.splice(contractTypeIndex, 1);
                            }
                            break;
                        case "jobNaming":
                            var jobNamingIndex = this.contractTypeIdList.indexOf(parameterValue);
                            if (jobNamingIndex == -1) {
                                this.jobNamingIdList.push(parseInt(parameterValue));
                            }
                            else {
                                this.jobNamingIdList.splice(jobNamingIndex, 1);
                            }
                            break;
                        case "studyLevel":
                            var studyLevelIndex = this.studyLevelIdList.indexOf(parameterValue);
                            if (studyLevelIndex == -1) {
                                this.studyLevelIdList.push(parseInt(parameterValue));
                            }
                            else {
                                this.studyLevelIdList.splice(studyLevelIndex, 1);
                            }
                            break;
                    }
                    var parametersArray = {};
                    parametersArray['contractTypeIdList'] = this.contractTypeIdList;
                    parametersArray['jobNamingIdList'] = this.jobNamingIdList;
                    parametersArray['studyLevelIdList'] = this.studyLevelIdList;
                    parametersArray['place'] = this.place;
                    // TODO : remove that shit
                    this.jobService.getAllJobs().subscribe(function (res) {
                        _this.jobs = res.json();
                        console.log(_this.jobs);
                    });
                    this.searchParametersChanged.emit(parametersArray);
                };
                JobSearchSidebarComponent.prototype.parseAdress = function (place) {
                    this.place = place;
                    this.updateSearchParameter();
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
                    __param(2, core_1.Inject(search_service_1.SearchService)), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, job_service_1.JobService, Object, router_1.ActivatedRoute])
                ], JobSearchSidebarComponent);
                return JobSearchSidebarComponent;
            }());
            exports_1("JobSearchSidebarComponent", JobSearchSidebarComponent);
        }
    }
});
