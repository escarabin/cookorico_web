import { Component, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// Services
import { JobService } from '../../services/job.service';
import { SearchService } from '../../services/search.service';

// Pagination
import { PaginatePipe, PaginationService } from 'ng2-pagination';

@Component({
    selector: 'job-search-results',
    providers: [JobService, PaginationService],
    pipes: [PaginatePipe],
    templateUrl: '../templates/job-search-results.component.html',
})

export class JobSearchResultsComponent {
    jobs: any = [];
    studyLevelId: string;
    contractTypeId: string;
    jobNamingId: string;
    searchText: string;
    isMapModeEnabled: boolean = false;
    parametersList: any = [];

    /**
     * By default, populate place object with France coords
     */
    zoom: number = 6;
    mapLat: number = 46.227638;
    mapLng: number = 2.213749;

    constructor(private jobService: JobService,
                @Inject(SearchService) private searchService: SearchService,
                private route: ActivatedRoute) {
        let __this = this;

        route.params.subscribe(params => {
            if (params) {
                __this.studyLevelId = params['studyLevelId'];
                __this.contractTypeId = params['contractTypeId'];
                __this.jobNamingId = params['jobNamingId'];
                __this.searchText = params['searchText'];

                this.parametersList['contractTypeIdList'] = [ this.contractTypeId ];
                this.parametersList['jobNamingIdList'] = [ this.jobNamingId ];
                this.parametersList['studyLevelIdList'] = [ this.studyLevelId ];

                // TODO
                // SearchService.search(parametersArray);
            }
        });

        /**
         * Subscribe to new search parameters coming from search.service
         */

        searchService.parametersEmitter.subscribe((params) => {
            this.parametersList = params;
        });

        /**
         * Subscribe to new search results coming from search.service
         */
        searchService.resultsEmitter.subscribe((results) => {
            __this.jobs = results.json();
        });

        /**
         * Subscribe to map mode emitter
         */
        searchService.mapModeEmitter.subscribe((place) => {
            this.isMapModeEnabled = !this.isMapModeEnabled;

            this.parametersList['place'] = place;
            this.mapLat = place.geometry.location.lat;
            this.mapLng = place.geometry.location.lng;
            this.zoom = 8;
        });

        /**
         * Do initial search without params (getting all jobs)
         */
        searchService.search();
    }

    /**
     * Function used to flush place object and emit event to other components
     */
    resetPlace() {
        this.parametersList['place'] = null;
        this.searchService.search(this.parametersList);
    }

    /**
     * Function called from search.component
     * after user changed the search parameters
     * @param searchParameters
     */
    updateSearchResults(searchParameters: any) {
        let __this = this;

        __this.jobs = [];

        /*this.jobService.searchJobs(searchParameters).subscribe((res: Response) => {
            __this.jobs = res.json();
        });*/
    }
}