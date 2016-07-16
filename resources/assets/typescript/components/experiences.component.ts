import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { UserService } from './../services/user.service';
import { NotificationsService } from './../services/notification.service';

// Models
import { Notification } from './../models/notification';

@Component({
    selector: 'experiences',
    providers: [UserService],
    directives: [RouterLink],
    templateUrl: '../templates/experiences.component.html'
})

export class ExperiencesComponent {
    items: any = [];
    allItemsChecked: boolean;
    checkedItemsList: any = [];

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {
        let __this = this;

        this.userService.getExperiences().subscribe((res: Response) => {
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

    saveCheckedItem(experienceId) {
        let indexOfExpId = this.checkedItemsList.indexOf(experienceId);
        if (indexOfExpId == -1) {
            this.checkedItemsList.push(experienceId);
        }
        else {
            this.checkedItemsList.splice(indexOfExpId, 1);
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

        let parsedListExpId = this.checkedItemsList.join(',');


        this.userService.deleteExperiences(parsedListExpId).subscribe((res: Response) => {
            this.notificationService.show(
                new Notification('success', 'Ces expériences ont bien été supprimées')
            );

            __this.userService.getExperiences().subscribe((res: Response) => {
                __this.items = res.json();
            });
        });
    }
}