import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { NotificationsService } from './../../services/notification.service';

// Models
import { Notification } from './../../models/notification';

// ng2-bootstrap necessary workaround (17/08/16)
import { ComponentsHelper } from
    'ng2-bootstrap/components/utils/components-helper.service';

@Component({
    templateUrl: '../../../templates/sign-in.component.html',
    selector: 'sign-in',
    viewProviders: [{provide: ComponentsHelper, useClass: ComponentsHelper}],
})

export class SignInComponent {
    email: string;
    password: string;
    forgotPassword: boolean = false;
    loading: boolean = false;
    @Output() userSignedIn: EventEmitter = new EventEmitter();
    @Output() userSignedOut: EventEmitter = new EventEmitter();
    @Input() user: any;
    @Input() isMobile: any;
    isMobileScreenWidth: boolean = false;

    constructor (private userService: UserService,
                 private notificationService: NotificationsService,
                 private router: Router) {
        /**
         * Detect at first if window width is mobile type
         */
        this.windowResize();
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

                __this.router.navigate(['/profil']);

                /**
                 * Close the sign-in modal
                 */
                let closeModalBtns = document.getElementsByClassName('close-sign-in-modal');

                for (let i = 0; i < closeModalBtns.length; i++) {
                    closeModalBtns[i].click();
                }
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

    public openSignInModal() {
        this.showModalBackdrop();
        document.getElementById("sign-in-modal").style.display = "block";
    }
    public hideSignInModal() {
        this.hideModalBackdrop();
        document.getElementById("sign-in-modal").style.display = "none";
    }
    public showModalBackdrop() {
        document.getElementById("modal-backdrop-replacement").style.display = "block";
    }
    public hideModalBackdrop() {
        document.getElementById("modal-backdrop-replacement").style.display = "none";
    }

    /**
     * Handle [ENTER] key press on login form
     * @param keyCode
     */
    keyPressHandler(keyCode: number) {
        if (keyCode == 13) {
            this.login();
        }
    }

    logout() {
        localStorage.removeItem('user');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.router.navigate(['/']);

        this.userSignedOut.emit('signing out');
    }

    resetPassword() {
        this.userService.resetPassword(this.email).subscribe((res:Response) => {
            if (res['_body'] == 'false') {
                this.notificationService.show(
                    new Notification('error', 'Aucun utilisateur n\'a été trouvé avec cette adresse')
                );
            }
            else {
                this.notificationService.show(
                    new Notification('success', 'Un email vient de vous être envoyé')
                );
            }

        });
    }

    windowResize() {
        if (window.innerWidth < 700) {
            this.isMobileScreenWidth = true;
        }
        else {
            this.isMobileScreenWidth = false;
        }
    }
}