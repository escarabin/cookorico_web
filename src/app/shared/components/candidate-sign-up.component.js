"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var appGlobals = require('../../globals');
// Models
var user_1 = require('./../../models/user');
var notification_1 = require('../../models/notification');
// Image cropping
var ng2_img_cropper_1 = require('ng2-img-cropper');
// File drop zone
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var CandidateSignUpComponent = (function () {
    function CandidateSignUpComponent(referenceService, ref, router, notificationService, userService) {
        this.referenceService = referenceService;
        this.ref = ref;
        this.router = router;
        this.notificationService = notificationService;
        this.userService = userService;
        this.user = new user_1.User();
        this.jobNamingGroups = [];
        this.civilities = [];
        this.xpLevels = [];
        this.isLoading = false;
        this.isResumeLoading = false;
        this.isPictureLoading = false;
        this.photoUploaded = false;
        this.profilePictureUploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.resumeUploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.lookingForJobNamingList = [{ 'id': 0, 'place': null },
            { 'id': 0, 'place': null },
            { 'id': 0, 'place': null }];
        this.is_cgu_accepted = false;
        this.isCaptchaCorrect = false;
        /**
         * Google recaptcha vars
         */
        this.googleRecaptchaSiteKey = appGlobals.googleRecaptchaSiteKey;
        var __this = this;
        this.referenceService.getAllCivilities().subscribe(function (res) {
            __this.civilities = res.json();
        });
        this.referenceService.getAllJobXpLevels().subscribe(function (res) {
            __this.xpLevels = res.json();
        });
        referenceService.getAllJobNamingGroups().subscribe(function (res) {
            __this.jobNamingGroups = res.json();
        });
        /**
         * Image cropper settings
         * @type {CropperSettings}
         */
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 120;
        this.cropperSettings.height = 120;
        this.cropperSettings.croppedWidth = 120;
        this.cropperSettings.croppedHeight = 120;
        this.cropperSettings.canvasWidth = 300;
        this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.responsive = true;
        this.profilePictureData = {};
    }
    CandidateSignUpComponent.prototype.signUp = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.createCandidateUser(this.user, this.lookingForJobNamingList).subscribe(function (res) {
            var createdUser = res.json();
            _this.user = createdUser;
            console.log('user is created', _this.user);
            _this.userService.loginUsingId(createdUser.id).subscribe(function (res) {
                localStorage.setItem('user', JSON.stringify(createdUser));
                _this.isLoading = false;
                _this.notificationService.show(new notification_1.Notification('success', 'Un mail vient de vous être envoyé pour confirmer votre inscription'));
                if (_this.resumeData) {
                    _this.uploadResume();
                }
                else {
                    _this.router.navigate(['/profil/confirmation-du-compte/3']);
                }
            });
        });
    };
    CandidateSignUpComponent.prototype.parseAdress = function (place, jobNamingIndex) {
        this.lookingForJobNamingList[jobNamingIndex]['place'] = place;
        this.ref.detectChanges();
    };
    CandidateSignUpComponent.prototype.handleCorrectCaptcha = function (response) {
        this.isCaptchaCorrect = true;
    };
    CandidateSignUpComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    CandidateSignUpComponent.prototype.profilePictureFileDropped = function (e) {
        this.isPictureLoading = true;
        this.pictureChangeListener(e);
    };
    CandidateSignUpComponent.prototype.resumeFileDropped = function (e) {
        this.resumeData = e[0];
        if (this.resumeData.type == "application/pdf"
            || this.resumeData.type == "application/msword"
            || this.resumeData.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            this.notificationService.show(new notification_1.Notification('success', 'Votre CV (' + this.resumeData.name + ') a été pris en compte'));
        }
        else {
            this.notificationService.show(new notification_1.Notification('error', 'Seuls les fichiers de type PDF ou WORD sont acceptés'));
        }
    };
    CandidateSignUpComponent.prototype.uploadResume = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.uploadResume(this.resumeData, this.user.id).subscribe(function (res) {
            _this.isLoading = false;
            _this.router.navigate(['/profil']);
        });
    };
    CandidateSignUpComponent.prototype.resumeFileChangeListener = function ($event) {
        this.resumeFileDropped($event.target.files);
    };
    CandidateSignUpComponent.prototype.pictureChangeListener = function ($event) {
        var image = new Image();
        /**
         * File was chosen via input[type=file]
         */
        var file;
        if ($event.target) {
            file = $event.target.files[0];
        }
        else {
            file = $event[0];
        }
        /**
         * Do not accept files that are over 1MB
         */
        if (file.size < 1000000) {
            var myReader = new FileReader();
            var __this_1 = this;
            myReader.onloadend = function (loadEvent) {
                image.src = loadEvent.target.result;
                __this_1.cropper.setImage(image);
                __this_1.user.profilePictureUrl = image.src;
                __this_1.isPictureLoading = false;
            };
            myReader.readAsDataURL(file);
        }
        else {
            this.notificationService.show(new notification_1.Notification('error', 'Votre photo doit faire moins d\'1 mo'));
        }
    };
    __decorate([
        core_1.ViewChild('cropper', undefined)
    ], CandidateSignUpComponent.prototype, "cropper");
    CandidateSignUpComponent = __decorate([
        core_1.Component({
            selector: 'candidate-sign-up',
            templateUrl: '../../../templates/candidate-sign-up.component.html'
        })
    ], CandidateSignUpComponent);
    return CandidateSignUpComponent;
}());
exports.CandidateSignUpComponent = CandidateSignUpComponent;
