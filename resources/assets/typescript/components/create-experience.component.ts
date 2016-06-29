import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';

@Component({
    selector: 'create-experience',
    providers: [ReferenceService, UserService],
    directives: [RouterLink],
    templateUrl: '../templates/create-experience.component.html'
})

export class CreateExperienceComponent {
    jobNamings: any;

    // Form data
    jobNamingId: string;
    businessId: string;
    startDate: string;
    endDate: string;
    place: string;
    description: string;

    constructor(private referenceService: ReferenceService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        })
    }

    submitExperience() {
        let __this = this;

        this.userService.createExperience(__this.jobNamingId,
            __this.businessId,
            __this.startDate,
            __this.endDate,
            __this.place,
            __this.description).subscribe((res: Response) => {
            __this.jobNamings = res.json();
        })
    }
}