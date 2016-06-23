import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

// Components
import { SignInModalComponent } from './sign-in-modal.component';

@Component({
    templateUrl: '../templates/header.component.html',
    selector: 'header',
    directives: [RouterLink,
                 SignInModalComponent]
})

export class HeaderComponent {

}