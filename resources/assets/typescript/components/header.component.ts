import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, RouterLink } from '@angular/router-deprecated';
import { Response } from '@angular/http';

import { MODAL_DIRECTVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap';

// Services
import { UserService } from './../services/user.service'

@Component({
    templateUrl: '../templates/header.component.html',
    selector: 'header',
    providers: [UserService],
    viewProviders:[BS_VIEW_PROVIDERS],
    directives: [RouterLink,
                 MODAL_DIRECTVES,
                 CORE_DIRECTIVES]
})

export class HeaderComponent {
    email: string;
    password: string;
    user: any;
    forgotPassword: boolean = false;
    loading: boolean = false;

    constructor (private userService: UserService,
                 private router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    login() {
        let __this = this;

        this.userService.login(__this.email, __this.password).subscribe((res: Response) => {
            let user = res.json();

            if (res.json()) {
                // Logged in
                localStorage.setItem('user', JSON.stringify(user));
            }
            else {
                // Failed signing in, clear user object in localStorage
                localStorage.removeItem('user');
            }

            this.user = JSON.parse(localStorage.getItem('user'));
        });
    }

    logout() {
        localStorage.removeItem('user');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.router.navigate(['Home']);
    }
}