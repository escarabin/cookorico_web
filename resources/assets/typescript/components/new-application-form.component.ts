import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouteParams, Response } from '@angular/router-deprecated'

// Services
import { JobService } from './../services/job.service';

@Component({
    directives: [RouterLink],
    providers: [JobService],
    selector: 'new-application-form',
    templateUrl: '../templates/new-application-form.component.html',
})

export class NewApplicationFormComponent {
    @Input jobId:string;
    comment: string;

    constructor(private routeParams: RouteParams,
                private jobService: JobService,
                private router: Router) {
        this.jobId = routeParams.get("jobId");
    }

    submitApplication() {
        let __this = this;
        this.jobService.apply(__this.jobId, __this.comment).subscribe((res: Response) => {
            this.router.navigate(['/Profile/Applications']);
        });
    }
}