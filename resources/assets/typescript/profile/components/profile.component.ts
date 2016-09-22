import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'profile',
    templateUrl: '../templates/profile.component.html',
})

export class ProfileComponent {
    user: any;
    scrollTop: number;
    routeSegments: any = [];

    constructor(private router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));

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