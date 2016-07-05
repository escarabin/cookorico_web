System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var JobService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            JobService = (function () {
                function JobService(http) {
                    this.http = http;
                    this.allJobsListingUrl = '/jobs/all';
                    this.showJobListingUrl = '/job/';
                    this.applyJobUrl = '/job/apply/';
                    this.user = JSON.parse(localStorage.getItem('user'));
                }
                /**
                 * Listing all jobs
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.getAllJobs = function () {
                    var __this = this;
                    return this.http.request(__this.allJobsListingUrl);
                };
                /**
                 * Returns specific job
                 * @param id
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.getJob = function (jobId) {
                    var __this = this;
                    return this.http.request(__this.showJobListingUrl + jobId);
                };
                /**
                 * Apply to a specific job
                 * @param jobId
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.apply = function (jobId, comment) {
                    var __this = this;
                    return this.http.request(__this.applyJobUrl + jobId + '/' + comment);
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
