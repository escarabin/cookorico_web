import { Component, Input } from '@angular/core';

// Services
import { UserService } from './../../services/user.service';
import { NotificationsService } from './../../services/notification.service';

// ng2-bootstrap necessary workaround (17/08/16)
import { ComponentsHelper } from
    'ng2-bootstrap/components/utils/components-helper.service';

@Component({
    selector: 'recruiter-promo',
    providers: [ ComponentsHelper, UserService ],
    viewProviders: [{provide: ComponentsHelper, useClass: ComponentsHelper}],
    templateUrl: '../templates/recruiter-promo.component.html'
})

export class RecruiterPromoComponent {
    email: string;
    password: string;
    error: string;

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {

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