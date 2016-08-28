import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Models
import { User } from './../../models/user';

// Services
import { UserService } from './../../services/user.service';

@Component({
    templateUrl: '../templates/header.component.html',
    selector: 'header',
    providers: [UserService],
})

export class HeaderComponent {
    user: any;

    constructor (private userService: UserService) {
        this.userService.getUserInfos().subscribe((res: Response) => {
            if (res.text().length > 10) {
                this.user = res.json();
                localStorage.setItem('user', JSON.stringify(this.user));
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
        });
    }
}