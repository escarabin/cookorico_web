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

    constructor(private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('user'));

        /**
         * If user has a specific profile picture URL (Linkedin, Google, etc)
         * then display this one instead of AWS's one
         */
        if (this.user.profilePictureUrl) {
            this.profilePictureUrl = this.user.profilePictureUrl;
        }
        else {
            this.profilePictureUrl = 'https://s3-eu-west-1.amazonaws.com/oechr-profile-picture/' + this.user.id + '.jpg';
        }

        let __this = this;

        this.userService.getPlans().subscribe((res: Response) => {
            __this.plans = res.json();
        });
    }
}