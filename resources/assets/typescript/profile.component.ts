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
    constructor(private routeParams: RouteParams,
                private userService: UserService) {
        let __this = this;
    }
}