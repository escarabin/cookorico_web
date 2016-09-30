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
    mailTemplate: any = {};
    business:Business = new Business();
    user:User = new User();
    public userKeys;
    public businessKeys;
    isLoading: boolean = false;

    constructor(private mailService: MailService,
                private route: ActivatedRoute) {
        this.userKeys = Object.keys(this.user);
        this.businessKeys = Object.keys(this.business);
    }
     
     ngAfterViewInit() {
         let __this = this;
         
         this.route.params.subscribe(params => {
            if (params) {
                __this.mailTemplate.id = params["templateId"];

                if (__this.mailTemplate.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.mailService.getTemplate(__this.mailTemplate.id).subscribe((res: Response) => {
                        __this.mailTemplate = res.json();
                        
                        // __this.mceEditor.mceContent = __this.mailTemplate.message;
                    });
                }
            }
        });
     }

    submitMailTemplate() {
        this.isLoading = true;
        this.mailService.editTemplate(this.mailTemplate).subscribe((res:Response) => {
            this.isLoading = false;
        });
    }

    contentChanged(newContent) {
        this.mailTemplate.message = newContent;
    }

    addPropertyToContent(propertyType: string, propertyKey: string) {
        /**
            TODO: this is a workaround, we have to find another solution
            to update mailTemplate message inside tinyMCE editor
        */
        
        let mailSubject = this.mailTemplate.subject;
        
        this.mailTemplate.subject = null;
        
        this.mailTemplate.message += '{{ $' + propertyType + '->' + propertyKey + ' }}';
        // this.mceEditor.mceContent = this.mailTemplate.message;
        
        let __this = this;
        
        setTimeout(function() {
            __this.mailTemplate.subject = mailSubject;
        }, 5)
    }
}