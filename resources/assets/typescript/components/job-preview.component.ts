import { Component, Input } from '@angular/core';

@Component({
    selector: 'job-preview',
    templateUrl: '../templates/job-preview.component.html',
})

export class JobPreviewComponent {
    @Input('job') job:any;
    constructor() {

    }
}