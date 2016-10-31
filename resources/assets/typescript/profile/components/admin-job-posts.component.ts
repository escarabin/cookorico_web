import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'admin-job-posts',
    providers: [UserService],
    templateUrl: '../templates/admin-job-posts.component.html'
})

export class AdminJobPostsComponent {
    items: any = [];
    allItemsChecked: boolean;
    checkedItemsList: any = [];
    jobPlacementsLeftNum: any = [];
    postStatusFilter: string = "0";

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {
        let __this = this;

        this.userService.getJobPosts().subscribe((res: Response) => {
            /**
             * Keep only job-posts that have not been reviewed
             */
            for (let i = 0; i < res.json().length; i++) {
                if (!res.json()[i]['is_accepted'] && !res.json()[i]['is_rejected']) {
                    __this.items.push(res.json()[i]);
                }
            }

            /**
             * Defined how many job posts the user is now able to post
             */
            for (let i = 0; i < (5 - __this.items.length); i++) {
                this.jobPlacementsLeftNum.push(1);
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