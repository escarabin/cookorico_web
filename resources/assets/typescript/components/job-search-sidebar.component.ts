import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouteParams } from '@angular/router-deprecated'
import { Response } from '@angular/http';
import { CollapseDirective } from 'ng2-bootstrap';

// Components
import { ReferenceService } from './../services/reference.service';

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
    public isStudyLevelCollapsed:boolean = true;
    public isContractTypeCollapsed:boolean = true;
    public isJobNamingCollapsed:boolean = true;
    placeIdList: any = [];
    jobNamingIdList: any = [];
    contractTypeIdList: any = [];
    searchText: string;
    @Output() searchParametersChanged: EventEmitter = new EventEmitter();

    constructor(private referenceService: ReferenceService,
                private routeParams: RouteParams) {
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

        this.placeIdList.push(parseInt(routeParams.get('placeId')));
        this.jobNamingIdList.push(parseInt(routeParams.get('jobNamingId')));
        this.contractTypeIdList.push(parseInt(routeParams.get('contractTypeId')));
        this.searchText = routeParams.get('searchText');
    }

    toggleSearchParameter(parameterType: string, parameterValue: string) {
        switch(parameterType) {
            case "contractType":
                this.contractTypeIdList.push(parseInt(parameterValue));
                break;
            case "jobNaming":
                this.jobNamingIdList.push(parseInt(parameterValue));
                break;
        }

        this.searchParametersChanged.emit(this.contractTypeIdList, this.jobNamingIdList);
    }
}