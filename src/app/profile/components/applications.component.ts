import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'applications',
    templateUrl: '../../../templates/applications.component.html'
})

export class ApplicationsComponent {
    applications: any = [];
    statusId: number = 0;
    user: number;

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        __this.refreshApplications()
    }

    /**
     * Get applications count via status_id (sent, accepted, refused, archived)
     * @param statusId
     * @returns {number}
     */
    countApplicationsWithStatus(statusId: number) {
        let count = 0;
        for (let i = 0; i < this.applications.length; i++) {
            if (this.applications[i].status_id == statusId && !this.applications[i].archived) {
                count += 1;
            }
            if (this.applications[i].archived && statusId == 4) {
                count += 1;
            }
            if (statusId == 0 && !this.applications[i].archived) {
                count += 1;
            }
        }
        return count;
    }

    /**
     * Refresh items listing
     */
    refreshApplications() {
        let __this = this;

        this.userService.getApplications(this.user.id).subscribe((res: Response) => {
            __this.applications = res.json();
        });
    }

    /**
     * Archivate specific application
     * @param applicationId
     */
    archivateApplication(applicationId: number) {
        let __this = this;

        this.userService.archivateApplication(applicationId).subscribe((res: Response) => {
            __this.refreshApplications()

            __this.notificationService.show(
                new Notification('success', 'Cette candidature a bien été archivée')
            );
        });
    }
}