import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated'
import { Response } from '@angular/http';

// Services
import { UserService } from './../services/user.service';

@Component({
    providers: [UserService],
    selector: 'profile-preview',
    templateUrl: '../templates/profile-preview.component.html',
})

export class ProfilePreviewComponent {
    user: any = [];

    constructor() {
        this.user = JSON.parse(localStorage.getItem('user'));

        console.log('user is ', this.user);
    }
}