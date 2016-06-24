import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouteParams, RouterLink }
    from '@angular/router-deprecated';

// Services
import { UserService } from './user.service';

@Component({
    providers: [UserService],
    selector: 'profile',
    templateUrl: '../templates/profile.component.html',
})

export class ProfileComponent {
    user: any;

    constructor(private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
}