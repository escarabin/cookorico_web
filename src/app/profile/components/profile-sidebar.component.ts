import { Component, Output } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'profile-sidebar',
    templateUrl: '../../../templates/profile-sidebar.component.html'
})

export class ProfileSidebarComponent {
    user: any;
    plans: any = [];
    profilePictureUrl: string;
    oldPassword: string;
    newPassword: string;
    isMobileMenuVisible: boolean = false;
    isSavingModal: boolean = false;
    @Output() isUserPartOfAGroup: boolean;
    userJobPostsCount: number;

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {
        this.user = JSON.parse(localStorage.getItem('user'));

        let __this = this;

        if (this.user.user_type_id == 2 || this.user.user_type_id == 4 || this.user.user_type_id == 5) {
            this.userService.getJobPosts(this.user.id, false).subscribe((res:Response) => {
                this.userJobPostsCount = res.json().length;
                this.userService.getPlans(this.user.id).subscribe((res:Response) => {
                    for (let i = 0; i < res.json().length; i++) {
                        if (res.json()[i]['credits'] == -1) {
                            let plan = res.json()[i];

                            /**
                             * Subtract active job posts from spaces count
                             */
                            plan.spaces = plan.spaces - __this.userJobPostsCount;

                            __this.plans.push(plan);
                            i = 1000;
                        }
                    }
                });
            });
        }
    }

    public openChangePasswordModal() {
        this.showModalBackdrop();
        document.getElementById("change-password-modal").style.display = "block";
    }
    public hideChangePasswordModal() {
        this.hideModalBackdrop();
        document.getElementById("change-password-modal").style.display = "none";
    }
    public showModalBackdrop() {
        document.getElementById("modal-backdrop-replacement").style.display = "block";
    }
    public hideModalBackdrop() {
        document.getElementById("modal-backdrop-replacement").style.display = "none";
    }

    /**
     * Save new password
     */
    saveNewPassword() {
        this.isSavingModal = true;

        this.userService.changePassword(this.oldPassword, this.newPassword, this.user.id).subscribe((res: Response) => {
            this.isSavingModal = false;

            this.notificationService.show(
                new Notification('success', 'Votre mot de passe a bien été modifié')
            );

            this.hideChangePasswordModal();
        });
    }
}