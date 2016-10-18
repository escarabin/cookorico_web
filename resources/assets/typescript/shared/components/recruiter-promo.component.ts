import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { NotificationsService } from './../../services/notification.service';

// Models
import { Notification } from './../../models/notification';

declare var braintree:any;

@Component({
    selector: 'recruiter-promo',
    providers: [ UserService ],
    templateUrl: '../templates/recruiter-promo.component.html'
})

export class RecruiterPromoComponent {
    userLastName: string;
    userFirstName: string;
    email: string;
    password: string;
    error: string;
    isAlreadySignedUp: boolean = false;

    constructor(private userService: UserService,
                private router: Router,
                private notificationService: NotificationsService) {

    }

    signUp() {
        let __this = this;

        this.userService.createUser(this.email, this.password, 2, this.userLastName, this.userFirstName).subscribe((res:Response) => {
            console.log(res);

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
                 * Navigate to business creation
                 */
                __this.router.navigate(['/profil/confirmer-le-compte/' + newUser['id']]);
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
}