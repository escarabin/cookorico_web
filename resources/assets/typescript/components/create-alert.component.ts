import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';

@Component({
    selector: 'create-alert',
    providers: [ReferenceService, UserService],
    directives: [RouterLink],
    templateUrl: '../templates/create-alert.component.html'
})

export class CreateAlertComponent {
    jobNamings: any;

    // Form data
    jobNamingId: string;
    title: string;
    place: string;

    constructor(private referenceService: ReferenceService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        })
    }

    submitAlert() {
        let __this = this;

    }
}