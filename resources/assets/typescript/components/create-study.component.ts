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
    templateUrl: '../templates/create-study.component.html'
})

export class CreateStudyComponent {
    diplomas: any;

    // Form data
    diplomaId: string;
    businessId: string;
    startDate: string;
    endDate: string;
    place: string;
    description: string;

    constructor(private referenceService: ReferenceService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllDiplomas().subscribe((res: Response) => {
            __this.diplomas = res.json();
        });
    }

    submitStudy() {
        let __this = this;

        this.userService.createStudy(__this.diplomaId,
            __this.businessId,
            __this.startDate,
            __this.endDate,
            __this.place,
            __this.description).subscribe((res: Response) => {
            console.log(res.json());
        })
    }
}