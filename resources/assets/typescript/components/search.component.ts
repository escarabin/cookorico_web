import { Component, ViewChild } from '@angular/core';
import { RouteParams, RouterOutlet, RouteConfig }
    from '@angular/router-deprecated';

// Components
import { RightSidebarComponent } from './right-sidebar.component'
import { JobSearchResultsComponent } from './job-search-results.component'
import { JobSearchSidebarComponent } from './job-search-sidebar.component'
import { NewApplicationFormComponent } from './new-application-form.component';
import { JobComponent } from './job.component';

@Component({
    directives: [JobSearchSidebarComponent,
                 RightSidebarComponent,
                 JobSearchResultsComponent,
                 RouterOutlet],
    providers: [JobSearchResultsComponent],
    templateUrl: '../templates/search.component.html',
    selector: 'search',
})

/**
 * Search child routing
 */

@RouteConfig([
    { path: '/jobs/search/', name: 'ShowAllJobs', component: JobSearchResultsComponent, useAsDefault: true },
    { path: '/job/:jobId/', name: 'ShowJob', component: JobComponent },
    { path: '/jobs/search/:parameters',
        name: 'SearchJobs', component: JobSearchResultsComponent },
    { path: '/apply/:jobId', name: 'Apply', component: NewApplicationFormComponent }
])

export class SearchComponent {
    placeId: number;
    jobNamingId: number;
    contractTypeId: number;
    searchText: string;
    searchParameters: any = [];
    @ViewChild(JobSearchResultsComponent) jobSearchResults: JobSearchResultsComponent;

    constructor(private routeParams: RouteParams) {
        this.placeId = parseInt(routeParams.get('placeId'));
        this.jobNamingId = parseInt(routeParams.get('jobNamingId'));
        this.contractTypeId = parseInt(routeParams.get('contractTypeId'));
        this.searchText = routeParams.get('searchText');
    }

    updateSearchResults(parameters) {
        this.searchParameters = parameters;

        this.jobSearchResults.updateSearchResults(parameters);
    }
}