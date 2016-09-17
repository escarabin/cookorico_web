import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: '../templates/profile.component.html',
})

export class ProfileComponent {
    user: any;
    scrollTop: number;

    constructor() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }


    /**
     * Event fired on page scroll to adapt visual elements
     * @param event
     */
    onPageScroll(event: any) {
        this.scrollTop = event.target['scrollingElement']['scrollTop'];
    }
}