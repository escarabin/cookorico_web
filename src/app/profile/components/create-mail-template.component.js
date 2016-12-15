"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var mail_template_1 = require('../../models/mail-template');
var user_1 = require('../../models/user');
var business_1 = require('../../models/business');
var CreateMailTemplateComponent = (function () {
    function CreateMailTemplateComponent(mailService, route) {
        this.mailService = mailService;
        this.route = route;
        this.mailTemplate = new mail_template_1.MailTemplate();
        this.business = new business_1.Business();
        this.user = new user_1.User();
        this.userKeys = Object.keys(this.user);
        this.businessKeys = Object.keys(this.business);
        var __this = this;
        route.params.subscribe(function (params) {
            if (params) {
                console.log(params);
                __this.mailTemplate.id = params["templateId"];
                if (__this.mailTemplate.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.mailService.getTemplate(__this.mailTemplate.id).subscribe(function (res) {
                        __this.mailTemplate = res.json();
                        console.log('mail template is', __this.mailTemplate);
                    });
                }
            }
        });
    }
    CreateMailTemplateComponent.prototype.submitMailTemplate = function () {
        this.mailService.editTemplate(this.mailTemplate).subscribe(function (res) {
            console.log(res.json());
        });
    };
    CreateMailTemplateComponent.prototype.contentChanged = function (newContent) {
        this.mailTemplate.message = newContent;
    };
    CreateMailTemplateComponent.prototype.addPropertyToContent = function (propertyType, propertyKey) {
        var subject = this.mailTemplate.subject;
        var __this = this;
        this.mailTemplate.subject = null;
        this.mailTemplate.message += '{{ $' + propertyType + '->' + propertyKey + ' }}';
        setTimeout(function () {
            __this.mailTemplate.subject = subject;
        }, 50);
    };
    __decorate([
        core_1.ViewChild('mce-editor')
    ], CreateMailTemplateComponent.prototype, "mceEditor");
    CreateMailTemplateComponent = __decorate([
        core_1.Component({
            selector: 'create-mail-template',
            templateUrl: '../../../templates/create-mail-template.component.html'
        })
    ], CreateMailTemplateComponent);
    return CreateMailTemplateComponent;
}());
exports.CreateMailTemplateComponent = CreateMailTemplateComponent;
