import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink, RouteParams } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';

// Models
import { Alert } from './../models/alert'

@Component({
    selector: 'create-alert',
    providers: [ReferenceService, UserService],
    directives: [RouterLink],
    templateUrl: '../templates/create-alert.component.html'
})

export class CreateAlertComponent {
    jobNamings: any;
    alertFrequencies: any;
    alertId: number;
    alert = new Alert('', '', '', '');

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private routeParams: RouteParams) {
        let __this = this;

        this.alertId = routeParams.get("alertId");

        if (this.alertId) {
            // Editing a specific alert, let's retrieve it's data
            this.userService.getAlert(__this.alertId).subscribe((res: Response) => {
                __this.alert = res.json();
            });
        }

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        });

        this.referenceService.getAllAlertFrequencies().subscribe((res: Response) => {
            __this.alertFrequencies = res.json();
        });
    }

    createAlert() {
        let __this = this;

        this.userService.createAlert(__this.alert).subscribe((res: Response) => {
            console.log(res.json());
        })
    }

    saveAlertChanges() {

    }
}