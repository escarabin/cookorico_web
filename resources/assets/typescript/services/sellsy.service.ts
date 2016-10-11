import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import appGlobals = require('./../globals');

@Injectable()
export class SellsyService {
    getServicesUrl = appGlobals.apiUrl + '/sellsy/services/all';

    constructor(private http: Http) {

    }

    /**
     * Get all sellsy services (aka "Packs")
     */
    public getServices() {
        return this.http.request(this.getServicesUrl);
    }
}