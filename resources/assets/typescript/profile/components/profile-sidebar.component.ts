import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';

@Component({
    providers: [UserService],
    selector: 'profile-sidebar',
    templateUrl: '../templates/profile-sidebar.component.html',
})

export class ProfileSidebarComponent {
    user: any;
    plans: any = [];
    profilePictureUrl: string;
    isMobileMenuVisible: boolean = false;

    constructor(private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('user'));

        let __this = this;

        this.userService.getPlans().subscribe((res: Response) => {
            __this.plans = res.json();
        });
    }
}