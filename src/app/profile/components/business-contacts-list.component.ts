import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { ReferenceService } from './../../services/reference.service';
import { UserService } from './../../services/user.service';
import { NotificationsService } from '../../services/notification.service';
import { BusinessService } from '../../services/business.service';

// Models
import { Notification } from './../../models/notification';

@Component({
    selector: 'business-contacts-list',
    templateUrl: '../../../templates/business-contacts-list.component.html',
    inputs: ['business']
})

export class BusinessContactsListComponent {
    civilities: any = [];
    user: any = { civility_id: 0 };
    loggedUser: any = {};
    contacts: any = [];
    error: string;
    @Input business: any = {};
    @Output() businessUsersChanged: EventEmitter = new EventEmitter();

    constructor(private referenceService: ReferenceService,
                private notificationService: NotificationsService,
                private businessService: BusinessService,
                private userService: UserService) {
        this.loggedUser = JSON.parse(localStorage.getItem('user'));

        this.referenceService.getAllCivilities().subscribe((res: Response) => {
            this.civilities = res.json();
        });
    }

    ngAfterViewInit() {
        console.log('business is ', this.business);
    }

    /**
     * Detach specific contact from current business
     * @param userId
     */
    detachBusinessContact(userId: number) {
        this.businessService.detachUser(userId, this.business.id).subscribe((res: Response) => {
            for (let i = 0; i < this.business.users.length; i++) {
                let user = this.business.users[i];

                if (user.id == userId) {
                    this.business.users.splice(i, 1);
                }
            }

            this.businessUsersChanged.emit(this.business.users);

            this.notificationService.show(
                new Notification('success', 'Ce contact ne fait plus partie de cet établissement')
            );
        });
    }

    /**
     * Attach specific contact to current business
     */
    createBusinessContact() {
        this.userService.createUser(this.user.email,
                                    this.user.password,
                                    2,
                                    this.user.lastName,
                                    this.user.firstName,
                                    this.user.civility_id).subscribe((res: Response) => {
            if (res['_body'].length > 100) {
                /**
                 * User account successfully created
                 */
                let createdUser = res.json();

                this.business.users.push(createdUser);

                this.businessUsersChanged.emit(this.business.users);

                this.businessService.attachUser(createdUser.id, this.business.id).subscribe((res: Response) => {
                    this.notificationService.show(
                        new Notification('success', 'Votre contact a bien été crée')
                    );
                });

                this.error = null;
                this.user = { civility_id: 0 };
            }
            else {
                this.error = res['_body'];
            }
        });
    }
}