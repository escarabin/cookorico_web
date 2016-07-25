import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouteParams } from '@angular/router-deprecated';

// Services
import { JobService } from './../services/job.service';

// Components
import { JobPreviewComponent } from './job-preview.component';
import { CustomPaginationComponent } from './custom-pagination.component';

// Pagination
import {PaginatePipe,
    PaginationControlsCmp,
    PaginationService} from 'ng2-pagination';

@Component({
    selector: 'job-search-results',
    directives: [JobPreviewComponent,
                 PaginationControlsCmp,
                 CustomPaginationComponent],
    providers: [JobService, PaginationService],
    pipes: [PaginatePipe],
    templateUrl: '../templates/job-search-results.component.html',
})

export class JobSearchResultsComponent {
    jobs: any = [];
    searchParameters: any = [];

    constructor(private jobService: JobService,
                private routeParams: RouteParams) {
        let __this = this;

        this.searchParameters = routeParams.get('parameters');

        console.log('params', this.searchParameters);

        this.jobService.getAllJobs().subscribe((res: Response) => {
            __this.jobs = res.json();
        });
    }

    /**
     * Function called from search.component
     * after user changed the search parameters
     * @param searchParameters
     */
    updateSearchResults(searchParameters: any) {
        let __this = this;

        this.jobService.searchJobs(searchParameters).subscribe((res: Response) => {
            __this.jobs = res.json();
        });
    }
}