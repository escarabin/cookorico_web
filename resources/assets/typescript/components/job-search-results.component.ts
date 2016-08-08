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
    placeId: string;
    studyLevelId: string;
    contractTypeId: string;
    jobNamingId: string;
    searchText: string;

    constructor(private jobService: JobService,
                private routeParams: RouteParams) {
        let __this = this;

        this.placeId = this.routeParams.get('placeId');
        this.studyLevelId = this.routeParams.get('studyLevelId');
        this.contractTypeId = this.routeParams.get('contractTypeId');
        this.jobNamingId = this.routeParams.get('jobNamingId');
        this.searchText = this.routeParams.get('searchText');

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

        console.log('params bitch ', searchParameters);

        __this.jobs = [];

        /*this.jobService.searchJobs(searchParameters).subscribe((res: Response) => {
            __this.jobs = res.json();
        });*/
    }
}