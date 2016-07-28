import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, RequestOptions, Headers } from '@angular/http';
import appGlobals = require('./../globals'); //<==== this one

// Models
import { Business } from './../models/business';

@Injectable()
export class BusinessService {
    createBusinessUrl = appGlobals.apiUrl + "/business/create/";
    getAllBusinessesUrl = appGlobals.apiUrl + "/businesses/all";
    postRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
    postRequestOptions = new RequestOptions({ headers: this.postRequestHeaders });

    constructor(private http: Http) {

    }

    create(business: Business) {
        let __this = this;

        let requestBody = JSON.stringify({ business });

        return this.http.post(__this.createBusinessUrl, requestBody, this.postRequestOptions);
    }

    getAll() {
        return this.http.request(this.getAllBusinessesUrl);
    }
}