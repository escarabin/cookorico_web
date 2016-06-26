import { Component } from '@angular/core';
import { RouteParams, RouterLink }
    from '@angular/router-deprecated';

// Components
import { JobSearchBarComponent } from './job-search-bar.component'
import { JobSearchResultsComponent } from './job-search-results.component'
import { UserSidebarComponent } from './user-sidebar.component'

@Component({
    directives: [JobSearchResultsComponent,
                 UserSidebarComponent,
                 JobSearchBarComponent],
    templateUrl: '../templates/search.component.html',
    selector: 'search',
})

export class SearchComponent {
    constructor(private routeParams: RouteParams) {

    }
}