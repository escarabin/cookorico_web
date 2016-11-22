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
        let __this = this;

        this.jobService.getAllJobs().subscribe((res: Response) => {
            /**
             * Keep only job-posts that have not been reviewed
             */
            for (let i = 0; i < res.json().length; i++) {
                if (res.json()[i]['is_accepted']) {
                    __this.acceptedItems.push(res.json()[i]);
                }
                if (res.json()[i]['is_rejected']) {
                    __this.rejectedItems.push(res.json()[i]);
                }
                if (res.json()[i]['is_active'] && !res.json()[i]['is_accepted'] && !res.json()[i]['is_rejected']) {
                    __this.itemsToReview.push(res.json()[i]);
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

            for (let i = 0; i < __this.items.length; i++) {
                if (__this.items[i]['id'] == jobPostId) {
                    __this.items[i]['is_accepted'] = true;
                }
            }
        });
    }

    rejectJobPost(jobPostId: number) {
        let __this = this;

        this.userService.rejectJobPost(jobPostId).subscribe((res: Response) => {
            __this.notificationService.show(
                new Notification('warning', 'Cette annonce a bien été refusée et ne sera pas en ligne')
            );

            for (let i = 0; i < __this.items.length; i++) {
                if (__this.items[i]['id'] == jobPostId) {
                    console.log('changing');
                    __this.items[i]['is_rejected'] = true;
                }
            }
        });
    }
}