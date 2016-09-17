import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ReferenceService } from '../../services/reference.service';
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Alert } from '../../models/alert';
import { Notification } from '../../models/notification';

@Component({
    selector: 'create-alert',
    providers: [ReferenceService, UserService],
    templateUrl: '../templates/create-alert.component.html'
})

export class CreateAlertComponent {
    jobNamingGroups: any;
    alertFrequencies: any;
    alert:Alert = new Alert();
    isLoading: boolean = false;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private notificationService: NotificationsService,
                private router: Router,
                private route: ActivatedRoute) {
        let __this = this;

        route.params.subscribe(params => {
            if (params) {
                __this.alert.id = params["alertId"];

                if (__this.alert.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.userService.getAlert(__this.alert.id).subscribe((res: Response) => {
                        __this.alert = res.json();
                    });
                }
            }
        });

        this.referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            __this.jobNamingGroups = res.json();
        });

        this.referenceService.getAllAlertFrequencies().subscribe((res: Response) => {
            __this.alertFrequencies = res.json();
        });
    }

    submitAlert() {
        this.isLoading = true;
        let __this = this;

        if (!this.alert.id) {
            this.userService.createAlert(__this.alert).subscribe((res: Response) => {
                if (res['_body']) {
                    __this.notificationService.show(
                        new Notification('success', 'Votre alerte a bien été créee')
                    );

                    // Redirect to experience edition
                    this.router.navigate(['/Profile/EditAlert', { alertId: res.json()['id'] }])
                }
                else {
                    __this.notificationService.show(
                        new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                    );
                }
                this.isLoading = false;
            });
        }
        else {
            this.userService.updateAlert(__this.alert).subscribe((res: Response) => {
                if (res['_body']) {
                    console.log('alert has been created');
                    __this.notificationService.show(
                        new Notification('success', 'Vos modifications ont bien été enregistrées')
                    );
                }
                else {
                    console.log('error in alert creation');
                    __this.notificationService.show(
                        new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                    );
                }
                this.isLoading = false;
            });
        }
    }
}