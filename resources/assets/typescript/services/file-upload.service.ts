import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class FileUploadService {
    policy: String;
    s3signature: String;

    constructor(private http: Http) {

    }

    //Map the policy and signature
    handleResponse(response){
        this.policy = response.policy;
        this.s3signature = response.signature;
    }

    //fetch policy and signature from the server
    //If you are not familiar with ngOnInit
    //This function gets fired at the beginning
    //Hence this is the best place to fetch the signature and policy
    ngOnInit() {
        // this._uploadService.getPolicy('test').subscribe(response => this.handleResponse(response) );
    }

    //Function to build timestamp
    buildTimestamp(){
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        var timestamp = year+month+day;
        return timestamp;
    }

    upload(file: File){
        let formData: FormData = new FormData();
        let xhr: XMLHttpRequest = new XMLHttpRequest();

        //Build AWS S3 Request
        formData.append('key','test/' + file.name);
        formData.append('acl','private');
        formData.append('Content-Type','image/jpeg');
        formData.append('x-amz-meta-uuid','14365123651274');
        //Put in your access key here
        formData.append('X-Amz-Credential','YOURAWSACCESSKE/'+this.buildTimestamp()+'/eu-central-1/s3/aws4_request');

        formData.append('X-Amz-Algorithm','AWS4-HMAC-SHA256');
        formData.append('X-Amz-Date',this.buildTimestamp()+'T000000Z');
        formData.append('x-amz-meta-tag','');
        /*formData.append('Policy',this.policy);
        formData.append('X-Amz-Signature',this.s3signature);*/
        formData.append('file',file);

        xhr.open('POST','http://oechr-business-pictures.s3.amazonaws.com/',true);
        xhr.send(formData);
    }
}