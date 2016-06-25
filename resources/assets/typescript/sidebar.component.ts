import { Component } from '@angular/core';

// Services
import { UserService } from './user.service';

@Component({
    providers: [UserService],
    selector: 'sidebar',
    templateUrl: '../templates/sidebar.component.html',
})

export class SidebarComponent {
    user: any;
    userProfilePicturePath: string;

    constructor(private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userProfilePicturePath = 'url(/uploads/user/pp/' + this.user.id + '.jpg)';
    }
}