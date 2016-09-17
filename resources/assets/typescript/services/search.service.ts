import { Injectable, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { JobService } from './../services/job.service';

@Injectable()
export class SearchService {
    parametersEmitter = new EventEmitter();
    resultsEmitter = new EventEmitter();
    mapModeEmitter = new EventEmitter();
    isMapModeEnabled: boolean = false;

    constructor(private jobService: JobService) {
        this.parametersEmitter = new EventEmitter();
        this.resultsEmitter = new EventEmitter();
        this.mapModeEmitter = new EventEmitter();
    }

    public search(params: any){
        let __this = this;

        /**
         * Emit search parameters to other subscribed components
         */
        if (params) {
            this.parametersEmitter.emit(params);

            /**
             * Search jobs via job-service & emit results
             */
            this.jobService.searchJobs(params).subscribe((results:Response) => {
                __this.resultsEmitter.emit(results);
            });
        }
        else {
            /**
             * Get all jobs via job-service & emit results
             */
            this.jobService.getAllJobs().subscribe((results:Response) => {
                __this.resultsEmitter.emit(results);
            });
        }
    }

    public toggleMapSearch(place: Object) {
        this.isMapModeEnabled = !this.isMapModeEnabled;

        this.mapModeEmitter.emit(place);
    }
}