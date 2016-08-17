import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => {
            if (params) {
                this.placeId = parseInt(route['placeId']);
                this.jobNamingId = parseInt(route['jobNamingId']);
                this.contractTypeId = parseInt(route['contractTypeId']);
                this.searchText = route['searchText'];
            }
        });
    }

    updateSearchResults(parameters) {
        this.searchParameters = parameters;
        this.jobSearchResults.updateSearchResults(parameters);
    }
}