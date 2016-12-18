import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ReferenceService } from '../../services/reference.service';
import { UserService } from '../../services/user.service';
import { JobPostService } from '../../services/job-post.service';
import { NotificationsService } from '../../services/notification.service';
import { BusinessService } from '../../services/business.service';

// Models
import { JobPost } from '../../models/job-post';
import { Notification } from '../../models/notification';

@Component({
    selector: 'create-job-post',
    templateUrl: '../../../templates/create-job-post.component.html'
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
    businesses: any = [];
    jobPost:JobPost = new JobPost(null, '', '', null, null, null, null, null, null, null, null, 1, null, '', '', false, false, false);
    userCanPostJob: boolean = false;
    isLoading: boolean = false;
    showTinyMceEditor: boolean = false;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private jobPostService: JobPostService,
                private notificationService: NotificationsService,
                private businessService: BusinessService,
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
            }
        });

        /**
         * If user is on the web site for the first time,
         * he can post a free job offer
         */
        if (!this.user.is_active || this.user.user_type_id == 4 || this.user.user_type_id == 5) {
            __this.userCanPostJob = true;
        }

        /**
         * Check if user is able to post a new job regarding credits amount on his account
         */
        this.userService.getPlans(this.user.id).subscribe((res: Response) => {
            let plans = res.json();
            for (let i = 0; i < plans.length; i++) {
                if (plans[i]['credits'] > 0 || plans[i]['credits'] == -1) {
                    __this.userCanPostJob = true;
                }
            }
        });

        /**
         * If user is admin, show him every businesses
         */
        if (this.user.user_type_id == 1) {
            this.businessService.getAll().subscribe((res: Response) => {
                this.businesses = res.json();
            });
        }
        else {
            this.userService.getBusinesses(this.user.id).subscribe((res: Response) => {
                this.businesses = res.json();

                if (this.businesses.length == 1) {
                    this.jobPost.business_id = this.businesses[0].id;
                }
            });
        }

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

    ngAfterViewInit() {
        let __this = this;

        if (this.jobPost.id) {
            // Editing a specific item, let's retrieve it's data
            this.jobPostService.get(this.jobPost.id).subscribe((res: Response) => {
                this.jobPost = res.json();

                setTimeout(function() {
                    __this.showTinyMceEditor = true;
                }, 500);
            });

            /**
             * If user is currently editing an existing job offer, let him do it
             */
            this.userCanPostJob = true;
        }
        else {
            this.showTinyMceEditor = true;
        }
    }

    submitJobPost() {
        let __this = this;
        this.isLoading = true;

        this.jobPostService.save(__this.jobPost, this.user.id).subscribe((res: Response) => {
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
                        __this.router.navigate(['/profil/confirmation-du-compte/2']);
                    });
                }
                else {
                    if (this.user.user_type_id != 1) {
                        __this.router.navigate(['/profil/annonce/', { jobId: res.json()['id'] }]);
                    }
                }
            }
            else {
                __this.notificationService.show(
                    new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                );
            }

            this.isLoading = false;
        });
    }

    skipJobCreation() {
        this.userService.skipJobCreation(this.user.id).subscribe((res: Response) => {
            this.userService.activateAccount(this.user.id).subscribe((res: Response) => {
                this.router.navigate(['/profil/confirmation-du-compte/2']);
            });
        });
    }

    handleBusinessIdChange(businessId) {
        this.jobPost.business_id = businessId;
    }

    jobDescriptionChanged(newDescription) {
        this.jobPost.description = newDescription;
    }
}