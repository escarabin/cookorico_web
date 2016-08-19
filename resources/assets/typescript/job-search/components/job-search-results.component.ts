import { Component, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// Services
import { JobService } from '../../services/job.service';
import { SearchService } from '../../services/search.service';

// Pagination
import {PaginatePipe, PaginationService} from 'ng2-pagination';

@Component({
    selector: 'job-search-results',
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
                @Inject(SearchService) SearchService,
                private route: ActivatedRoute) {
        let __this = this;

        route.params.subscribe(params => {
            if (params) {
                __this.placeId = params['placeId'];
                __this.studyLevelId = params['studyLevelId'];
                __this.contractTypeId = params['contractTypeId'];
                __this.jobNamingId = params['jobNamingId'];
                __this.searchText = params['searchText'];

                SearchService.sendSearchParameters(
                    __this.placeId,
                    [__this.jobNamingId],
                    [__this.contractTypeId],
                    __this.studyLevelId)
            }
        });

        this.jobService.getAllJobs().subscribe((res: Response) => {
            __this.jobs = res.json();

            console.log(__this.jobs);
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