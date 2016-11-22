import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { apiUrl } from '../globals';

// Models
import { Business } from '../models/business';
import { Place } from '../models/place';

@Injectable()
export class BusinessService {
    createBusinessUrl = apiUrl + "/business/create";
    getBusinessUrl = apiUrl + "/business";
    getAllBusinessesUrl = apiUrl + "/businesses/all";
    detachUserUrl = apiUrl + "/business/detach-user";
    searchBusinessUrl = apiUrl + "/business/search";
    attachUserUrl = apiUrl + "/business/attach-user";
    postRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
    postRequestOptions = new RequestOptions({ headers: this.postRequestHeaders });

    constructor(private http: Http) {

    }

    /**
     * Create a new business with its related place
     * @param business
     * @param place
     * @param userId
     * @returns {Observable<Response>}
     */
    create(business: Business, place: Place, userId?: number) {
        let requestBody = JSON.stringify({ business, place });

        return this.http.post(this.createBusinessUrl + '/' + userId, requestBody, this.postRequestOptions);
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

    /**
     * Search for businesses by title
     * @param searchText
     */
    search(searchText: string) {
        return this.http.get(this.searchBusinessUrl + '/' + searchText);
    }

    /**
     * Attach user to specific business
     * @param userId
     * @param businessId
     */
    attachUser(userId: number, businessId: number) {
        return this.http.get(this.attachUserUrl + '/' + userId + '/' + businessId);
    }

    /**
     * Detach user to specific business
     * @param userId
     * @param businessId
     */
    detachUser(userId: number, businessId: number) {
        return this.http.get(this.detachUserUrl + '/' + userId + '/' + businessId);
    }
}