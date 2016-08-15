import { Component, Input } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { Response } from '@angular/http';

// Services
import { JobService } from './../services/job.service';
import { NotificationsService } from './../services/notification.service';
import { UserService } from './../services/user.service';

// Models
import { Notification } from './../models/notification';
import { Application } from './../models/application';

@Component({
    providers: [JobService, UserService],
    selector: 'new-application-form',
    templateUrl: '../templates/new-application-form.component.html',
    inputs: ['jobId']
})

export class NewApplicationFormComponent {
    @Input jobId:string;
    comment: string;
    application:Application = new Application();

    constructor(private routeParams: RouteParams,
                private jobService: JobService,
                private userService: UserService,
                private notificationService: NotificationsService,
                private router: Router) {
        this.jobId = routeParams.get("jobId");
        this.application.job_id = parseInt(this.jobId);

        let __this = this;

        this.userService.getApplications().subscribe((res: Response) => {
            if (res['_body']) {
                let applications = res.json();

                for (let i = 0; i < applications.length; i++) {
                    if (applications[i]['job_id'] == __this.jobId) {
                        console.log(applications[i]);
                        __this.application = applications[i];
                    }
                }
            }
        });
    }

    submitApplication() {
        let __this = this;

        this.jobService.apply(__this.application).subscribe((res: Response) => {
             this.notificationService.show(
                new Notification('success', 'Votre candidature a bien été enregistrée')
             );

            this.router.navigate(['/Profile/Applications']);
        });
    }

    commentChanged(newComment) {
        this.application.comment = newComment;
    }
}