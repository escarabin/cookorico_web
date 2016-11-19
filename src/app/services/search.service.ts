import { Injectable, EventEmitter } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals');

// Services
import { JobService } from './../services/job.service';

@Injectable()
export class SearchService {
    parametersEmitter = new EventEmitter();
    resultsEmitter = new EventEmitter();
    mapModeEmitter = new EventEmitter();
    isMapModeEnabled: boolean = false;
    getSeoDataFromPathUrl = appGlobals.apiUrl + '/seo-route';

    constructor(private jobService: JobService,
                private http: Http) {
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
            console.log('[search-service] searching for jobs with params', params);

            /**
             * Search jobs via job-service & emit results
             */
            this.jobService.searchJobs(params).subscribe((results:Response) => {
                __this.resultsEmitter.emit(results);
            });
        }
        else {
            console.log('[search-service] getting all jobs');

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

    public getSeoDataFromPath(redirectionUrl: string) {
        let body = JSON.stringify({ redirectionUrl });

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.getSeoDataFromPathUrl, body, options);
    }
}