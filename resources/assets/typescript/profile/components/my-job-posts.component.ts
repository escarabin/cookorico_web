import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

// Services
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';
import { JobPostService } from '../../services/job-post.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'my-job-posts',
    providers: [UserService, JobPostService],
    templateUrl: '../templates/my-job-posts.component.html'
})

export class MyJobPostsComponent {
    items: any = [];
    postStatus: string = null;
    allItemsChecked: boolean;
    checkedItemsList: any = [];
    jobPlacementsLeftNum: any = [];
    postStatus: number = 'is_accepted';
    userCanPullUpJobPost: boolean = false;
    userCanPostJob: boolean = false;

    constructor(private userService: UserService,
                private jobPostService: JobPostService,
                private router: Router,
                private notificationService: NotificationsService) {
        let __this = this;

        this.userService.getJobPosts().subscribe((res: Response) => {
            __this.items = res.json();

            /**
             * Defined how many job posts the user is now able to post
             */
            for (let i = 0; i < (5 - __this.items.length); i++) {
                this.jobPlacementsLeftNum.push(1);
            }
        });

        this.userService.getPlans().subscribe((res: Response) => {
            let plans = res.json();

            /**
             * Loop through plans to see if user is able to pull up job post
             */
            for (let i = 0; i < plans.length; i++) {
                let plan = plans[i];

                if (plan.pull_up_job_credits < 0 || plan.pull_up_job_credits > 0) {
                    __this.userCanPullUpJobPost = true;
                }
                if (plan.credits > 0) {
                    __this.userCanPostJob = true;
                }
            }
        });
    }

    toggleAllItems() {
        this.allItemsChecked =! this.allItemsChecked;

        if (this.allItemsChecked) {
            let checkedItemsListId = [];
            for (let i = 0; i < this.items.length; i++) {
                checkedItemsListId.push(this.items[i].id);
            }
            this.checkedItemsList = checkedItemsListId;
        }
        else {
            this.checkedItemsList = [];
        }
    }

    saveCheckedItem(itemId) {
        let indexOfItemId = this.checkedItemsList.indexOf(itemId);
        if (indexOfItemId == -1) {
            this.checkedItemsList.push(itemId);
        }
        else {
            this.checkedItemsList.splice(indexOfItemId, 1);
        }

        if (this.checkedItemsList.length != this.items.length) {
            this.allItemsChecked = false;
        }
        else {
            this.allItemsChecked = true;
        }
    }

    pullUpJobPost() {
        this.jobPostService.pullUpJobPost().subscribe((post: Response) => {
            this.userService.getJobPosts().subscribe((res: Response) => {
                __this.notificationService.show(
                    new Notification('success', 'Votre annonce a bien été remontée en haut de liste')
                );

                __this.items = res.json();
            });
        });
    }

    deactivateJobPost(jobPostId: number) {
        this.jobPostService.deactivate(jobPostId).subscribe((post: Response) => {
            this.userService.getJobPosts().subscribe((res: Response) => {
                __this.notificationService.show(
                    new Notification('success', 'Votre annonce a bien été désactivée')
                );
            });
        });
    }

    createJobPost() {
        if (this.userCanPostJob) {
            this.router.navigate(['/profil/annonce/creer']);
        }
        else {
            this.router.navigate(['/profil/mon_abonnement']);
            this.notificationService.show(
                new Notification('error', 'Veuillez souscrire à un pack pour poster une annonce')
            );
        }
    }

    getJobPostsCount(statusTitle: string) {
        let count = 0;

        for (let i = 0; i < this.items.length; i++) {
            if (statusTitle == "is_reviewing") {
                if (!this.items[i]['is_accepted'] && !this.items[i]['is_rejected']) {
                    count += 1;
                }
            }
            else if (this.items[i][statusTitle]) {
                count += 1;
            }
        }

        return count;
    }
}