import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, RouterLink } from '@angular/router-deprecated';
import { Response } from '@angular/http';

import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap';

// Services
import { UserService } from './../services/user.service';
import { NotificationsService } from './../services/notification.service';

// Models
import { Notification } from './../models/notification';


@Component({
    templateUrl: '../templates/sign-in.component.html',
    selector: 'sign-in',

    providers: [UserService, NotificationsService],
    viewProviders:[BS_VIEW_PROVIDERS],
    directives: [RouterLink,
        MODAL_DIRECTIVES,
        CORE_DIRECTIVES]
})

export class SignInComponent {
    email: string;
    password: string;
    user: any;
    forgotPassword: boolean = false;
    loading: boolean = false;
    @Output() userSignedIn: EventEmitter = new EventEmitter();
    @Output() userSignedOut: EventEmitter = new EventEmitter();

    constructor (private userService: UserService,
                 private notificationService: NotificationsService,
                 private router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    login() {
        let __this = this;

        this.userService.login(__this.email, __this.password).subscribe((res:Response) => {
            if (res['_body']) {
                let user = res.json();

                // Logged in
                localStorage.setItem('user', JSON.stringify(user));

                __this.user = JSON.parse(localStorage.getItem('user'));

                __this.userSignedIn.emit(this.user);
            }
            else {
                __this.notificationService.show(
                    new Notification('error', 'Vos identifiants semblent incorrect, merci de rééssayer')
                );
            }
        });
    }

    logout() {
        localStorage.removeItem('user');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.router.navigate(['Home']);

        this.userSignedOut.emit('signing out');
    }
}