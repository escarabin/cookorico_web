import { Component } from '@angular/core';
import { RouterLink, Response } from '@angular/router-deprecated'

// Components
import { ReferenceService } from './reference.service';

@Component({
    directives: [RouterLink],
    providers: [ReferenceService],
    selector: 'job-search-sidebar',
    templateUrl: '../templates/job-search-sidebar.component.html',
})

export class JobSearchSidebarComponent {
    contractTypes: any;
    jobNamings: any;

    constructor(private referenceService: ReferenceService) {
        let __this = this;

        referenceService.getAllContractTypes().subscribe((res: Response) => {
            __this.contractTypes = res.json();
        });

        referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        });
    }
}