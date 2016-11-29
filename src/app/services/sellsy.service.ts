import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { apiUrl } from '../globals';

@Injectable()
export class SellsyService {
    getServicesUrl = apiUrl + '/sellsy/services/all';

    constructor(private http: Http) {

    }

    /**
     * Get all sellsy services (aka "Packs")
     */
    public getServices() {
        return this.http.request(this.getServicesUrl);
    }

    /**
     * Open Sellsy contact box/popup
     */
    public openContactBox() {
        document.getElementById('sellsy_snippet').getElementsByClassName('sellsy-header')[0].click();
    }
}