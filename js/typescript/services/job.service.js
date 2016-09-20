System.register(['@angular/core', '@angular/http', './../globals'], function(exports_1, context_1) {
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
    var core_1, http_1, appGlobals;
    var JobService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (appGlobals_1) {
                appGlobals = appGlobals_1;
            }],
        execute: function() {
            JobService = (function () {
                function JobService(http) {
                    this.http = http;
                    this.allJobsListingUrl = appGlobals.apiUrl + '/jobs/all';
                    this.showJobListingUrl = appGlobals.apiUrl + '/job/';
                    this.jobsFromBusinessUrl = appGlobals.apiUrl + '/business/jobs/';
                    this.applyJobUrl = appGlobals.apiUrl + '/apply_job';
                    this.searchJobsUrl = appGlobals.apiUrl + '/jobs/search';
                    this.user = JSON.parse(localStorage.getItem('user'));
                }
                /**
                 * Listing all jobs
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.getAllJobs = function () {
                    return this.http.request(this.allJobsListingUrl);
                };
                /**
                 * Search jobs regarding parameters
                 * @param searchParameters
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.searchJobs = function (searchParameters) {
                    var body = JSON.stringify({ searchParameters: searchParameters });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.searchJobsUrl, body, options);
                };
                /**
                 * Returns specific job
                 * @param jobId
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.getJob = function (jobId) {
                    return this.http.request(this.showJobListingUrl + jobId);
                };
                /**
                 * List jobs from businessId
                 * @param businessId
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.getJobsFromBusiness = function (businessId) {
                    return this.http.get(this.jobsFromBusinessUrl + businessId);
                };
                /**
                 * Apply to a specific job
                 * @param application
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.apply = function (application) {
                    var body = JSON.stringify({ application: application });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.applyJobUrl, body, options);
                };
                JobService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JobService);
                return JobService;
            }());
            exports_1("JobService", JobService);
        }
    }
});
