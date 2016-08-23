import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import appGlobals = require('./../globals'); //<==== this one

// Models
import { MailTemplate } from '../models/mail-template';

@Injectable()
export class MailService {
    getTemplatesUrl = appGlobals.apiUrl + "/mail/templates/all";
    getTemplateUrl = appGlobals.apiUrl + "/mail/template";
    editTemplateUrl = appGlobals.apiUrl + "/mail/edit_template";

    constructor(private http: Http) {

    }

    /**
     * Get specific mail template from given id
     * @param mailTemplateId
     * @returns {Observable<Response>}
     */
    getTemplate(mailTemplateId: number) {
        return this.http.request(this.getTemplateUrl + '/' + mailTemplateId);
    }

    /**
     * Get all mail templates
     * @returns {Observable<Response>}
     */
    getTemplates() {
        return this.http.request(this.getTemplatesUrl);
    }

    /**
     * Edit existing template
     * @param mailTemplate
     * @returns {Observable<Response>}
     */
    editTemplate(mailTemplate: MailTemplate) {
        let body = JSON.stringify({ mailTemplate });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.editTemplateUrl, body, options);
    }
}