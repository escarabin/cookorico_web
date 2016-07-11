import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class BusinessService {
    createBusinessUrl = "/business/create/";

    constructor(private http: Http) {

    }

    create(name, lat, lon, adress, postalCode, city, website, typeId, phone, email, description) {
        console.log('creating business');

        let completeUrl = this.createBusinessUrl +
            name + '/' +
            lat + '/' +
            lon + '/' +
            adress + '/' +
            postalCode + '/' +
            city + '/' +
            website + '/' +
            typeId + '/' +
            phone + '/' +
            email + '/' +
            description;

        return this.http.request(completeUrl);
    }
}