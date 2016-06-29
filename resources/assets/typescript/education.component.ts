import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { UserService } from './user.service';

@Component({
    selector: 'experiences',
    providers: [UserService],
    directives: [RouterLink],
    templateUrl: '../templates/education.component.html'
})

export class EducationComponent {
    studies: any;

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getEducation().subscribe((res: Response) => {
            __this.studies = res.json();
        });
    }
}