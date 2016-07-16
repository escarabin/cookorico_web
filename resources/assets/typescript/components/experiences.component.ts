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
    allChecked: boolean;
    checkedExperiencesList: any = [];

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getExperiences().subscribe((res: Response) => {
            __this.experiences = res.json();
        });
    }

    checkedExperiences(experienceId) {
        let indexOfExpId = this.checkedExperiencesList.indexOf(experienceId);
        if (indexOfExpId == -1) {
            this.checkedExperiencesList.push(experienceId);
        }
        else {
            delete this.checkedExperiencesList[indexOfExpId];
        }
    }

    deleteExperiences() {
        let __this = this;

        let parsedListExpId = this.checkedExperiencesList.join(',');

        this.userService.deleteExperiences(parsedListExpId).subscribe((res: Response) => {
            __this.userService.getExperiences().subscribe((res: Response) => {
                __this.experiences = res.json();
            });
        });
    }
}