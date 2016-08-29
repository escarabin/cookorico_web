import { Component } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap';
import { Response } from '@angular/http';

// Services
import { WebsiteEditorService } from './../../services/website-editor.service';

@Component({
    selector: 'website-editor',
    directives: [ACCORDION_DIRECTIVES,
                 CORE_DIRECTIVES,
                 FORM_DIRECTIVES],
    templateUrl: '../templates/website-editor.component.html',
})

export class WebsiteEditorComponent {
    homePartnersIdList:any;
    homeBannerHtmlContent: string;

    constructor(private websiteEditorService: WebsiteEditorService) {

    }

    /**
     * Save home banner
     * @param newPromoContent
     */
    homePromoChanged(newPromoContent) {
        this.homeBannerHtmlContent = newPromoContent;
    }

    /**
     * Save partners displayed on home page
     */
    saveHomeBanner() {
        this.websiteEditorService.save('home_banner_content', this.homeBannerHtmlContent).subscribe((res: Response) => {
            console.log(res.json());
        });
    }

    /**
     * Save partners displayed on home page
     */
    saveHomePartners() {
        console.log('partners', this.homePartnersIdList);
    }

    /**
     * Triggered after a change on business-select
     * @param businessIdList
     */
    handleBusinessIdListChange(businessIdList) {
        this.homePartnersIdList = businessIdList;
    }
}