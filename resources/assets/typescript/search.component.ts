import { Component } from '@angular/core';
import { RouteParams, RouterLink }
    from '@angular/router-deprecated';
import { JobSearchResultsComponent } from './job-search-results.component'
import { SidebarComponent } from './sidebar.component'

@Component({
    directives: [JobSearchResultsComponent,
                 SidebarComponent],
    templateUrl: '../templates/search.component.html',
    selector: 'search',
})

export class SearchComponent {
    constructor(private routeParams: RouteParams) {

    }
}