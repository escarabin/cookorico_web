"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var globals_1 = require('../globals');
var MailService = (function () {
    function MailService(http) {
        this.http = http;
        this.getTemplatesUrl = globals_1.apiUrl + "/mail/templates/all";
        this.getTemplateUrl = globals_1.apiUrl + "/mail/template";
        this.editTemplateUrl = globals_1.apiUrl + "/mail/edit_template";
    }
    /**
     * Get specific mail template from given id
     * @param mailTemplateId
     * @returns {Observable<Response>}
     */
    MailService.prototype.getTemplate = function (mailTemplateId) {
        return this.http.request(this.getTemplateUrl + '/' + mailTemplateId);
    };
    /**
     * Get all mail templates
     * @returns {Observable<Response>}
     */
    MailService.prototype.getTemplates = function () {
        return this.http.request(this.getTemplatesUrl);
    };
    /**
     * Edit existing template
     * @param mailTemplate
     * @returns {Observable<Response>}
     */
    MailService.prototype.editTemplate = function (mailTemplate) {
        var body = JSON.stringify({ mailTemplate: mailTemplate });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.editTemplateUrl, body, options);
    };
    MailService = __decorate([
        core_1.Injectable()
    ], MailService);
    return MailService;
}());
exports.MailService = MailService;
