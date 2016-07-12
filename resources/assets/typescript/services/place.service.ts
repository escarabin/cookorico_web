import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class PlaceService {
    savePlaceUrl = "/place/save";

    constructor(private http: Http) {

    }

    save(place) {
        var location = place['geometry']['location'];

        let types = place['types'];
        let typesString = "";

        for (let i = 0; i < types.length; i++) {
            typesString += types[i] + ',';
        }

        let completeUrl = this.savePlaceUrl +
                        '/' + place['place_id'] +
                        '/' + place['formatted_address'] +
                        '/' + place['address_components'][2]['long_name'] +
                        '/' + place['address_components'][6]['long_name'] +
                        '/' + location.lat() +
                        '/' + location.lng() +
                        '/' + typesString;

        return this.http.request(completeUrl);
    }
}