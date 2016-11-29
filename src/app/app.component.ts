import { Component, ViewContainerRef } from '@angular/core';
import { MetaService } from 'ng2-meta';
import { Router } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
    selector: 'app',
    templateUrl: '../templates/app.component.html'
})

export class AppComponent {
    viewContainerRef: any;
    isHomePage: boolean = false;

    public constructor(viewContainerRef:ViewContainerRef,
                       private router: Router,
                       angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
                       private metaService: MetaService) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;

        /**
         * Subscribe to route change to display components regarding current route
         * (ex: Home page is different and does not show child component 'profile-sub-header')
         */
        router.events.subscribe((event) => {
            let url = event['url'];
            if (url == '/' || url == '/accueil') {
                this.isHomePage = true;
            }
            else {
                this.isHomePage = false;
            }
        });
    }
}