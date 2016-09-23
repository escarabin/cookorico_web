System.register(['@angular/router', './components/search.component', './components/job-search-results.component', './components/new-application-form.component', './components/job.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, search_component_1, job_search_results_component_1, new_application_form_component_1, job_component_1;
    var jobSearchChildrenRouteList, jobSearchRoutes, jobSearchRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
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
            jobSearchChildrenRouteList = [
                { path: 'tous-les-emplois', component: job_search_results_component_1.JobSearchResultsComponent },
                { path: ':placeId/:jobNamingId/:contractTypeId/:studyLevelId', component: job_search_results_component_1.JobSearchResultsComponent },
                { path: 'candidater/:jobId', component: new_application_form_component_1.NewApplicationFormComponent },
                { path: 'annonce/:jobId', component: job_component_1.JobComponent },
                {
                    path: '',
                    component: job_search_results_component_1.JobSearchResultsComponent
                }
            ];
            jobSearchRoutes = [
                {
                    path: '',
                    component: search_component_1.SearchComponent,
                    children: jobSearchChildrenRouteList
                }
            ];
            // - Updated Export
            exports_1("jobSearchRouting", jobSearchRouting = router_1.RouterModule.forChild(jobSearchRoutes));
        }
    }
});
