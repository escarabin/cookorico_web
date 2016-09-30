System.register(['@angular/core', '@angular/router', '../../services/mail.service', '../../models/mail-template', '../../models/user', '../../models/business', './../../components/tiny-mce.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, mail_service_1, mail_template_1, user_1, business_1, tiny_mce_component_1;
    var CreateMailTemplateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mail_service_1_1) {
                mail_service_1 = mail_service_1_1;
            },
            function (mail_template_1_1) {
                mail_template_1 = mail_template_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (business_1_1) {
                business_1 = business_1_1;
            },
            function (tiny_mce_component_1_1) {
                tiny_mce_component_1 = tiny_mce_component_1_1;
            }],
        execute: function() {
            CreateMailTemplateComponent = (function () {
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
                            __this.mailTemplate.id = params["templateId"];
                            if (__this.mailTemplate.id) {
                                // Editing a specific item, let's retrieve it's data
                                __this.mailService.getTemplate(__this.mailTemplate.id).subscribe(function (res) {
                                    __this.mailTemplate = res.json();
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
                    this.mailTemplate.message += '{{ ' + propertyType + '.' + propertyKey + ' }}';
                    this.mceEditor.mceContent = this.mailTemplate.message;
                };
                __decorate([
                    core_1.ViewChild('mce-editor'), 
                    __metadata('design:type', (typeof (_a = typeof tiny_mce_component_1.UNITYTinyMCE !== 'undefined' && tiny_mce_component_1.UNITYTinyMCE) === 'function' && _a) || Object)
                ], CreateMailTemplateComponent.prototype, "mceEditor", void 0);
                CreateMailTemplateComponent = __decorate([
                    core_1.Component({
                        selector: 'create-mail-template',
                        providers: [mail_service_1.MailService],
                        templateUrl: '../templates/create-mail-template.component.html'
                    }), 
                    __metadata('design:paramtypes', [mail_service_1.MailService, router_1.ActivatedRoute])
                ], CreateMailTemplateComponent);
                return CreateMailTemplateComponent;
                var _a;
            }());
            exports_1("CreateMailTemplateComponent", CreateMailTemplateComponent);
        }
    }
});
