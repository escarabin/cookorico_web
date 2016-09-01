import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SearchService {
    public parametersEmitter = new EventEmitter<any>();

    constructor() {

    }

    public sendSearchParameters(placeId:string, jobNamingListId: any, contractTypeIdList: any, studyLevelId: string){
        this.parametersEmitter.emit({
            'placeId': placeId,
            'jobNamingListId': jobNamingListId,
            'contractTypeIdList': contractTypeIdList,
            'studyLevelId': studyLevelId
        });
    }
}