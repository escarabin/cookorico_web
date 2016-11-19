import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// Services
import { JobService } from './../../services/job.service';
import { BusinessService } from './../../services/business.service';
import { ClubService } from './../../services/club.service';

@Component({
    selector: 'business-page',
    templateUrl: '../../../templates/business-page.component.html',
})

export class BusinessPageComponent {
    businessId: number;
    clubId: number;
    jobs: any = [];
    business: any = {};
    club: any = {};
    user: any = {};
    scrollTop: number = 0;

    constructor(private jobService: JobService,
                private businessService: BusinessService,
                private clubService: ClubService,
                private route: ActivatedRoute) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        /**
         * Get all jobs related to current business
         */
        route.params.subscribe(params => {
            if (params) {
                if (params['businessId']) {
                    __this.businessId = params['businessId'];

                    /**
                     * Get jobs listing from specific business
                     */
                    __this.jobService.getJobsFromBusiness(__this.businessId).subscribe((results:Response) => {
                        __this.jobs = results.json();
                    });

                    /**
                     * Get specific business data
                     */
                    __this.businessService.get(__this.businessId).subscribe((res:Response) => {
                        __this.business = res.json();
                    });
                }
                else if (params['clubId']) {
                    __this.clubId = params['clubId'];

                    /**
                     * Get jobs listing from specific club
                     */
                    __this.jobService.getJobsFromClub(__this.clubId).subscribe((results:Response) => {
                        __this.jobs = results.json();
                    });

                    /**
                     * Get specific club data
                     */
                    __this.clubService.getClub(__this.clubId).subscribe((res:Response) => {
                        __this.club = res.json();
                    });
                }
            }
        });
    }
}