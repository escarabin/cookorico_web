import { Component } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap';

// Wysiwyg
import { UNITYTinyMCE } from './tiny-mce.component';

@Component({
    selector: 'edit-website',
    directives: [ACCORDION_DIRECTIVES,
                 CORE_DIRECTIVES,
                 FORM_DIRECTIVES,
                 UNITYTinyMCE],
    templateUrl: '../templates/edit-website.component.html',
})

export class EditWebsiteComponent {
    constructor() {

    }

    homePromoChanged(newPromoContent) {

    }
}