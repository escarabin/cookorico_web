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

        // Parse postal code
        let postalCode = "";
        if (place['address_components'][6]) {
            postalCode = place['address_components'][6]['long_name'];
        }
        else if (place['address_components'][5]) {
            postalCode = place['address_components'][5]['long_name'];
        }

        // Parse website
        let website = "";
        if (place['website']) {
            website = place['website'].replace(/\//g, '');
        }

        for (let i = 0; i < types.length; i++) {
            typesString += types[i] + ',';
        }

        let completeUrl = this.savePlaceUrl +
                        '/' + place['place_id'] +
                        '/' + place['formatted_address'] +
                        '/' + place['address_components'][2]['long_name'] +
                        '/' + postalCode +
                        '/' + location.lat() +
                        '/' + location.lng() +
                        '/' + typesString +
                        '/' + place['name'] +
                        '/' + place['phone'] +
                        '/' + website;

        return this.http.request(completeUrl);
    }
}