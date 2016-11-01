import { Component, ViewContainerRef } from '@angular/core';
import { MetaService } from 'ng2-meta';

@Component({
    selector: 'app',
    templateUrl: '/templates/app.component.html'
})

export class AppComponent {
    viewContainerRef: any;

    public constructor(viewContainerRef:ViewContainerRef,
                       private metaService: MetaService) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}