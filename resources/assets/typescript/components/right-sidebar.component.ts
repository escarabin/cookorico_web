import { Component } from '@angular/core';

// Services
import { UserService } from './../services/user.service';

@Component({
    selector: 'right-sidebar',
    providers: [UserService],
    templateUrl: '../templates/right-sidebar.component.html'
})

export class RightSidebarComponent {
    constructor() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.7&appId=1651155661825692";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
}