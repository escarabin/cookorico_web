import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { Response } from '@angular/http';

// Components
import { ReferenceService } from '../../services/reference.service';
import { SearchService } from '../../services/search.service';

import appGlobals = require('./../../globals');

@Component({
    providers: [ ReferenceService ],
    selector: 'job-search-sidebar',
    templateUrl: '../templates/job-search-sidebar.component.html'
})

export class JobSearchSidebarComponent {
    contractTypes: any = [];
    jobNamings: any = [];
    xpLevels: any = [];
    public isxpLevelCollapsed:boolean = false;
    public isContractTypeCollapsed:boolean = false;
    public isJobNamingCollapsed:boolean = false;
    jobNamingList: any = [];
    jobNamingTextList: any = [];
    contractTypeList: any = [];
    xpLevelList: any = [];
    parametersList: any = {};
    searchText: string;
    jobs: any = [];
    place: any = [];
    locationName: string;
    isMobileSearchVisible: boolean = false;
    map: any;

    /**
     * By default, populate place object with France coords
     */
    zoom: number = 4;
    mapLat: number = 46.227638;
    mapLng: number = 2.213749;

    mobileMenuHidden: boolean = true;
    @Output() searchParametersChanged: EventEmitter = new EventEmitter();

    constructor(private referenceService: ReferenceService,
                @Inject(SearchService) SearchService,
                private searchService: SearchService) {
        let __this = this;

        /**
         * Subscribe to new search parameters coming from other components
         */
        SearchService.parametersEmitter.subscribe(
            params => {
                referenceService.getAllJobNamings().subscribe((jobNamingList: Response) => {
                    __this.jobNamings = jobNamingList.json();

                    for (let i = 0; i < __this.jobNamings.length; i++) {
                        __this.jobNamingTextList.push(__this.jobNamings[i].title);
                    }

                    referenceService.getAllJobXpLevels().subscribe((xpLevelList: Response) => {
                        __this.xpLevels = xpLevelList.json();

                        referenceService.getAllContractTypes().subscribe((contractTypesList: Response) => {
                            __this.contractTypes = contractTypesList.json();

                            /**
                             * Parse place infos
                             */
                            __this.place = params['place'];
                            if (params['place']) {
                                __this.locationName = __this.place['formatted_address'];
                                __this.mapLat = __this.place['geometry']['location'].lat();
                                __this.mapLng = __this.place['geometry']['location'].lng();
                                __this.zoom = 8;
                            }

                            for (let i = 0; i < params['contractTypeIdList']; i++) {
                                let paramId = params['contractTypeIdList'][i];
                                __this.contractTypeList[paramId] = this.getParamTitleFromId(paramId, 'contractType');
                            }

                            for (let i = 0; i < params['xpLevelIdList']; i++) {
                                let paramId = params['xpLevelIdList'][i];
                                __this.xpLevelList[paramId] = this.getParamTitleFromId(paramId, 'xpLevel');
                            }

                            for (let i = 0; i < params['jobNamingIdList']; i++) {
                                let paramId = params['jobNamingIdList'][i];
                                let test = this.getParamTitleFromId(paramId, 'jobNaming');
                                __this.jobNamingList[paramId] = test;
                            }

                            console.log(Object.keys(__this.jobNamingList)[0], __this.jobNamingList[Object.keys(__this.jobNamingList)[0]], __this.jobNamingList);
                            // __this.updateSearchParameter('jobNaming', Object.keys(__this.jobNamingList)[0], __this.jobNamingList[Object.keys(__this.jobNamingList)[0]]);
                            window.scrollTo(0, 10);
                        });
                    });
                });
            }
        );

        /**
         * Subscribe to new search results coming from search.service
         */
        SearchService.resultsEmitter.subscribe((results) => {
            __this.jobs = results.json();
        });
    }

    ngAfterViewInit() {
        /**
         * Init Google Map
         */
        let latLng = new google.maps.LatLng(this.mapLat, this.mapLng);
        let myOptions = {
            zoom      : this.zoom,
            center    : latLng,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            maxZoom   : 20
        };
        this.map  = new google.maps.Map(document.getElementById('google-map'), myOptions);

        this.map.setOptions({styles: appGlobals.googleMapStyles});
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
            case "xpLevel":
                for (let i = 0; i < this.xpLevels.length; i++) {
                    if (this.xpLevels[i].id == parameterId) {
                        return this.xpLevels[i]['title'];
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
            case "xpLevel":
                if (!this.xpLevelList[parameterId]) {
                    this.xpLevelList[parameterId] = parameterTitle;
                }
                else {
                    delete this.xpLevelList[parameterId];
                }
                break;
        }

        this.parametersList['contractTypeList'] = this.contractTypeList;
        this.parametersList['jobNamingList'] = this.jobNamingList;
        this.parametersList['xpLevelList'] = this.xpLevelList;

        this.searchService.search(this.parametersList);
    }

    mapClicked() {
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

        var panPoint = new google.maps.LatLng(this.mapLat, this.mapLng);
        this.map.panTo(panPoint);
        this.map.setZoom(this.zoom);
    }
}