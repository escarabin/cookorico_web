"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// Services
var job_service_1 = require('./../services/job.service');
// Components
var job_search_sidebar_component_1 = require('./job-search-sidebar.component.ts');
var new_application_form_component_1 = require('./new-application-form.component.ts');
var JobComponent = (function () {
    function JobComponent(routeParams, jobService) {
        this.routeParams = routeParams;
        this.jobService = jobService;
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.jobId = routeParams.get("jobId");
        jobService.getJob(__this.jobId).subscribe(function (res) {
            __this.job = res.json();
        });
    }
    JobComponent = __decorate([
        core_1.Component({
            providers: [job_service_1.JobService],
            directives: [router_deprecated_1.RouterLink,
                job_search_sidebar_component_1.JobSearchSidebarComponent,
                new_application_form_component_1.NewApplicationFormComponent],
            inputs: ['jobId'],
            selector: 'job',
            templateUrl: '../templates/job.component.html',
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, job_service_1.JobService])
    ], JobComponent);
    return JobComponent;
}());
exports.JobComponent = JobComponent;
//# sourceMappingURL=job.component.js.map