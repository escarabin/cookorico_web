import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { UserService } from './../services/user.service';
import { NotificationsService } from './../services/notification.service';

// Models
import { Notification } from './../models/notification';


@Component({
    templateUrl: '../templates/sign-in.component.html',
    selector: 'sign-in',
    providers: [UserService],
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
}