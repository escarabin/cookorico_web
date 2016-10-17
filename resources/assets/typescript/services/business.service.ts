import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import appGlobals = require('./../globals');

// Models
import { Business } from '../models/business';
import { Place } from '../models/place';

@Injectable()
export class BusinessService {
    createBusinessUrl = appGlobals.apiUrl + "/business/create";
    getBusinessUrl = appGlobals.apiUrl + "/business";
    getAllBusinessesUrl = appGlobals.apiUrl + "/businesses/all";
    postRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
    postRequestOptions = new RequestOptions({ headers: this.postRequestHeaders });

    constructor(private http: Http) {

    }

    /**
     * Create a new business with its related place
     * @param business
     * @param place
     * @returns {Observable<Response>}
     */
    create(business: Business, place: Place) {
        let requestBody = JSON.stringify({ business, place });

        return this.http.post(this.createBusinessUrl, requestBody, this.postRequestOptions);
    }

    /**
     * List all businesses
     * @returns {Observable<Response>}
     */
    getAll() {
        return this.http.request(this.getAllBusinessesUrl);
    }

    /**
     * Get specific business data from its id
     * @param businessId
     * @returns {Observable<Response>}
     */
    get(businessId: number) {
        return this.http.get(this.getBusinessUrl + '/' + businessId);
    }
}