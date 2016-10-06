import { Component, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

// Models
import { User } from './../../models/user';

// Services
import { UserService } from './../../services/user.service';

@Component({
    templateUrl: '../templates/header.component.html',
    selector: 'header',
})

export class HeaderComponent {
    user: any;
    isHomePage: boolean = false;
    scrollTop: number;

    constructor (@Inject(UserService) UserService,
                 private userService: UserService,
                 private router: Router) {
        UserService.getUserInfos().subscribe((res: Response) => {
            if (res.text().length > 10) {
                this.user = res.json();
                localStorage.setItem('user', JSON.stringify(this.user));
            }
        });

        UserService.userChangeEmitter.subscribe(res => {
            console.log('received something user', res);
        });

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

            if (url == '/' || url == '/accueil') {
                this.isHomePage = true;
            }
            else {
                this.isHomePage = false;
            }
        });
    }

    /**
     * Function triggered after sign-in-component.ts's
     * (userSignedIn) EventEmitter emitted something
     * @param user
     */
    handleUserSignedIn(user: User) {
        this.user = user;
    }

    /**
     * Function triggered after sign-in-component.ts's
     * (userSignedOut) EventEmitter emitted something
     */
    handleUserSignedOut() {
        this.userService.signOut().subscribe((res: Response) => {
            this.user = null;
            this.router.navigate(['/']);
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