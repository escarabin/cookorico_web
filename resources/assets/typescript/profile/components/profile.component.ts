import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';

@Component({
    selector: 'profile',
    templateUrl: '../templates/profile.component.html',
})

export class ProfileComponent {
    user: any;
    scrollTop: number;
    routeSegments: any = [];

    constructor(private router: Router,
                private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('user'));

        /**
         * If user not logged in, redirect to home
         */
        if (!this.user) {
            this.router.navigate(['/']);
        }

        router.events.subscribe((event) => {
            let url = event['url'];

            /**
             * Reload user infos after last step of sign up
             */
            if (url == '/profil/annonces' && !this.user.is_active) {
                this.userService.getUserInfos().subscribe((res: Response) => {
                    this.user = res.json();
                    localStorage.setItem('user', JSON.stringify(this.user));
                });
            }
        });

        /**
         * Subscribe to route change to display components regarding current route
         * (ex: Home page is different and does not show child component 'profile-sub-header')
         */
        router.events.subscribe((event) => {
            let segments = event.url.split('/');
            let link = "/";

            for (let i = 1; i < segments.length; i++) {
                link += segments[i] + "/";

                /**
                 * Avoid appending ids (numbers) to route segments
                 */
                if (isNaN(segments[i])) {
                    this.routeSegments.push({ title: segments[i], link: link});
                }
            }
        });
    }


    /**
     * Event fired on page scroll to adapt visual elements
     * @param event
     */
    onPageScroll(event: any) {
        this.scrollTop = event.target['scrollingElement']['scrollTop'];
    }
}