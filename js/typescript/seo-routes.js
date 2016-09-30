System.register(['./job-search/components/job-search-results.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var job_search_results_component_1;
    var seoJobSearchRoutes;
    return {
        setters:[
            function (job_search_results_component_1_1) {
                job_search_results_component_1 = job_search_results_component_1_1;
            }],
        execute: function() {
            exports_1("seoJobSearchRoutes", seoJobSearchRoutes = [{ path: 'ma-jolie-pizza',
                    redirectTo: '0/0/1/1',
                    component: job_search_results_component_1.JobSearchResultsComponent }]);
        }
    }
});
