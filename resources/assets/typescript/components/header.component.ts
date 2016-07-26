import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, RouterLink } from '@angular/router-deprecated';
import { Response } from '@angular/http';

// Components
import { SignInComponent } from './sign-in.component';

// Models
import { User } from './../models/user';

@Component({
    templateUrl: '../templates/header.component.html',
    selector: 'header',
    directives: [RouterLink,
                 SignInComponent,
                 CORE_DIRECTIVES]
})

export class HeaderComponent {
    user: any;

    constructor (private router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    /**
     * Function triggered after sign-in-component.ts's
     * (userSignedIn) EventEmitter emitted something
     * @param user
     */
    handleUserSignedIn(user: User) {
        this.user = user;
    }

    /**
     * Function triggered after sign-in-component.ts's
     * (userSignedOut) EventEmitter emitted something
     * @param user
     */
    handleUserSignedOut(user: User) {
        this.user = null;
    }
}