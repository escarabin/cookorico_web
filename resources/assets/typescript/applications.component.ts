import { Component } from '@angular/core';
import { Response } from '@angular/http'

// Services
import { UserService } from './user.service';

@Component({
    selector: 'applications',
    providers: [UserService],
    templateUrl: '../templates/applications.component.html',
})

export class ApplicationsComponent {
    applications: any;

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getApplications().subscribe((res: Response) => {
            __this.applications = res.json();
        });
    }
}