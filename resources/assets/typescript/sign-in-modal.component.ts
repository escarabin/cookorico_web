import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { MODAL_DIRECTVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap';

@Component({
    templateUrl: '../templates/sign-in-modal.component.html',
    directives: [MODAL_DIRECTVES, CORE_DIRECTIVES],
    viewProviders:[BS_VIEW_PROVIDERS],
    selector: 'sign-in-modal',
})

export class SignInModalComponent {

}