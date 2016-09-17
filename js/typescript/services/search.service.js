System.register(['@angular/core', './../services/job.service'], function(exports_1, context_1) {
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
    var core_1, job_service_1;
    var SearchService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            }],
        execute: function() {
            SearchService = (function () {
                function SearchService(jobService) {
                    this.jobService = jobService;
                    this.parametersEmitter = new core_1.EventEmitter();
                    this.resultsEmitter = new core_1.EventEmitter();
                    this.mapModeEmitter = new core_1.EventEmitter();
                    this.isMapModeEnabled = false;
                    this.parametersEmitter = new core_1.EventEmitter();
                    this.resultsEmitter = new core_1.EventEmitter();
                    this.mapModeEmitter = new core_1.EventEmitter();
                }
                SearchService.prototype.search = function (params) {
                    var __this = this;
                    /**
                     * Emit search parameters to other subscribed components
                     */
                    if (params) {
                        this.parametersEmitter.emit(params);
                        /**
                         * Search jobs via job-service & emit results
                         */
                        this.jobService.searchJobs(params).subscribe(function (results) {
                            __this.resultsEmitter.emit(results);
                        });
                    }
                    else {
                        /**
                         * Get all jobs via job-service & emit results
                         */
                        this.jobService.getAllJobs().subscribe(function (results) {
                            __this.resultsEmitter.emit(results);
                        });
                    }
                };
                SearchService.prototype.toggleMapSearch = function (place) {
                    this.isMapModeEnabled = !this.isMapModeEnabled;
                    this.mapModeEmitter.emit(place);
                };
                SearchService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [job_service_1.JobService])
                ], SearchService);
                return SearchService;
            }());
            exports_1("SearchService", SearchService);
        }
    }
});
