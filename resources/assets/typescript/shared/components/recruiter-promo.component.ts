import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { NotificationsService } from './../../services/notification.service';
import { ReferenceService } from './../../services/reference.service';

// Models
import { Notification } from './../../models/notification';

declare var braintree:any;

@Component({
    selector: 'recruiter-promo',
    providers: [ UserService, ReferenceService ],
    templateUrl: '../templates/recruiter-promo.component.html'
})

export class RecruiterPromoComponent {
    userLastName: string;
    userFirstName: string;
    userCivilityId: number = 1;
    civilities: any = [];
    email: string;
    password: string;
    error: string;
    businesses: any = [];
    isAlreadySignedUp: boolean = false;

    constructor(private userService: UserService,
                private router: Router,
                private notificationService: NotificationsService,
                private referenceService: ReferenceService) {
        this.referenceService.getAllCivilities().subscribe((res:Response) => {
            this.civilities = res.json();
        });
    }

    signUp() {
        let __this = this;

        let userTypeId = 2;

        this.userService.createUser(this.email,
                                    this.password,
                                    userTypeId,
                                    this.userLastName,
                                    this.userFirstName,
                                    this.userCivilityId).subscribe((res:Response) => {
            if (res['_body'].length > 100) {
                /**
                 * User account successfully created
                 */
                __this.error = null;

                __this.notificationService.show(
                    new Notification('success', "Votre compte a bien été crée, plus qu'une étape avant de pouvoir l'utiliser !")
                );

                console.log(res['_body']);

                let newUser = res.json();

                /**
                 * Navigate to business creation after confirming account
                 */
                this.userService.confirmEmailAddress(newUser.id).subscribe((res:Response) => {
                    __this.userService.loginUsingId(newUser.id).subscribe((userInfos:Response) => {
                        localStorage.setItem('user', JSON.stringify(newUser));

                        if (newUser.user_type_id == 2) {
                            this.router.navigate(['/profil/etablissement/creer']);
                        }
                    });
                });
            }
            else {
                /**
                 * Something not supposed to happen actually happened
                 * "Oh my..."
                 */
                __this.error = res['_body'];

                __this.notificationService.show(
                    new Notification('error', __this.error)
                );
            }
        });
    }

    /**
     * Scroll to top of + focus to sign-up form
     */
    initSignUp() {
        document.getElementById("userLastName").focus();
        window.scrollTo(0, 0);
    }
}