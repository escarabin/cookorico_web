import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Response } from '@angular/http';

// Components
import { ReferenceService } from '../../services/reference.service';

// TODO : remove this service
import { JobService } from '../../services/job.service';
import { SearchService } from '../../services/search.service';

@Component({
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
    jobNamingTextList: any = ["Cuisinier", "Chef de salle", "Serveur", "Dentiste"];
    contractTypeIdList: any = [];
    studyLevelIdList: any = [];
    searchText: string;
    jobs: any = [];
    @Output() searchParametersChanged: EventEmitter = new EventEmitter();

    constructor(private referenceService: ReferenceService,
                private jobService: JobService,
                @Inject(SearchService) SearchService,
                private route: ActivatedRoute) {
        let __this = this;

        SearchService.parametersEmitter.subscribe(res => console.log('yihaaaaa', res));

        referenceService.getAllContractTypes().subscribe((res: Response) => {
            __this.contractTypes = res.json();
        });

        referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();

            for (let i = 0; i < __this.jobNamings.length; i++) {
                __this.jobNamingTextList.push(__this.jobNamings[i].title);
            }
        });

        referenceService.getAllStudyLevels().subscribe((res: Response) => {
            __this.studyLevels = res.json();
        });

        jobService.getAllJobs().subscribe((res: Response) => {
            __this.jobs = res.json();
        });

        route.params.subscribe(params => {
            if (params) {
                this.studyLevelIdList.push(parseInt(route['studyLevelId']));
                this.jobNamingIdList.push(parseInt(route['jobNamingId']));
                this.contractTypeIdList.push(parseInt(route['contractTypeId']));
                this.searchText = route['searchText'];
            }
        });
    }

    /**
     * ng2-select functions
     * @param value
     */
    public selected(value:any):void {
        console.log('Selected value is: ', value);
    }

    public removed(value:any):void {
        console.log('Removed value is: ', value);
    }

    public refreshValue(value:any):void {
        this.value = value;
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

    /**
     * Update search with new parameters
     * @param parameterType
     * @param parameterValue
     */
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