import { Component } from '@angular/core';

// Services
import { UserService } from './../../services/user.service';

@Component({
    selector: 'profile-sub-header',
    providers: [ UserService ],
    templateUrl: '../templates/profile-sub-header.component.html'
})

export class ProfileSubHeaderComponent {
    constructor(private userService: UserService) {

    }
}