import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';
import { JobService } from '../../services/job.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'admin-job-posts',
    templateUrl: '../../../templates/admin-job-posts.component.html'
})

export class AdminJobPostsComponent {
    acceptedItems: any = [];
    itemsToReview: any = [];
    rejectedItems: any = [];
    expiredItems: any = [];
    allItemsChecked: boolean;
    checkedItemsList: any = [];
    jobPlacementsLeftNum: any = [];
    postStatusFilter: string = "0";

    constructor(private userService: UserService,
                private jobService: JobService,
                private notificationService: NotificationsService) {
        this.retrieveJobPosts();
    }

    retrieveJobPosts() {
        /**
         * Flush all existing data
         */
        this.acceptedItems = [];
        this.rejectedItems = [];
        this.itemsToReview = [];
        this.expiredItems = [];

        let todayDate = new Date();

        this.jobService.getAllJobs(true).subscribe((res: Response) => {
            for (let i = 0; i < res.json().length; i++) {
                let job = res.json()[i];
                let createDate = new Date(job['created_at']);
                let dayDiff = Math.round((todayDate-createDate)/(1000*60*60*24));
                console.log('day diff is' + dayDiff);

                if (dayDiff > 30) {
                    this.expiredItems.push(job);
                }
                else if (job['is_accepted']) {
                    this.acceptedItems.push(job);
                }
                else if (job['is_rejected']) {
                    this.rejectedItems.push(job);
                }
                else if (job['is_active'] && !job['is_accepted'] && !job['is_rejected']) {
                    this.itemsToReview.push(job);
                }

            }
        });
    }

    acceptJobPost(jobPostId: number) {
        let __this = this;

        this.userService.acceptJobPost(jobPostId).subscribe((res: Response) => {
            __this.notificationService.show(
                new Notification('success', 'Cette annonce a bien été accepté et est en ligne')
            );

            this.retrieveJobPosts();
        });
    }

    rejectJobPost(jobPostId: number) {
        let __this = this;

        this.userService.rejectJobPost(jobPostId).subscribe((res: Response) => {
            __this.notificationService.show(
                new Notification('warning', 'Cette annonce a bien été refusée et ne sera pas en ligne')
            );

            this.retrieveJobPosts();
        });
    }
}