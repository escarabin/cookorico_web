import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'education',
    templateUrl: '../../../templates/education.component.html'
})

export class EducationComponent {
    items: any = [];
    allItemsChecked: boolean;
    checkedItemsList: any = [];
    user: any = {};

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        this.userService.getEducation(this.user.id).subscribe((res: Response) => {
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

    deleteItem(itemId: number) {
        let __this = this;

        this.userService.deleteEducation([itemId]).subscribe((res: Response) => {
            __this.userService.getEducation(__this.user.id).subscribe((res: Response) => {
                __this.items = res.json();

                __this.notificationService.show(
                    new Notification('success', 'Cette formation a bien été supprimée')
                );

                this.checkedItemsList = [];
                this.allItemsChecked = false;
            });
        });
    }
}