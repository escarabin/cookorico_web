import { Component } from '@angular/core';

// Services
import { UserService } from './../services/user.service';

@Component({
    providers: [UserService],
    selector: 'sign-up',
    templateUrl: '../templates/sign-up.component.html',
})

export class SignUpComponent {
    password: string;
    email: string;
    userTypeId: number;

    constructor() {

    }
}