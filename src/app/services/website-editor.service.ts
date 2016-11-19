import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import { apiUrl } from '../globals';

// Models
import { Option } from '../models/option';

@Injectable()
export class WebsiteEditorService {
    saveOptionUrl = apiUrl + "/option/save";
    getTrafficDrivenCatsUrl = apiUrl + "/website_editor/traffic_cats";
    saveTrafficDrivenCatsUrl = apiUrl + "/website_editor/save_traffic_cats";

    constructor(private http: Http) {

    }

    /**
     * Save an option value
     * @param Option
     * @returns {any}
     */
    saveOption(option: Option) {
        let body = JSON.stringify({ option });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.saveOptionUrl, body, options);
    }

    /**
     * Get traffic driven categories listing (SEO urls)
     * @returns {any}
     */
    getTraficDrivenCategories() {
        return this.http.get(this.getTrafficDrivenCatsUrl);
    }


    /**
     * Save traffic driven categories listing (SEO urls)
     * @returns {any}
     */
    saveTraficDrivenCategories(trafficDrivenCats: any) {
        let body = JSON.stringify({ trafficDrivenCats });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.saveTrafficDrivenCatsUrl, body, options);
    }
}