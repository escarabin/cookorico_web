import { Component, ViewChild } from '@angular/core';
import { RouteParams, RouterLink }
    from '@angular/router-deprecated';

// Components
import { RightSidebarComponent } from './right-sidebar.component'
import { JobSearchBarComponent } from './job-search-bar.component'
import { JobSearchResultsComponent } from './job-search-results.component'
import { JobSearchSidebarComponent } from './job-search-sidebar.component'

@Component({
    directives: [JobSearchResultsComponent,
                 JobSearchSidebarComponent,
                 JobSearchBarComponent,
                 RightSidebarComponent ],
    templateUrl: '../templates/search.component.html',
    selector: 'search',
})

export class SearchComponent {
    @ViewChild(JobSearchResultsComponent) searchResults:JobSearchResultsComponent;
    placeId: number;
    jobNamingId: number;
    contractTypeId: number;
    searchText: string;
    searchParameters: any = [];

    constructor(private routeParams: RouteParams) {
        this.placeId = parseInt(routeParams.get('placeId'));
        this.jobNamingId = parseInt(routeParams.get('jobNamingId'));
        this.contractTypeId = parseInt(routeParams.get('contractTypeId'));
        this.searchText = routeParams.get('searchText');
    }

    updateSearchResults($event) {
        this.searchResults.updateSearchResults($event);
    }
}