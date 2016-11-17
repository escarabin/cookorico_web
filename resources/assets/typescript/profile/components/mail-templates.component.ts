import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { MailService } from '../../services/mail.service';
import { NotificationsService } from '../../services/notification.service';

@Component({
    selector: 'mail-templates',
    templateUrl: '../templates/mail-templates.component.html'
})

export class MailTemplatesComponent {
    items: any = [];
    allItemsChecked: boolean;
    checkedItemsList: any = [];

    constructor(private mailService: MailService,
                private notificationService: NotificationsService) {
        let __this = this;

        this.mailService.getTemplates().subscribe((res: Response) => {
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
}