System.register(['@angular/router', './components/job-search-results.component', './components/new-application-form.component', './components/job.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, job_search_results_component_1, new_application_form_component_1, job_component_1;
    var jobSearchRoutes, jobSearchRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (job_search_results_component_1_1) {
                job_search_results_component_1 = job_search_results_component_1_1;
            },
            function (new_application_form_component_1_1) {
                new_application_form_component_1 = new_application_form_component_1_1;
            },
            function (job_component_1_1) {
                job_component_1 = job_component_1_1;
            }],
        execute: function() {
            jobSearchRoutes = [
                { path: 'jobs/search/', name: 'ShowAllJobs', component: job_search_results_component_1.JobSearchResultsComponent, useAsDefault: true },
                { path: 'job/:jobId/', name: 'ShowJob', component: job_component_1.JobComponent },
                { path: 'jobs/search/:parameters',
                    name: 'SearchJobs', component: job_search_results_component_1.JobSearchResultsComponent },
                { path: 'apply/:jobId', name: 'Apply', component: new_application_form_component_1.NewApplicationFormComponent }
            ];
            // - Updated Export
            exports_1("jobSearchRouting", jobSearchRouting = router_1.RouterModule.forChild(jobSearchRoutes));
        }
    }
});
