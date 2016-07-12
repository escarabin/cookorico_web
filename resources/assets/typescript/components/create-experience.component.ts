import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink, RouteParams } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';

// Directives
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

// Models
import { Experience } from './../models/experience';

// Components
import { BusinessSelectComponent } from './business-select.component';

@Component({
    selector: 'create-experience',
    providers: [ReferenceService, UserService],
    directives: [RouterLink, GoogleplaceDirective, BusinessSelectComponent],
    templateUrl: '../templates/create-experience.component.html'
})

export class CreateExperienceComponent {
    jobNamings: any;
    public adress: Object;
    experience:Experience = new Experience();

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private routeParams: RouteParams) {
        let __this = this;

        this.experience.id = routeParams.get("experienceId");

        if (this.experience.id) {
            // Editing a specific experience, let's retrieve it's data
            this.userService.getExperience(__this.experience.id).subscribe((res: Response) => {
                __this.experience = res.json();
            });
        }

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        })
    }

    parseAdress(place:Object) {
        var location = place['geometry']['location'];
        this.experience.lat =  location.lat();
        this.experience.lon = location.lng();
    }

    submitExperience() {
        let __this = this;

        this.userService.createExperience(__this.experience.job_naming_id,
            __this.experience.business_id,
            __this.experience.start_date,
            __this.experience.end_date,
            __this.experience.adress,
            __this.experience.lat,
            __this.experience.lon,
            __this.experience.description).subscribe((res: Response) => {
            console.log(res.json());
        })
    }
}