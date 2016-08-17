import { Component, Input } from '@angular/core';

@Component({
    selector: 'post-preview',
    templateUrl: '../templates/post-preview.component.html'
})

export class PostPreviewComponent {
    @Input('post') post:any;
    constructor() {

    }
}