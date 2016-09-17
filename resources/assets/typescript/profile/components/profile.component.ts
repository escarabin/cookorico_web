import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: '../templates/profile.component.html',
})

export class ProfileComponent {
    user: any;

    constructor() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
}