import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals');

// Models
import { Place } from '../models/place';

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
    save(place: Place) {
        let __this = this;

        let requestBody = JSON.stringify({ place });

        return this.http.post(__this.savePlaceUrl, requestBody, this.defaultPostRequestOptions);
    }
}