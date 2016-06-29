import { Component } from '@angular/core';
import { RouterLink, RouteParams, Response } from '@angular/router-deprecated'

// Services
import { JobService } from './job.service';

@Component({
    directives: [RouterLink],
    selector: 'new-application-form',
    templateUrl: '../templates/new-application-form.component.html',
})

export class NewApplicationFormComponent {
    jobId:string;
    comment: string;

    constructor(private routeParams: RouteParams,
                private jobService: JobService) {
        this.jobId = routeParams.get("jobId");
    }

    submitApplication() {
        let __this = this;
        this.jobService.apply(__this.jobId).subscribe((res: Response) => {
            let user = res.json();

            console.log('user', user);
        });
    }
}