System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var FileUploadService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            FileUploadService = (function () {
                function FileUploadService(http) {
                    this.http = http;
                }
                //Map the policy and signature
                FileUploadService.prototype.handleResponse = function (response) {
                    this.policy = response.policy;
                    this.s3signature = response.signature;
                };
                //fetch policy and signature from the server
                //If you are not familiar with ngOnInit
                //This function gets fired at the beginning
                //Hence this is the best place to fetch the signature and policy
                FileUploadService.prototype.ngOnInit = function () {
                    // this._uploadService.getPolicy('test').subscribe(response => this.handleResponse(response) );
                };
                //Function to build timestamp
                FileUploadService.prototype.buildTimestamp = function () {
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = ("0" + (date.getMonth() + 1)).slice(-2);
                    var day = ("0" + date.getDate()).slice(-2);
                    var timestamp = year + month + day;
                    return timestamp;
                };
                FileUploadService.prototype.upload = function (file) {
                    var formData = new FormData();
                    var xhr = new XMLHttpRequest();
                    //Build AWS S3 Request
                    formData.append('key', 'test/' + file.name);
                    formData.append('acl', 'private');
                    formData.append('Content-Type', 'image/jpeg');
                    formData.append('x-amz-meta-uuid', '14365123651274');
                    //Put in your access key here
                    formData.append('X-Amz-Credential', 'YOURAWSACCESSKE/' + this.buildTimestamp() + '/eu-central-1/s3/aws4_request');
                    formData.append('X-Amz-Algorithm', 'AWS4-HMAC-SHA256');
                    formData.append('X-Amz-Date', this.buildTimestamp() + 'T000000Z');
                    formData.append('x-amz-meta-tag', '');
                    /*formData.append('Policy',this.policy);
                    formData.append('X-Amz-Signature',this.s3signature);*/
                    formData.append('file', file);
                    xhr.open('POST', 'http://oechr-business-pictures.s3.amazonaws.com/', true);
                    xhr.send(formData);
                };
                FileUploadService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FileUploadService);
                return FileUploadService;
            }());
            exports_1("FileUploadService", FileUploadService);
        }
    }
});
