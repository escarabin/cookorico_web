import { Component } from '@angular/core';
import { Response } from '@angular/router-deprecated';

// Services
import { JobService } from './../services/job.service';

// Componets
import { JobPreviewComponent } from './job-preview.component';

@Component({
    selector: 'job-search-results',
    directives: [JobPreviewComponent],
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