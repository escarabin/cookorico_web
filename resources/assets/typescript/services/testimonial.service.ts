import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals');

@Injectable()
export class TestimonialService {
    requestTestimonialUrl = appGlobals.apiUrl + '/testimonial/request';

    constructor(private http: Http) {

    }

    /**
     * Request a testimonial as a candidate
     * @param businessId
     * @param experienceId
     * @returns {Observable<Response>}
     */
    requestTestimonial(businessId: number, experienceId: number) {
        return this.http.get(this.requestTestimonialUrl + '/' + businessId + '/' + experienceId);
    }
}