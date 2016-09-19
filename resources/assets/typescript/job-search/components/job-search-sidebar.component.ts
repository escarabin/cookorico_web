import { Component, Output, EventEmitter, Inject, ChangeDetectorRef } from '@angular/core';
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
    jobNamingList: any = [];
    jobNamingTextList: any = [];
    contractTypeList: any = [];
    studyLevelList: any = [];
    parametersList: any = {};
    searchText: string;
    jobs: any = [];
    isMobileSearchVisible: boolean = false;

    /**
     * By default, populate place object with France coords
     */
    zoom: number = 4;
    mapLat: number = 46.227638;
    mapLng: number = 2.213749;

    mobileMenuHidden: boolean = true;
    @Output() searchParametersChanged: EventEmitter = new EventEmitter();

    constructor(private referenceService: ReferenceService,
                private jobService: JobService,
                private ref: ChangeDetectorRef,
                @Inject(SearchService) SearchService,
                private searchService: SearchService) {
        let __this = this;

        /**
         * Retrieve references
         */
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

        /**
         * Subscribe to new search parameters coming from other components
         */
        SearchService.parametersEmitter.subscribe(
            res => {
                for (let i = 0; i < res['contractTypeIdList']; i++) {
                    let paramId = res['contractTypeIdList'][i];
                    __this.contractTypeList[paramId] = this.getParamTitleFromId(paramId, 'contractType');
                }

                for (let i = 0; i < res['studyLevelIdList']; i++) {
                    let paramId = res['studyLevelIdList'][i];
                    __this.studyLevelList[paramId] = this.getParamTitleFromId(paramId, 'studyLevel');
                }

                for (let i = 0; i < res['jobNamingIdList']; i++) {
                    let paramId = res['jobNamingIdList'][i];
                    __this.jobNamingList[paramId] = this.getParamTitleFromId(paramId, 'jobNaming');
                }
            }
        );

        /**
         * Subscribe to new search results coming from search.service
         */
        SearchService.resultsEmitter.subscribe((results) => {
            __this.jobs = results.json();
        });
    }

    /**
     * Get parameter title from its id
     * @param parameterId
     * @param parameterType
     */
    getParamTitleFromId(parameterId: number, parameterType: string) {
        switch(parameterType) {
            case "jobNaming":
                for (let i = 0; i < this.jobNamings.length; i++) {
                    if (this.jobNamings[i].id == parameterId) {
                        return this.jobNamings[i]['title'];
                    }
                }

                break;
            case "contractType":
                for (let i = 0; i < this.contractTypes.length; i++) {
                    if (this.contractTypes[i].id == parameterId) {
                        return this.contractTypes[i]['title'];
                    }
                }
                break;
            case "studyLevel":
                for (let i = 0; i < this.studyLevels.length; i++) {
                    if (this.studyLevels[i].id == parameterId) {
                        return this.studyLevels[i]['title'];
                    }
                }
                break;
        }
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
     * Function used to get actual length of parameters arrays
     * (beause .length only gives the next index available in the array)
     *  @param parametersArray
     */
    parametersCount(parametersArray: any) {
        for (var i = 0, count = 0; i < parametersArray.length; i++, parametersArray[i] !== undefined && count++);

        return count;
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
            case "jobNaming":
                if (!this.jobNamingList[parameterId]) {
                    if (parameterTitle.length > 25) {
                        this.jobNamingList[parameterId] = parameterTitle.substr(0, 25) + '...';
                    }
                    else {
                        this.jobNamingList[parameterId] = parameterTitle;
                    }
                }
                else {
                    delete this.jobNamingList[parameterId];
                }

                break;
            case "contractType":
                if (!this.contractTypeList[parameterId]) {
                    this.contractTypeList[parameterId] = parameterTitle;
                }
                else {
                    delete this.contractTypeList[parameterId];
                }
                break;
            case "studyLevel":
                if (!this.studyLevelList[parameterId]) {
                    this.studyLevelList[parameterId] = parameterTitle;
                }
                else {
                    delete this.studyLevelList[parameterId];
                }
                break;
        }

        this.parametersList['contractTypeList'] = this.contractTypeList;
        this.parametersList['jobNamingList'] = this.jobNamingList;
        this.parametersList['studyLevelList'] = this.studyLevelList;

        // TODO : remove that shit
        this.jobService.getAllJobs().subscribe((res: Response) => {
            this.jobs = res.json();
        });

        this.searchService.search(this.parametersList);
        this.ref.detectChanges();
    }

    mapClicked(event) {
        this.searchService.toggleMapSearch(this.parametersList['place']);
    }

    /**
     * Function triggered after user found a place
     * @param place
     */
    parseAdress(place: Object) {
        this.parametersList['place'] = place;
        this.searchService.search(this.parametersList);
        this.mapLat = place['geometry']['location'].lat();
        this.mapLng = place['geometry']['location'].lng();
        this.zoom = 8;

        this.ref.detectChanges();
    }
}