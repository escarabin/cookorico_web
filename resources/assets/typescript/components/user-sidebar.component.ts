import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated'
import { Response } from '@angular/http';

// Services
import { UserService } from './../services/user.service';

@Component({
    providers: [UserService],
    directives: [RouterLink],
    selector: 'user-sidebar',
    templateUrl: '../templates/user-sidebar.component.html',
})

export class UserSidebarComponent {
    user: any;
    plans: any = [];

    constructor(private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('user'));

        let __this = this;

        this.userService.getPlans().subscribe((res: Response) => {
            __this.plans = res.json();
        });
    }
}