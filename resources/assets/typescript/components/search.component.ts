import { Component } from '@angular/core';
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
    stateId: number;
    jobNamingId: number;
    contractTypeId: number;
    searchText: string;

    constructor(private routeParams: RouteParams) {
        this.stateId = routeParams.get('stateId');
        this.jobNamingId = routeParams.get('jobNamingId');
        this.contractTypeId = routeParams.get('contractTypeId');
        this.searchText = routeParams.get('searchText');

        console.log('state id is ' + this.stateId);
    }
}