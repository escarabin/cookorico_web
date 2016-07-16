import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';
import { JobPostService } from './../services/job-post.service';

// Models
import { JobPost } from './../models/job-post';

// Components
import { BusinessSelectComponent } from './business-select.component';

@Component({
    selector: 'create-job-post',
    providers: [ReferenceService, UserService, JobPostService],
    directives: [RouterLink, BusinessSelectComponent],
    templateUrl: '../templates/create-job-post.component.html'
})

export class CreateJobPostComponent {
    diplomas: any = [];
    jobNamings: any = [];
    alertFrequencies: any = [];
    contractTypes: any = [];
    jobTypes: any = [];
    studyLevels: any = [];
    jobXpLevels: any = [];

    jobPost:JobPost = new JobPost();

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private jobPostService: JobPostService) {
        let __this = this;

        this.referenceService.getAllDiplomas().subscribe((res: Response) => {
            __this.diplomas = res.json();
        });

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        });

        this.referenceService.getAllAlertFrequencies().subscribe((res: Response) => {
            __this.alertFrequencies = res.json();
        });

        this.referenceService.getAllContractTypes().subscribe((res: Response) => {
            __this.contractTypes = res.json();
        });

        this.referenceService.getAllJobTypes().subscribe((res: Response) => {
            __this.jobTypes = res.json();
        });

        this.referenceService.getAllStudyLevels().subscribe((res: Response) => {
            __this.studyLevels = res.json();
        });

        this.referenceService.getAllJobXpLevels().subscribe((res: Response) => {
            __this.jobXpLevels = res.json();
        });
    }

    submitJobPost() {
        let __this = this;

        console.log(__this.jobPost);

        this.jobPostService.create(__this.jobPost).subscribe((res: Response) => {
            console.log(res.json());
        });
    }

    handleBusinessIdChange(businessId) {
        this.jobPost.business_id = businessId;
    }
}