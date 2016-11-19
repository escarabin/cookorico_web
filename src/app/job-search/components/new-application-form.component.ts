import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { JobService } from '../../services/job.service';
import { NotificationsService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';

// Models
import { Notification } from '../../models/notification';
import { Application } from '../../models/application';

@Component({
    selector: 'new-application-form',
    templateUrl: '../../../templates/new-application-form.component.html',
    inputs: ['jobId']
})

export class NewApplicationFormComponent {
    @Input jobId:string;
    comment: string;
    user: any = {};
    application:Application = new Application();
    isLoading: boolean = false;

    constructor(private route: ActivatedRoute,
                private jobService: JobService,
                private userService: UserService,
                private notificationService: NotificationsService,
                private router: Router) {

        route.params.subscribe(params => {
            if (params) {
                this.jobId = params["jobId"];
            }
        });

        this.application.job_id = parseInt(this.jobId);

        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        this.userService.getUserInfos(this.user.id).subscribe((res: Response) => {
            __this.user = res.json();
        });

        this.userService.getApplications(this.user.id).subscribe((res: Response) => {
            if (res['_body']) {
                let applications = res.json();

                for (let i = 0; i < applications.length; i++) {
                    if (applications[i]['job_id'] == __this.jobId) {
                        __this.application = applications[i];
                    }
                }
            }
        });
    }

    submitApplication() {
        let __this = this;
        this.isLoading = true;

        this.jobService.apply(__this.application).subscribe((res: Response) => {
            this.notificationService.show(
                new Notification('success', 'Votre candidature a bien été enregistrée')
            );

            this.isLoading = false;

            this.router.navigate(['/profil/candidatures']);
        });
    }

    commentChanged(newComment) {
        this.application.comment = newComment;
    }
}