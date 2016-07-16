import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { UserService } from './../services/user.service';
import { NotificationsService } from './../services/notification.service';

// Models
import { Notification } from './../models/notification';

@Component({
    selector: 'my-job-posts',
    providers: [UserService],
    directives: [RouterLink],
    templateUrl: '../templates/my-job-posts.component.html'
})

export class MyJobPostsComponent {
    items: any = [];
    allItemsChecked: boolean;
    checkedItemsList: any = [];

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {
        let __this = this;

        this.userService.getJobPosts().subscribe((res: Response) => {
            __this.items = res.json();
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

    deleteSelectedItems() {
        let __this = this;

        let parsedListItemId = this.checkedItemsList.join(',');

        this.userService.deleteMyJobPosts(parsedListItemId).subscribe((res: Response) => {
            __this.userService.getJobPosts().subscribe((res: Response) => {
                __this.items = res.json();

                __this.notificationService.show(
                    new Notification('success', 'Ces expériences ont bien été supprimées')
                );

                this.checkedItemsList = [];
                this.allItemsChecked = false;
            });
        });
    }
}