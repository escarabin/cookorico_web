import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class PlaceService {
    savePlaceUrl = "/place/save/";

    constructor(private http: Http) {

    }

    save(place) {


        let completeUrl = this.savePlaceUrl +
                        '/' + place['place_id'] +
                        '/' + place['formatted_adress'] +
                        '/' + place['city'] +
                        '/' + postalCode +
                        '/' + lat +
                        '/' + lon;

        return this.http.request(completeUrl);
    }
}