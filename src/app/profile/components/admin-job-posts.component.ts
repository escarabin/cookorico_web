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

        this.jobService.getAllJobs().subscribe((res: Response) => {
            for (let i = 0; i < res.json().length; i++) {
                if (res.json()[i]['is_accepted']) {
                    this.acceptedItems.push(res.json()[i]);
                }
                if (res.json()[i]['is_rejected']) {
                    this.rejectedItems.push(res.json()[i]);
                }
                if (res.json()[i]['is_active'] && !res.json()[i]['is_accepted'] && !res.json()[i]['is_rejected']) {
                    this.itemsToReview.push(res.json()[i]);
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