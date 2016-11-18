import { Component, Output } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';

@Component({
    selector: 'profile-sidebar',
    templateUrl: '../templates/profile-sidebar.component.html'
})

export class ProfileSidebarComponent {
    user: any;
    plans: any = [];
    profilePictureUrl: string;
    isMobileMenuVisible: boolean = false;
    @Output() isUserPartOfAGroup: boolean;

    constructor(private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('user'));

        let __this = this;

        if (this.user.user_type_id == 2) {
            this.userService.getPlans(this.user.id).subscribe((res: Response) => {
                __this.plans = res.json();
            });
        }
    }
}