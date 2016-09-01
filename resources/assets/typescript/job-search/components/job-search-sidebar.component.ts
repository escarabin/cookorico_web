import { Component, Output, EventEmitter, Inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Response } from '@angular/http';

// Components
import { ReferenceService } from '../../services/reference.service';

// TODO : remove this service
import { JobService } from '../../services/job.service';
import { SearchService } from '../../services/search.service';

@Component({
    providers: [ ReferenceService, JobService ],
    selector: 'job-search-sidebar',
    templateUrl: '../templates/job-search-sidebar.component.html',
})

export class JobSearchSidebarComponent {
    contractTypes: any = [];
    jobNamings: any = [];
    studyLevels: any = [];
    public isStudyLevelCollapsed:boolean = false;
    public isContractTypeCollapsed:boolean = false;
    public isJobNamingCollapsed:boolean = false;
    place: any = [];
    jobNamingList: any = [];
    jobNamingTextList: any = [];
    contractTypeList: any = [];
    studyLevelList: any = [];
    searchText: string;
    jobs: any = [];
    @Output() searchParametersChanged: EventEmitter = new EventEmitter();

    constructor(private referenceService: ReferenceService,
                private jobService: JobService,
                private ref: ChangeDetectorRef,
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
            /*if (params) {
                this.studyLevelList.push(parseInt(params['studyLevelId']));
                this.jobNamingList.push(parseInt(params['jobNamingId']));
                this.contractTypeList.push(parseInt(params['contractTypeId']));
                this.searchText = params['searchText'];
            }*/
        });

        SearchService.parametersEmitter.emit('test');
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
     * @param parameterId
     * @param parameterTitle
     */
    updateSearchParameter(parameterType?: string, parameterId?: string, parameterTitle?: string) {
        /**
         * Add or remove the parameters from their respective arrays
         */
        switch(parameterType) {
            case "contractType":
                let jobNamingIndex = this.jobNamingList.indexOf(parameterId);
                if (jobNamingIndex == -1) {
                    this.jobNamingList[parameterId] = parameterTitle;
                }
                else {
                    this.jobNamingList.splice(jobNamingIndex, 1);
                }

                break;
            case "jobNaming":
                let contractTypeIndex = this.contractTypeList.indexOf(parameterId);
                if (contractTypeIndex == -1) {
                    this.contractTypeList[parameterId] = parameterTitle;
                }
                else {
                    this.contractTypeList.splice(contractTypeIndex, 1);
                }
                break;
            case "studyLevel":
                let studyLevelIndex = this.studyLevelList.indexOf(parameterId);
                if (studyLevelIndex == -1) {
                    this.studyLevelList[parameterId] = parameterTitle;
                }
                else {
                    this.studyLevelList.splice(studyLevelIndex, 1);
                }
                break;
        }

        let parametersArray = {};
        parametersArray['contractTypeList'] = this.contractTypeList;
        parametersArray['jobNamingList'] = this.jobNamingList;
        parametersArray['studyLevelList'] = this.studyLevelList;
        parametersArray['place'] = this.place;

        // TODO : remove that shit
        this.jobService.getAllJobs().subscribe((res: Response) => {
            this.jobs = res.json();
        });

        console.log('tsete', this.studyLevelList);

        this.searchParametersChanged.emit(parametersArray);
        this.ref.detectChanges();

        // SearchService.parametersEmitter.emit(parametersArray);
    }

    parseAdress(place: Object) {
        this.place = place;
        this.updateSearchParameter();
    }
}