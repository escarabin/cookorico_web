import { Component, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink, RouteParams } from '@angular/router-deprecated';

// Services
import { MailService } from './../services/mail.service';

// Models
import { MailTemplate } from './../models/mail-template';
import { User } from './../models/user';
import { Business } from './../models/business';

// Components
import { UNITYTinyMCE } from './tiny-mce.component';

@Component({
    selector: 'create-mail-template',
    providers: [MailService],
    directives: [RouterLink, UNITYTinyMCE],
    templateUrl: '../templates/create-mail-template.component.html'
})

export class CreateMailTemplateComponent {
    @ViewChild('mce-editor') mceEditor: UNITYTinyMCE;
    mailTemplate:MailTemplate = new MailTemplate();
    business:Business = new Business();
    user:User = new User();
    public userKeys;
    public businessKeys;

    constructor(private mailService: MailService,
                private routeParams: RouteParams) {
        this.userKeys = Object.keys(this.user);
        this.businessKeys = Object.keys(this.business);

        this.mailTemplate.id = parseInt(routeParams.get("templateId"));

        if (this.mailTemplate.id) {
            // Editing a specific mail template, let's retrieve it's data
            this.mailService.getTemplate(this.mailTemplate.id).subscribe((res: Response) => {
                this.mailTemplate = res.json();
            });
        }
    }

    submitMailTemplate() {
        console.log(this.mailTemplate);
    }

    contentChanged(newContent) {
        this.mailTemplate.content = newContent;
    }

    addPropertyToContent(propertyType: string, propertyKey: string) {
        this.mailTemplate.content += '{{ ' + propertyType + '.' + propertyKey + ' }}';
        this.mceEditor.mceContent = this.mailTemplate.content;
    }
}