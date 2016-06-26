import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

@Component({
    selector: 'job-preview',
    directives: [RouterLink],
    templateUrl: '../templates/job-preview.component.html',
})

export class JobPreviewComponent {
    @Input('job') job:any;
    constructor() {

    }
}