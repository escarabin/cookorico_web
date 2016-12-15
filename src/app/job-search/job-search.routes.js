"use strict";
var router_1 = require('@angular/router');
// Components
var search_component_1 = require('./components/search.component');
var job_search_results_component_1 = require('./components/job-search-results.component');
var new_application_form_component_1 = require('./components/new-application-form.component');
var job_component_1 = require('./components/job.component');
var jobSearchChildrenRouteList = [
    { path: 'tous-les-emplois', component: job_search_results_component_1.JobSearchResultsComponent,
        data: {
            meta: {
                title: 'Tous les emplois'
            }
        }
    },
    { path: ':placeId/:jobNamingId/:contractTypeId/:studyLevelId', component: job_search_results_component_1.JobSearchResultsComponent,
        data: {
            meta: {
                title: 'Recherche d\'emploi'
            }
        }
    },
    { path: 'candidater/:jobId', component: new_application_form_component_1.NewApplicationFormComponent },
    { path: 'annonce/:jobId', component: job_component_1.JobComponent },
    {
        path: '',
        component: job_search_results_component_1.JobSearchResultsComponent
    }
];
var jobSearchRoutes = [
    {
        path: '',
        component: search_component_1.SearchComponent,
        children: jobSearchChildrenRouteList
    }
];
// - Updated Export
exports.jobSearchRouting = router_1.RouterModule.forChild(jobSearchRoutes);
