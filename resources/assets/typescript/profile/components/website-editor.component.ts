import { Component } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap';

@Component({
    selector: 'website-editor',
    directives: [ACCORDION_DIRECTIVES,
                 CORE_DIRECTIVES,
                 FORM_DIRECTIVES],
    templateUrl: '../templates/website-editor.component.html',
})

export class WebsiteEditorComponent {
    homePartnersIdList:any;

    constructor() {

    }

    /**
     * Save home banner
     * @param newPromoContent
     */
    homePromoChanged(newPromoContent) {

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