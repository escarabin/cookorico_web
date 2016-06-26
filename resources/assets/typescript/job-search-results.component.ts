import { Component } from '@angular/core';
import { Response } from '@angular/router-deprecated';

// Services
import { JobService } from './job.service';

@Component({
    selector: 'job-search-results',
    providers: [JobService],
    templateUrl: '../templates/job-search-results.component.html',
})

export class JobSearchResultsComponent {
    jobs: any;

    constructor(private jobService: JobService) {
        let __this = this;

        jobService.getAllJobs().subscribe((res: Response) => {
            __this.jobs = res.json();
        });
    }
}