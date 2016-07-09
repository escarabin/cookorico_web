import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class BusinessService {
    createBusinessUrl = "/business/create/";

    constructor(private http: Http) {

    }

    create(name, adress, postalCode, city, website, typeId, phone, email, description) {
        let completeUrl = this.createBusinessUrl + '/' +
            name + '/' +
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