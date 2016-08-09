import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouteParams } from '@angular/router-deprecated'
import { Response } from '@angular/http';
import { CollapseDirective } from 'ng2-bootstrap';

// Components
import { ReferenceService } from './../services/reference.service';

// Directives
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

// TODO : remove this service
import { JobService } from './../services/job.service';

@Component({
    directives: [RouterLink,
                 CollapseDirective,
                 GoogleplaceDirective],
    providers: [ReferenceService, JobService],
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
    place: any = [];
    jobNamingIdList: any = [];
    contractTypeIdList: any = [];
    studyLevelIdList: any = [];
    searchText: string;
    jobs: any = [];
    @Output() searchParametersChanged: EventEmitter = new EventEmitter();

    constructor(private referenceService: ReferenceService,
                private jobService: JobService,
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

        jobService.getAllJobs().subscribe((res: Response) => {
            __this.jobs = res.json();
        });

        this.studyLevelIdList.push(parseInt(routeParams.get('studyLevelId')));
        this.jobNamingIdList.push(parseInt(routeParams.get('jobNamingId')));
        this.contractTypeIdList.push(parseInt(routeParams.get('contractTypeId')));
        this.searchText = routeParams.get('searchText');
    }

    /**
     * Function used to get jobs count regarding given parameters
     * @param parameterKey
     * @param parameterValue
     * @returns {number}
     */
    jobsCountFromParameterValue(parameterKey: string, parameterValue: number) {
        let jobsCount = 0;

        for (let i = 0; i < this.jobs.length; i++) {
            if (this.jobs[i][parameterKey] == parameterValue) {
                jobsCount += 1;
            }
        }

        return jobsCount;
    }

    updateSearchParameter(parameterType?: string, parameterValue?: string) {
        /**
         * Add or remove the parameters from their respective arrays
         */
        switch(parameterType) {
            case "contractType":
                let contractTypeIndex = this.contractTypeIdList.indexOf(parameterValue);
                if (contractTypeIndex == -1) {
                    this.contractTypeIdList.push(parseInt(parameterValue));
                }
                else {
                    this.contractTypeIdList.splice(contractTypeIndex, 1);
                }
                break;
            case "jobNaming":
                let jobNamingIndex = this.contractTypeIdList.indexOf(parameterValue);
                if (jobNamingIndex == -1) {
                    this.jobNamingIdList.push(parseInt(parameterValue));
                }
                else {
                    this.jobNamingIdList.splice(jobNamingIndex, 1);
                }
                break;
            case "studyLevel":
                let studyLevelIndex = this.studyLevelIdList.indexOf(parameterValue);
                if (studyLevelIndex == -1) {
                    this.studyLevelIdList.push(parseInt(parameterValue));
                }
                else {
                    this.studyLevelIdList.splice(studyLevelIndex, 1);
                }
                break;
        }

        let parametersArray = {};
        parametersArray['contractTypeIdList'] = this.contractTypeIdList;
        parametersArray['jobNamingIdList'] = this.jobNamingIdList;
        parametersArray['studyLevelIdList'] = this.studyLevelIdList;
        parametersArray['place'] = this.place;

        // TODO : remove that shit
        this.jobService.getAllJobs().subscribe((res: Response) => {
            this.jobs = res.json();

            console.log(this.jobs);
        });

        this.searchParametersChanged.emit(parametersArray);
    }

    parseAdress(place: Object) {
        this.place = place;
        this.updateSearchParameter();
    }
}