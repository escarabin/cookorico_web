import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { NotificationsService } from './../../services/notification.service';
import { SearchService } from './../../services/search.service';

// Models
import { Notification } from './../../models/notification';

@Component({
    templateUrl: '../templates/search.component.html',
    providers: [ UserService ],
    selector: 'search',
})

export class SearchComponent {
    placeId: string;
    jobNamingId: number;
    contractTypeId: number;
    studyLevelId: number;
    searchParameters: any = [];
    user: any;
    scrollTop: number;
    routeSegments: any = [];
    seoRouteData: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private searchService: SearchService,
                private notificationService: NotificationsService) {
        this.userService.getUserInfos().subscribe((res: Response) => {
            if (res.text().length > 10) {
                this.user = res.json();
            }
            else {
                /**
                 * If user is not logged in, show sign-up notification
                 */
                this.notificationService.show(
                    new Notification('info', 'Pour postuler', '/inscription-candidat', 'Inscrivez-vous', false)
                );
            }
        });

        route.params.subscribe(params => {
            if (params) {
                this.placeId = params['placeId'];
                this.jobNamingId = parseInt(params['jobNamingId']);
                this.contractTypeId = parseInt(params['contractTypeId']);
                this.studyLevelId = parseInt(params['studyLevelId']);
            }
        });

        /**
         * Subscribe to route change to display components regarding current route
         * (ex: Home page is different and does not show child component 'profile-sub-header')
         */
        router.events.subscribe((event) => {
            this.routeSegments = [];

            let segments = event.url.split('/');
            let link = "/";

            this.searchService.getSeoDataFromPath(event.url).subscribe((res: Response) => {
                if (res['_body'].length > 10) {
                    this.seoRouteData = res.json();
                }
            });

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
        if (this.user) {
            this.scrollTop = event.target['scrollingElement']['scrollTop'];
        }
    }
}