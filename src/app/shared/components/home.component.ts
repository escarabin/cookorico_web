import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { JobService } from './../../services/job.service';

@Component({
    selector: 'home',
    templateUrl: '../../../templates/home.component.html',
})

export class HomeComponent {
    jobs: any = [];
    innerHeight: number;

    constructor(private jobService: JobService) {
        let __this = this;

        jobService.getAllJobs().subscribe((res: Response) => {
            __this.jobs = res.json();
        });
    }

    ngOnInit(event) {
        this.fitMainDivToWindow();
    }

    fitMainDivToWindow() {
        if (window.innerHeight > 400) {
            this.innerHeight = window.innerHeight;
        }
        else {
            this.innerHeight = 300;
        }

        document.getElementById('home-heading').setAttribute("style","height:" + this.innerHeight + "px;");
        document.getElementById('home-heading-title').setAttribute("style","margin-top:" + this.innerHeight / 11 + "px;");
    }
}