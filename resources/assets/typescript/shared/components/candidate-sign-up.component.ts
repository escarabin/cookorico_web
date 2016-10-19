import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import appGlobals = require('../../globals');

// Services
import { UserService } from './../../services/user.service';
import { ReferenceService } from './../../services/reference.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { User } from './../../models/user';
import { Notification } from '../../models/notification';

// Image cropping
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';

// File drop zone
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
    providers: [ UserService, ReferenceService ],
    selector: 'candidate-sign-up',
    templateUrl: '../templates/candidate-sign-up.component.html',
})

export class CandidateSignUpComponent {
    user:User = new User();
    jobNamingGroups: any = [];
    civilities: any = [];
    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
    cropper:ImageCropperComponent;
    profilePictureData: any;
    isResumeLoading: boolean = false;
    isPictureLoading: boolean = false;
    photoUploaded: boolean = false;
    cropperSettings: CropperSettings;
    public profilePictureUploader:FileUploader = new FileUploader({url: URL});
    public resumeUploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    lookingForJobNamingList: any = [{'id': 0, 'place': null},
                                    {'id': 0, 'place': null},
                                    {'id': 0, 'place': null}];
    is_cgu_accepted: boolean = false;
    isCaptchaCorrect: boolean = false;

    /**
     * Google recaptcha vars
     */
    googleRecaptchaSiteKey = appGlobals.googleRecaptchaSiteKey;

    constructor(private referenceService: ReferenceService,
                private ref: ChangeDetectorRef,
                private router: Router,
                private notificationService: NotificationsService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllCivilities().subscribe((res: Response) => {
            __this.civilities = res.json();
        });

        referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            __this.jobNamingGroups = res.json();
        });

        /**
         * Image cropper settings
         * @type {CropperSettings}
         */
        this.cropperSettings = new CropperSettings();
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

    signUp() {
        console.log(this.user, this.lookingForJobNamingList);
        this.userService.createCandidateUser(this.user, this.lookingForJobNamingList).subscribe((res: Response) => {
            this.notificationService.show(
                new Notification('success', 'Un mail vient de vous être envoyé pour confirmer votre inscription')
            );

            this.router.navigate(['/']);
        });
    }

    parseAdress(place: Object, jobNamingIndex: number) {
        this.lookingForJobNamingList[jobNamingIndex]['place'] = place;
        this.ref.detectChanges();
    }

    handleCorrectCaptcha(response: any) {
        this.isCaptchaCorrect = true;
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public profilePictureFileDropped(e:any):void {
        this.isPictureLoading = true;
        this.pictureChangeListener(e);
    }

    public resumeFileDropped(e:any):void {
        this.isResumeLoading = true;
        this.resumefileChangeListener(e);
    }

    public resumefileChangeListener($event) {

    }

    public pictureChangeListener($event) {
        var image:any = new Image();

        /**
         * File was chosen via input[type=file]
         */
        var file:File;
        if ($event.target) {
            file = $event.target.files[0];
        }
        /**
         * File was dropped on [ng2FileDrop] zone
         */
        else {
            file = $event[0];
        }
        var myReader:FileReader = new FileReader();
        let __this = this;
        myReader.onloadend = function (loadEvent:any) {
            image.src = loadEvent.target.result;
            __this.cropper.setImage(image);
            __this.user.profilePictureUrl = image.src;
            __this.isPictureLoading = false;
        };

        myReader.readAsDataURL(file);
    }
}