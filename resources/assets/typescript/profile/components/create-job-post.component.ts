import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ReferenceService } from '../../services/reference.service';
import { UserService } from '../../services/user.service';
import { JobPostService } from '../../services/job-post.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { JobPost } from '../../models/job-post';
import { Notification } from '../../models/notification';

@Component({
    selector: 'create-job-post',
    providers: [ReferenceService, UserService, JobPostService],
    templateUrl: '../templates/create-job-post.component.html'
})

export class CreateJobPostComponent {
    diplomas: any = [];
    jobNamings: any = [];
    alertFrequencies: any = [];
    contractTypes: any = [];
    jobTypes: any = [];
    studyLevels: any = [];
    jobXpLevels: any = [];

    jobPost:JobPost = new JobPost();
    userCanPostJob: boolean = false;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private jobPostService: JobPostService,
                private notificationService: NotificationsService,
                private route: ActivatedRoute,
                private router: Router) {
        let __this = this;

        route.params.subscribe(params => {
            if (params) {
                __this.jobPost.id = params["jobPostId"];

                if (__this.jobPost.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.jobPostService.get(__this.jobPost.id).subscribe((res: Response) => {
                        __this.jobPost = res.json();
                    });
                }
            }
        });

        /**
         * Check if user is able to post a new job regarding credits amount on his account
         */
        this.userService.getPlans().subscribe((res: Response) => {
            let plans = res.json();
            for (let i = 0; i < plans.length; i++) {
                if (plans[i]['credits'] > 0) {
                    __this.userCanPostJob = true;
                }
            }
        });

        this.referenceService.getAllDiplomas().subscribe((res: Response) => {
            __this.diplomas = res.json();
        });

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        });

        this.referenceService.getAllAlertFrequencies().subscribe((res: Response) => {
            __this.alertFrequencies = res.json();
        });

        this.referenceService.getAllContractTypes().subscribe((res: Response) => {
            __this.contractTypes = res.json();
        });

        this.referenceService.getAllJobTypes().subscribe((res: Response) => {
            __this.jobTypes = res.json();
        });

        this.referenceService.getAllStudyLevels().subscribe((res: Response) => {
            __this.studyLevels = res.json();
        });

        this.referenceService.getAllJobXpLevels().subscribe((res: Response) => {
            __this.jobXpLevels = res.json();
        });
    }

    submitJobPost() {
        let __this = this;

        this.jobPostService.create(__this.jobPost).subscribe((res: Response) => {
            let job = res['_body'];

            if (job) {
                __this.notificationService.show(
                    new Notification('success', 'Votre annonce vient d\'être publiée')
                );

                __this.router.navigate(['/JobSearch/ShowJob', { jobId: res.json()['id'] }]);
            }
            else {
                __this.notificationService.show(
                    new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                );
            }
        });
    }

    handleBusinessIdChange(businessId) {
        this.jobPost.business_id = businessId;
    }

    jobDescriptionChanged(newDescription) {
        this.jobPost.description = newDescription;
    }
}