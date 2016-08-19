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
    placeId: string;
    jobNamingId: number;
    contractTypeId: number;
    studyLevelId: number;
    searchParameters: any = [];
    @ViewChild(JobSearchResultsComponent) jobSearchResults: JobSearchResultsComponent;

    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => {
            if (params) {
                this.placeId = params['placeId'];
                this.jobNamingId = parseInt(params['jobNamingId']);
                this.contractTypeId = parseInt(params['contractTypeId']);
                this.studyLevelId = parseInt(params['studyLevelId']);
            }
        });
    }

    updateSearchResults(parameters) {
        this.searchParameters = parameters;
        this.jobSearchResults.updateSearchResults(parameters);
    }
}