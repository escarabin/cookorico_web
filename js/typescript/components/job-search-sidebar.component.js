System.register(['@angular/core', '@angular/router-deprecated', 'ng2-bootstrap', './../services/reference.service', 'angular2-google-map-auto-complete/directives/googleplace.directive', './../services/job.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, ng2_bootstrap_1, reference_service_1, googleplace_directive_1, job_service_1;
    var JobSearchSidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            }],
        execute: function() {
            JobSearchSidebarComponent = (function () {
                function JobSearchSidebarComponent(referenceService, jobService, routeParams) {
                    this.referenceService = referenceService;
                    this.jobService = jobService;
                    this.routeParams = routeParams;
                    this.isStudyLevelCollapsed = true;
                    this.isContractTypeCollapsed = true;
                    this.isJobNamingCollapsed = true;
                    this.place = [];
                    this.jobNamingIdList = [];
                    this.contractTypeIdList = [];
                    this.studyLevelIdList = [];
                    this.jobs = [];
                    this.searchParametersChanged = new core_1.EventEmitter();
                    var __this = this;
                    referenceService.getAllContractTypes().subscribe(function (res) {
                        __this.contractTypes = res.json();
                    });
                    referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                    referenceService.getAllStudyLevels().subscribe(function (res) {
                        __this.studyLevels = res.json();
                    });
                    jobService.getAllJobs().subscribe(function (res) {
                        __this.jobs = res.json();
                    });
                    this.studyLevelIdList.push(parseInt(routeParams.get('studyLevelId')));
                    this.jobNamingIdList.push(parseInt(routeParams.get('jobNamingId')));
                    this.contractTypeIdList.push(parseInt(routeParams.get('contractTypeId')));
                    this.searchText = routeParams.get('searchText');
                }
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
                        directives: [router_deprecated_1.RouterLink,
                            ng2_bootstrap_1.CollapseDirective,
                            googleplace_directive_1.GoogleplaceDirective],
                        providers: [reference_service_1.ReferenceService, job_service_1.JobService],
                        selector: 'job-search-sidebar',
                        templateUrl: '../templates/job-search-sidebar.component.html',
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, job_service_1.JobService, router_deprecated_1.RouteParams])
                ], JobSearchSidebarComponent);
                return JobSearchSidebarComponent;
            }());
            exports_1("JobSearchSidebarComponent", JobSearchSidebarComponent);
        }
    }
});
