import { Component } from '@angular/core';

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
        this.applications = this.userService.getApplications();
    }
}