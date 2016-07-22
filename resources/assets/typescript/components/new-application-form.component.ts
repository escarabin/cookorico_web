import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouteParams, Response } from '@angular/router-deprecated'

// Services
import { JobService } from './../services/job.service';
import { NotificationsService } from './../services/notification.service';

// Directives
import { UNITYTinyMCE } from './tiny-mce.component';

// Models
import { Notification } from './../models/notification';

@Component({
    directives: [RouterLink, UNITYTinyMCE],
    providers: [JobService],
    selector: 'new-application-form',
    templateUrl: '../templates/new-application-form.component.html',
})

export class NewApplicationFormComponent {
    @Input jobId:string;
    comment: string;

    constructor(private routeParams: RouteParams,
                private jobService: JobService,
                private notificationService: NotificationsService,
                private router: Router) {
        this.jobId = routeParams.get("jobId");
    }

    submitApplication() {
        let __this = this;

        this.jobService.apply(__this.jobId, __this.comment).subscribe((res: Response) => {
             this.notificationService.show(
                new Notification('success', 'Votre candidature a bien été enregistrée')
             );

            this.router.navigate(['/Profile/Applications']);
        });
    }

    commentChanged(newComment) {
        this.comment = newComment;
    }
}