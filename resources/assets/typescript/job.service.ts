import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class JobService {
    allJobsListingUrl = '/jobs/all';

    // Using Angular DI we use the HTTP service
    constructor(private http: Http) {

    }

    getAllJobs() {
        let __this = this;

        return this.http.request(__this.allJobsListingUrl);
    }
}