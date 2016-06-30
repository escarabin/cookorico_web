import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouteParams, RouterLink }
    from '@angular/router-deprecated';

// Services
import { JobService } from './../services/job.service';

// Components
import { UserSidebarComponent } from './user-sidebar.component'
import { JobSearchSidebarComponent } from './job-search-sidebar.component'

@Component({
    providers: [JobService],
    directives: [RouterLink, JobSearchSidebarComponent],
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
            console.log(__this.job);
        });
    }
}