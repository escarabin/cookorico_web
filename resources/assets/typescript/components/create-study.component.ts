import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';

// Models
import { Study } from './../models/study';

// Components
import { BusinessSelectComponent } from './business-select.component';

@Component({
    selector: 'create-experience',
    providers: [ReferenceService, UserService],
    directives: [RouterLink, BusinessSelectComponent],
    templateUrl: '../templates/create-study.component.html'
})

export class CreateStudyComponent {
    diplomas: any;

    study:Study = new Study();

    constructor(private referenceService: ReferenceService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllDiplomas().subscribe((res: Response) => {
            __this.diplomas = res.json();
        });
    }

    submitStudy() {
        let __this = this;

        this.userService.createStudy(__this.study).subscribe((res: Response) => {
            console.log(res.json());
        })
    }

    handleBusinessIdChange(businessId) {
        this.study.business_id = businessId;
    }
}