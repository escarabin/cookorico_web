import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { UserService } from './../../services/user.service';
import { NotificationsService } from './../../services/notification.service';

// Models
import { Notification } from './../../models/notification';

@Component({
    templateUrl: '../../../templates/define-new-password.component.html',
    selector: 'define-new-password',
})

export class DefineNewPasswordComponent {
    user: any = {};
    newPassword: string;

    constructor(private userService: UserService,
                private notificationService: NotificationsService,
                private router: Router,
                private route: ActivatedRoute) {
        let __this = this;

        route.params.subscribe(params => {
            if (params['userId']) {
                __this.userService.getUserInfos(params['userId']).subscribe((res:Response) => {
                    __this.user = res.json();

                    localStorage.setItem('user', JSON.stringify(__this.user));
                });
            }
        });
    }

    changePassword() {
        this.userService.changePassword('none', this.newPassword, this.user.id).subscribe((res:Response) => {
            this.notificationService.show(
                new Notification('success', 'Votre mot de passe a bien été modifié')
            );
        });
    }
}