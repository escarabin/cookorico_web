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
    user: any = [];

    jobPost:JobPost = new JobPost(null, '', '', null, null, null, null, null, null, null, null, null, null, '', '', false, false, false);
    userCanPostJob: boolean = false;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private jobPostService: JobPostService,
                private notificationService: NotificationsService,
                private route: ActivatedRoute,
                private router: Router) {
        let __this = this;

        /**
         * Scroll back to the top
         */
        window.scrollTo(0,0);

        this.user = JSON.parse(localStorage.getItem('user'));

        route.params.subscribe(params => {
            if (params) {
                __this.jobPost.id = params["jobPostId"];
                __this.jobPost.business_id = params["businessId"];

                if (__this.jobPost.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.jobPostService.get(__this.jobPost.id).subscribe((res: Response) => {
                        __this.jobPost = res.json();
                    });

                    /**
                     * If user is currently editing an existing job offer, let him do it
                     */
                    __this.userCanPostJob = true;
                }
            }
        });

        /**
         * If user is on the web site for the first time,
         * he can post a free job offer
         */
        if (!this.user.is_active) {
            __this.userCanPostJob = true;
        }

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

        this.jobPostService.save(__this.jobPost).subscribe((res: Response) => {
            let job = res['_body'];

            if (job) {
                if (__this.jobPost.id) {
                    __this.notificationService.show(
                        new Notification('success', 'Votre annonce a bien été mise à jour')
                    );
                }
                else {
                    __this.notificationService.show(
                        new Notification('success', 'Votre annonce est en cours de validation')
                    );
                }

                if (!__this.user['is_active']) {
                    __this.userService.activateAccount(__this.user.id).subscribe((res: Response) => {
                        __this.router.navigate(['/profil/annonces']);
                    });
                }
                else {
                    __this.router.navigate(['/profil/annonce/', { jobId: res.json()['id'] }]);
                }
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