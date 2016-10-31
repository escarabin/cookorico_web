import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import appGlobals = require('./../globals');

@Injectable()
export class ApplicationService {
    acceptApplicationUrl = appGlobals.apiUrl + "/application/accept";
    rejectApplicationUrl = appGlobals.apiUrl + "/application/reject";

    constructor(private http: Http) {

    }

    /**
     * Rejects specific application
     * @param applicationId
     */
    accept(applicationId: number) {
        return this.http.request(this.acceptApplicationUrl + '/' + applicationId);
    }

    /**
     * Rejects specific application
     * @param applicationId
     */
    reject(applicationId: number) {
        return this.http.request(this.rejectApplicationUrl + '/' + applicationId);
    }
}