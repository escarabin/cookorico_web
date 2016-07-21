import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, RouterLink } from '@angular/router-deprecated';
import { Response } from '@angular/http';

// Components
import { SignInComponent } from './sign-in.component';

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

    logout() {
        localStorage.removeItem('user');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.router.navigate(['Home']);
    }
}