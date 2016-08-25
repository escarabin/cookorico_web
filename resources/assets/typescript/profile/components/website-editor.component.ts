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
    constructor() {

    }

    homePromoChanged(newPromoContent) {

    }
}