import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';

@Component({
    selector: 'applications',
    providers: [UserService],
    templateUrl: '../templates/applications.component.html'
})

export class ApplicationsComponent {
    applications: any = [];

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getApplications().subscribe((res: Response) => {
            __this.applications = res.json();

            console.log(__this.applications);
        });
    }

    countApplicationsWithStatus(statusId: number) {
        let count = 0;
        for (let i = 0; i < this.applications.length; i++) {
            console.log('difff', statusId, this.applications[i].status_id);

            if (this.applications[i].status_id == statusId) {
                count += 1;
            }
        }
        return count;
    }
}