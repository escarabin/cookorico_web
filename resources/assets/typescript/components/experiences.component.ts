import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { UserService } from './../services/user.service';

@Component({
    selector: 'experiences',
    providers: [UserService],
    directives: [RouterLink],
    templateUrl: '../templates/experiences.component.html'
})

export class ExperiencesComponent {
    experiences: any;

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getExperiences().subscribe((res: Response) => {
            __this.experiences = res.json();
        });
    }
}