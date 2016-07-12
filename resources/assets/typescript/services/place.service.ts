import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class PlaceService {
    savePlaceUrl = "/place/save/";

    constructor(private http: Http) {

    }

    save(googlePlaceId, adress, city, postalCode, lat, lon) {
        let completeUrl = this.savePlaceUrl +
                        '/' + googlePlaceId +
                        '/' + adress +
                        '/' + city +
                        '/' + postalCode +
                        '/' + lat +
                        '/' + lon;

        return this.http.request(completeUrl);
    }
}