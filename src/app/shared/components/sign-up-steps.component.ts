import { Component, Input } from '@angular/core';

@Component({
    selector: 'sign-up-steps',
    templateUrl: '../templates/sign-up-steps.component.html',
    inputs: [ 'stepId' ]
})

export class SignUpStepsComponent {
    @Input stepId:number;

    constructor() {

    }
}