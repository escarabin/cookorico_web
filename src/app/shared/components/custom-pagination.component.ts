import { Component, Input } from '@angular/core';

@Component({
    templateUrl: '../../../templates/custom-pagination.component.html',
    selector: 'custom-pagination',
    inputs: ['pagination']
})

export class CustomPaginationComponent {
    @Input public pagination: any;

    constructor () {

    }
}