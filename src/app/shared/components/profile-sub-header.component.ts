import { Component, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

// Services
import { UserService } from './../../services/user.service';

@Component({
    selector: 'profile-sub-header',
    templateUrl: '../../../templates/profile-sub-header.component.html'
})

export class ProfileSubHeaderComponent {
    user: any;
    profilePercentage: number;

    constructor(@Inject(UserService) UserService,
                private userService: UserService,
                private router: Router) {
        /**
         * First, get localStorage user data
         */
        this.user = JSON.parse(localStorage.getItem('user'));

        /**
         * Subscribe to route change to display components regarding current route
         * (ex: Home page is different and does not show child component 'profile-sub-header')
         */
        router.events.subscribe((event) => {
            let url = event['url'];

            /**
             * Update user object
             */
            this.user = JSON.parse(localStorage.getItem('user'));

            /**
             * Reload user infos after last step of sign up
             */
            if (url == '/profil/annonces') {
                if (!this.user || !this.user.is_active) {
                    this.userService.getUserInfos().subscribe((res: Response) => {
                        this.user = res.json();
                        localStorage.setItem('user', JSON.stringify(this.user));
                    });
                }
            }
        });

        /**
         * Then get user fresh data
         */
        UserService.getUserInfos(this.user.id).subscribe((res: Response) => {
            if (res.text().length > 10) {
                this.user = res.json();
            }
        });

        /**
         * Get profile percentage of fill
         */
        UserService.getProfilePercentage(this.user.id).subscribe((res: Response) => {
            this.profilePercentage = res.json();
        });
    }
}