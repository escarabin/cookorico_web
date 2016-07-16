import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';

// Models
import { JobPost } from './../models/job-post';

@Component({
    selector: 'create-job-post',
    providers: [ReferenceService, UserService],
    directives: [RouterLink],
    templateUrl: '../templates/create-job-post.component.html'
})

export class CreateStudyComponent {
    diplomas: any;

    jobPost:JobPost = new JobPost();

    constructor(private referenceService: ReferenceService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllDiplomas().subscribe((res: Response) => {
            __this.diplomas = res.json();
        });
    }

    submitJobPost() {
        let __this = this;
    }
}