import { Component, Inject } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';

@Component({
    selector: 'profile-sub-header',
    providers: [ UserService ],
    templateUrl: '../templates/profile-sub-header.component.html'
})

export class ProfileSubHeaderComponent {
    user: any;
    profilePercentage: number;

    constructor(@Inject(UserService) UserService) {
        /**
         * First, get localStorage user data
         */
        this.user = JSON.parse(localStorage.getItem('user'));

        /**
         * Then get user fresh data
         */
        UserService.getUserInfos().subscribe((res: Response) => {
            if (res.text().length > 10) {
                this.user = res.json();
            }
        });

        /**
         * Get profile percentage of fill
         */
        UserService.getProfilePercentage().subscribe((res: Response) => {
            this.profilePercentage = res.json();
        });
    }
}