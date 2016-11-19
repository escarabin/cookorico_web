import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';

@Component({
    selector: 'profile',
    templateUrl: '../../../templates/profile.component.html',
})

export class ProfileComponent {
    user: any;
    scrollTop: number;
    routeSegments: any = [];
    /**
     * Defines if the current user has a business that is part of a group
     * @type {boolean}
     */
    isInAGroup: boolean = true;

    constructor(private router: Router,
                private userService: UserService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        /**
         * If user not logged in, redirect to home
         */
        if (!this.user) {
            this.router.navigate(['/']);
        }

        if (this.user.user_type_id == 2) {
            this.userService.isUserPartOfAGroup(this.user.id).subscribe((res: Response) => {
                if (res['_body'] == 'true') {
                    this.isInAGroup = true;
                }
            });
        }

        /**
         * Subscribe to route change to display components regarding current route
         * (ex: Home page is different and does not show child component 'profile-sub-header')
         */
        router.events.subscribe((event) => {
            let url = event['url'];
            __this.routeSegments = [];

            let segments = url.split('/');
            let link = "/";

            /**
             * Reload user infos after last step of sign up
             */
            if (url == '/profil/annonces' && !this.user.is_active) {
                __this.userService.getUserInfos().subscribe((res: Response) => {
                    this.user = res.json();
                    localStorage.setItem('user', JSON.stringify(this.user));
                });
            }

            for (let i = 1; i < segments.length; i++) {
                link += segments[i] + "/";

                /**
                 * Avoid appending ids (numbers) to route segments
                 */
                if (isNaN(segments[i])) {
                    __this.routeSegments.push({ title: segments[i], link: link});
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