import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

@Component({
    selector: 'post-preview',
    directives: [RouterLink],
    templateUrl: '../templates/post-preview.component.html',
})

export class PostPreviewComponent {
    @Input('post') post:any;
    constructor() {

    }
}