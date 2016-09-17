import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: '/templates/app.component.html'
})

export class AppComponent {
    viewContainerRef: any;

    public constructor(viewContainerRef:ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}