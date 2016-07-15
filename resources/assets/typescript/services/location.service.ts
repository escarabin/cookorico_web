import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import http = require("request");

@Injectable()
export class LocationService {
    googlePlacesApiUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
    googlePlacesApiKey = "AIzaSyCHNaCGgnmz-39ECIEo65ozW96VJSIH9yI";
    googlePlacesApiSettings = "&types=geocode&language=fr";

    constructor(private http: Http) {

    }

    autocompleteAdress(adress) {
        let completeApiUrl = this.googlePlacesApiUrl +
            "?input=" + adress +
            this.googlePlacesApiSettings +
            '&key=' + this.googlePlacesApiKey;

        return this.http.request(completeApiUrl);
    }
}