import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router-deprecated';
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

    login() {
        let __this = this;

        this.userService.login(__this.email, __this.password).subscribe((res:Response) => {
            if (res['_body']) {
                /**
                 * User is logged in
                 */
                let user = res.json();

                localStorage.setItem('user', JSON.stringify(user));

                __this.user = JSON.parse(localStorage.getItem('user'));

                __this.userSignedIn.emit(this.user);

                __this.notificationService.show(
                    new Notification('success', 'Vous êtes connecté')
                );

                console.log(user);

                /**
                 * Close the sign-in modal
                 */
                document.getElementById('close-sign-in-modal').click();
            }
            else {
                /**
                 * Credentials are not correct
                 */
                __this.notificationService.show(
                    new Notification('error', 'Vos identifiants semblent incorrects, merci de rééssayer')
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

    resetPassword() {
        this.userService.resetPassword().subscribe((res:Response) => {
            console.log(res.json());
        });
    }
}