import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals');

@Injectable()
export class PlaceService {
    savePlaceUrl = appGlobals.apiUrl + "/place/save";
    defaultPostRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
    defaultPostRequestOptions = new RequestOptions({ headers: this.defaultPostRequestHeaders });

    constructor(private http: Http) {

    }

    /**
     * Save a new place
     * @param place
     * @returns {Observable<Response>}
     */
    save(place: Object) {
        let requestBody = JSON.stringify({ place });

        return this.http.post(this.savePlaceUrl, requestBody, this.defaultPostRequestOptions);
    }
}