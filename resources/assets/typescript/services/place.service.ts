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

        // Parse city
        let city = "";
        if (place['address_components'][2]) {
            city = place['address_components'][2]['long_name'];
        }

        // Parse website
        let website = "";
        if (place['website']) {
            website = place['website'].replace(/\//g, '');
        }

        // Parse phone
        let phone = "";
        if (place['phone']) {
            phone = place['phone'];
        }

        for (let i = 0; i < types.length; i++) {
            typesString += types[i] + ',';
        }

        let completeUrl = this.savePlaceUrl +
                        '/' + place['place_id'] +
                        '/' + place['formatted_address'] +
                        '/' + location.lat() +
                        '/' + location.lng() +
                        '/' + place['geometry']['viewport']['f']['b'] +
                        '/' + place['geometry']['viewport']['b']['b'] +
                        '/' + place['geometry']['viewport']['f']['f'] +
                        '/' + place['geometry']['viewport']['b']['f'] +
                        '/' + typesString +
                        '/' + place['name'] +
                        '/' + phone +
                        '/' + website +
                        '/' + city +
                        '/' + postalCode;

        return this.http.request(completeUrl);
    }
}