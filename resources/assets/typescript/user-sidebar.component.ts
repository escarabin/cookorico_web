import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated'

// Services
import { UserService } from './user.service';

@Component({
    providers: [UserService],
    directives: [RouterLink],
    selector: 'user-sidebar',
    templateUrl: '../templates/user-sidebar.component.html',
})

export class UserSidebarComponent {
    user: any;
    userProfilePicturePath: string;

    constructor(private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userProfilePicturePath = 'url(/uploads/user/pp/' + this.user.id + '.jpg)';
    }
}