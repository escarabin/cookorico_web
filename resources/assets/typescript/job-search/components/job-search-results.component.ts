import { Component, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// Services
import { SearchService } from '../../services/search.service';

// Pagination
import { PaginatePipe, PaginationService } from 'ng2-pagination';

@Component({
    selector: 'job-search-results',
    providers: [PaginationService],
    pipes: [PaginatePipe],
    templateUrl: '../templates/job-search-results.component.html',
})

export class JobSearchResultsComponent {
    jobs: any = [];
    xpLevelId: string;
    contractTypeId: string;
    jobNamingId: string;
    searchText: string;
    isMapModeEnabled: boolean = false;
    parametersList: any = [];
    placeId: string;

    /**
     * By default, populate place object with France coords
     */
    zoom: number = 6;
    mapLat: number = 46.227638;
    mapLng: number = 2.213749;

    constructor(@Inject(SearchService) private searchService: SearchService,
                private route: ActivatedRoute) {
        let __this = this;

        route.params.subscribe(params => {
            if (params) {
                __this.xpLevelId = params['xpLevelId'];
                __this.contractTypeId = params['contractTypeId'];
                __this.jobNamingId = params['jobNamingId'];
                __this.searchText = params['searchText'];
                __this.placeId = params['placeId'];

                this.parametersList['contractTypeIdList'] = [ this.contractTypeId ];
                this.parametersList['jobNamingIdList'] = [ this.jobNamingId ];
                this.parametersList['xpLevelIdList'] = [ this.xpLevelId ];

                /**
                 * Get google maps data from placeId using reverse geocoding API
                 */
                let geocoder = new google.maps.Geocoder;
                geocoder.geocode({'placeId': __this.placeId}, function(results) {
                    let place = results[0];

                    __this.parametersList['place'] = place;

                    searchService.search(__this.parametersList);
                });
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

            if (place) {
                this.parametersList['place'] = place;
                this.mapLat = place['geometry']['location'].lat();
                this.mapLng = place['geometry']['location'].lng();
                this.zoom = 8;
            }
        });

        /**
         * Do initial search without params (getting all jobs)
         * TODO: remove it
         */
        // searchService.search();
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