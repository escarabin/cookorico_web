import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'ng2-meta';

// Services
import { JobService } from '../../services/job.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    inputs: ['jobId'],
    selector: 'job',
    templateUrl: '../../../templates/job.component.html',
})

export class JobComponent {
    job: any;
    user: any = {};
    jobId: number;

    constructor(private route: ActivatedRoute,
                private notificationService: NotificationsService,
                private router: Router,
                private metaService: MetaService,
                private jobService: JobService) {
        /**
         * Retrieve user Object
         * @type {any}
         */
        this.user = JSON.parse(localStorage.getItem('user'));

        /**
         * Get jobId from route params
         */
        route.params.subscribe(params => {
            if (params) {
                this.jobId = params["jobId"];
            }
        });

        /**
         * GET job data
         */
        jobService.getJob(this.jobId).subscribe((res: Response) => {
            this.job = res.json();

            this.metaService.setTitle(this.job.title + ' - ' + this.job.business.title);
            if (this.job.description) {
                this.metaService.setTag('description', this.job.description.replace(/<\/?[^>]+(>|$)/g, ""));
            }
        });
    }

    /**
     * Deactivate specific job post
     */
    deactivateJobPost() {
        this.jobService.deactivateJobPost(this.jobId).subscribe((res: Response) => {
            this.notificationService.show(
                new Notification('success', 'Votre offre a bien été désactivée')
            );

            this.router.navigate(['/profil/annonces']);
        });
    }
}