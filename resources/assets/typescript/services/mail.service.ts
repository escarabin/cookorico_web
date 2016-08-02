import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, RequestOptions, Headers } from '@angular/http';
import appGlobals = require('./../globals'); //<==== this one

// Models
import { MailTemplate } from './../models/mail-template';

@Injectable()
export class MailService {
    getTemplatesUrl = appGlobals.apiUrl + "/mail/templates/all";
    getTemplateUrl = appGlobals.apiUrl + "/mail/template";

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
}