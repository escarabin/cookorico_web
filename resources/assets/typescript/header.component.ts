import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouterLink } from '@angular/router-deprecated';

import { MODAL_DIRECTVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap';

@Component({
    templateUrl: '../templates/header.component.html',
    selector: 'header',
    viewProviders:[BS_VIEW_PROVIDERS],
    directives: [RouterLink,
                 MODAL_DIRECTVES,
                 CORE_DIRECTIVES]
})

export class HeaderComponent {

}