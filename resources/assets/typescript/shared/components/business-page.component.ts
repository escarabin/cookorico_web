import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// Services
import { JobService } from './../../services/job.service';
import { BusinessService } from './../../services/business.service';

@Component({
    selector: 'business-page',
    providers: [ JobService, BusinessService ],
    templateUrl: '../templates/business-page.component.html',
})

export class BusinessPageComponent {
    businessId: number;
    jobs: any = [];
    business: any = [];

    constructor(private jobService: JobService,
                private businessService: BusinessService,
                private route: ActivatedRoute) {
        let __this = this;

        /**
         * Get all jobs related to current business
         */
        route.params.subscribe(params => {
            if (params) {
                __this.businessId = params['businessId'];

                /**
                 * Get jobs listing
                 */
                __this.jobService.getJobsFromBusiness(__this.businessId).subscribe((results:Response) => {
                    __this.jobs = results.json();
                });

                /**
                 * Get specific business data
                 */
                __this.businessService.get(__this.businessId).subscribe((res:Response) => {
                    __this.business = res.json();

                    console.log('business is ', __this.business);
                });
            }
        });
    }
}