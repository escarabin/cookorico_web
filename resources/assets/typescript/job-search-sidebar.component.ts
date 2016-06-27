import { Component } from '@angular/core';
import { RouterLink, Response } from '@angular/router-deprecated'
import { CollapseDirective } from 'ng2-bootstrap';

// Components
import { ReferenceService } from './reference.service';

@Component({
    directives: [RouterLink, CollapseDirective],
    providers: [ReferenceService],
    selector: 'job-search-sidebar',
    templateUrl: '../templates/job-search-sidebar.component.html',
})

export class JobSearchSidebarComponent {
    contractTypes: any;
    jobNamings: any;
    studyLevels: any;

    constructor(private referenceService: ReferenceService) {
        let __this = this;

        referenceService.getAllContractTypes().subscribe((res: Response) => {
            __this.contractTypes = res.json();
        });

        referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        });

        referenceService.getAllStudyLevels().subscribe((res: Response) => {
            __this.studyLevels = res.json();
        });
    }
}