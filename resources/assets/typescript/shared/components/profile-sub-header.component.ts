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
         * Detect any change in user object
         */
        UserService.userChangeEmitter.subscribe((res: Response) => {
            console.log('received a new user', res.json());
        });
    }
}