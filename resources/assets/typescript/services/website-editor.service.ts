import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals');

// Models
import { Option } from '../models/option';

@Injectable()
export class WebsiteEditorService {
    saveOptionUrl = appGlobals.apiUrl + "/option/save";
    getTrafficDrivenCatsUrl = appGlobals.apiUrl + "/website_editor/traffic_cats";

    constructor(private http: Http) {

    }

    /**
     * Save an option value
     * @param Option
     * @returns {any}
     */
    saveOption(option: Option) {
        let __this = this;

        let body = JSON.stringify({ option });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(__this.saveOptionUrl, body, options);
    }

    /**
     * Get traffic driven categories listing (SEO urls)
     * @returns {any}
     */
    getTraficDrivenCategories() {
        return this.http.get(this.getTrafficDrivenCatsUrl);
    }
}