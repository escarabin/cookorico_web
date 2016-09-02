import { Component } from '@angular/core';
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

    constructor(private userService: UserService) {
        this.userService.getUserInfos().subscribe((res: Response) => {
            if (res.text().length > 10) {
                this.user = res.json();
            }
        });
    }
}