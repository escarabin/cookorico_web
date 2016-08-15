import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouteParams }
    from '@angular/router-deprecated';

// Services
import { JobService } from './../services/job.service';

@Component({
    providers: [JobService],
    inputs: ['jobId'],
    selector: 'job',
    templateUrl: '../templates/job.component.html',
})

export class JobComponent {
    jobId:string;
    job: any;
    user: any;

    constructor(private routeParams: RouteParams,
                private jobService: JobService) {
        let __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.jobId = routeParams.get("jobId");

        jobService.getJob(__this.jobId).subscribe((res: Response) => {
            __this.job = res.json();
        });
    }
}