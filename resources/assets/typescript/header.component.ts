import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

@Component({
    templateUrl: '../templates/header.component.html',
    selector: 'header',
    directives: [RouterLink]
})

export class HeaderComponent {

}