import { Component, ViewChild } from '@angular/core';
import { RouteParams }
    from '@angular/router-deprecated';

// Components
import { JobSearchResultsComponent } from './job-search-results.component'

@Component({
    providers: [JobSearchResultsComponent],
    templateUrl: '../templates/search.component.html',
    selector: 'search',
})

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