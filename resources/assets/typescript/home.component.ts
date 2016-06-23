import { Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { JobService } from './job.service';

@Component({
    providers: [JobService],
    directives: [RouterLink],
    selector: 'home',
    templateUrl: '../templates/home.component.html',
})

export class HomeComponent {
    jobs: any;

    constructor(private jobService: JobService) {
        let __this = this;

        jobService.getAllJobs().subscribe((res: Response) => {
            __this.jobs = res.json();
        });
    }
}