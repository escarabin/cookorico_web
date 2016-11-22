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

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {
        this.user = JSON.parse(localStorage.getItem('user'));

        let __this = this;

        if (this.user.user_type_id == 2) {
            this.userService.getPlans(this.user.id).subscribe((res: Response) => {
                __this.plans = res.json();
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

            console.log('alright');

            this.notificationService.show(
                new Notification('success', 'Votre mot de passe a bien été modifié')
            );

            this.hideChangePasswordModal();
        });
    }
}