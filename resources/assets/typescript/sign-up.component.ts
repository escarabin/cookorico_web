import { Component } from '@angular/core';

// Services
import { UserService } from './user.service';

@Component({
    providers: [UserService],
    inputs: ['clubId'],
    selector: 'club',
    templateUrl: '../templates/sign-up.component.html',
})

export class SignUpComponent {

}