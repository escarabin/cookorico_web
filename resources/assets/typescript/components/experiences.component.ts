import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { UserService } from './../services/user.service';
import { NotificationsService } from './../services/notification.service';

// Models
import { Notification } from './../models/notification';

@Component({
    selector: 'experiences',
    providers: [UserService],
    directives: [RouterLink],
    templateUrl: '../templates/experiences.component.html'
})

export class ExperiencesComponent {
    experiences: any = [];
    allChecked: boolean;
    checkedExperiencesList: any = [];

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {
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
            this.notificationService.show(
                new Notification('success', 'Ces expériences ont bien été supprimées')
            );

            __this.userService.getExperiences().subscribe((res: Response) => {
                __this.experiences = res.json();
            });
        });
    }
}