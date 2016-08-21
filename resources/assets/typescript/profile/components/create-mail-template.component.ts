import { Component, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// Services
import { MailService } from '../../services/mail.service';

// Models
import { MailTemplate } from '../../models/mail-template';
import { User } from '../../models/user';
import { Business } from '../../models/business';

import { UNITYTinyMCE } from './../../components/tiny-mce.component';

@Component({
    selector: 'create-mail-template',
    providers: [MailService],
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
                private route: ActivatedRoute) {
        this.userKeys = Object.keys(this.user);
        this.businessKeys = Object.keys(this.business);

        let __this = this;

        route.params.subscribe(params => {
            if (params) {
                __this.mailTemplate.id = params["mailTemplateId"];

                if (__this.mailTemplate.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.mailService.getTemplate(__this.mailTemplate.id).subscribe((res: Response) => {
                        __this.mailTemplate = res.json();

                        console.log('mail template is', __this.mailTemplate);
                    });
                }
            }
        });
    }

    submitMailTemplate() {
        this.mailService.editTemplate(this.mailTemplate).subscribe((res:Response) => {
            console.log(res.json());
        });
    }

    contentChanged(newContent) {
        this.mailTemplate.message = newContent;
    }

    addPropertyToContent(propertyType: string, propertyKey: string) {
        this.mailTemplate.message += '{{ ' + propertyType + '.' + propertyKey + ' }}';
        this.mceEditor.mceContent = this.mailTemplate.message;
    }
}