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

    /**
     * Open Sellsy contact box/popup
     */
    public openContactBox() {
        document.body.innerHTML += '<script type="application/javascript" src="https://www.sellsy.com/?_f=snippet&hash=JTdGJTI5JUZEJTIzJTI3JTNCNSVCOSVDNzZJVyUwMSU5MyVDRCUwRW4lRENDcyVFOSUwRiVGRDYlOEYlN0RsJUNCdiU5QnYlRkMlREVINWslRTYlRjd3JURFJUNCJTk0UjQ1JUMwb00lODglRDUlM0VSJUVDJUM1JThCJTNCVVZsJTE3JUI4JUI5ayU4Qw=="></script>';
    }
}