import { Component } from '@angular/core';
import { RouteParams, RouterLink }
    from '@angular/router-deprecated';

// Components
import { JobSearchBarComponent } from './job-search-bar.component'
import { JobSearchResultsComponent } from './job-search-results.component'
import { JobSearchSidebarComponent } from './job-search-sidebar.component'

@Component({
    directives: [JobSearchResultsComponent,
                 JobSearchSidebarComponent,
                 JobSearchBarComponent],
    templateUrl: '../templates/search.component.html',
    selector: 'search',
})

export class SearchComponent {
    constructor(private routeParams: RouteParams) {

    }
}