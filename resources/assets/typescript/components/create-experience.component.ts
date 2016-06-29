import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { UserService } from './../services/user.service';

@Component({
    selector: 'create-experience',
    providers: [UserService],
    directives: [RouterLink],
    templateUrl: '../templates/create-experience.component.html'
})

export class CreateExperienceComponent {
    constructor(private userService: UserService) {

    }
}