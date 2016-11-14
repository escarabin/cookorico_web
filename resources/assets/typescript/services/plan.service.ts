import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals');

@Injectable()
export class PlanService {
    savePaymentUrl = appGlobals.apiUrl + '/plan/payment/save';
    postId: number;
    postRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
    postRequestOptions = new RequestOptions({ headers: this.postRequestHeaders });

    constructor(private http: Http) {

    }

    /**
     * Save specific payment after validation
     * @returns {Observable<Response>}
     */
    savePayment(service: Object, ) {
        let requestBody = JSON.stringify({ service });

        return this.http.post(this.savePaymentUrl, requestBody, this.postRequestOptions);
    }
}