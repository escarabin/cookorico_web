import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// Services
import { JobService } from './job.service';

@Component({
    directives: [RouterLink],
    providers: [JobService],
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