import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';

@Component({
    selector: 'create-experience',
    providers: [ReferenceService],
    directives: [RouterLink],
    templateUrl: '../templates/create-experience.component.html'
})

export class CreateExperienceComponent {
    jobNamings: any;
    submitExperienceUrl: string;

    // Form data
    jobId: string;
    business: string;
    startDate: string;
    endDate: string;
    place: string;
    description: string;

    constructor(private referenceService: ReferenceService) {
        let __this = this;

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        })
    }

    submitExperience() {

    }
}