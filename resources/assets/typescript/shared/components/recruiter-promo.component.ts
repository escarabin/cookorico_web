import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { NotificationsService } from './../../services/notification.service';
import { SellsyService } from './../../services/sellsy.service';

// Models
import { Notification } from './../../models/notification';

@Component({
    selector: 'recruiter-promo',
    providers: [ UserService, SellsyService ],
    templateUrl: '../templates/recruiter-promo.component.html'
})

export class RecruiterPromoComponent {
    email: string;
    password: string;
    error: string;
    isAlreadySignedUp: boolean = false;
    services: any = [];

    constructor(private userService: UserService,
                private sellsyService: SellsyService,
                private notificationService: NotificationsService) {
        let __this = this;

        /**
         * Pupulate sellsy services array
         */
        sellsyService.getServices().subscribe((res:Response) => {
            let response = res['_body'];

            /**
             * Remove Sellsy request infos
             */
            response = response.split('<-- ')[1];
            __this.services = JSON.parse(response);
        });
    }

    submitEmailAndPassword() {
        let __this = this;

        this.userService.createUser(this.email, this.password, 2).subscribe((res:Response) => {
            if (res['_body'].length > 100) {
                /**
                 * User account successfully created
                 */
                __this.error = null;

                __this.notificationService.show(
                    new Notification('success', "Veuillez vérifier votre boite mail pour confirmer votre inscription !")
                );

                /**
                 * Close sign-up modal
                 */
                document.getElementById('close-sign-up-modal').click();
                this.isAlreadySignedUp = true;
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