import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated'
import { Response } from '@angular/http';
import { CORE_DIRECTIVES,
         FORM_DIRECTIVES,
         NgClass,
         NgStyle } from '@angular/common';

// Services
import { UserService } from './../services/user.service';

// Image cropping
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

// Bootstrap (used to pop-up modals)
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap';

// File drop zone
import { FileSelectDirective,
         FileDropDirective,
         FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
    providers: [UserService],
    directives: [RouterLink,
                 ImageCropperComponent,
                 MODAL_DIRECTIVES,
                 NgClass,
                 NgStyle,
                 CORE_DIRECTIVES,
                 FileDropDirective,
                 FileSelectDirective,
                 FORM_DIRECTIVES],
    viewProviders:[BS_VIEW_PROVIDERS],
    selector: 'profile-preview',
    templateUrl: '../templates/profile-preview.component.html',
})

export class ProfilePreviewComponent {
    @ViewChild('cropper', undefined)
    cropper:ImageCropperComponent;
    user: any = [];
    experiences: any = [];
    education: any = [];
    testimonials: any = [];
    profilePictureData: any;
    cropperSettings: CropperSettings;
    public uploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    constructor(private userService: UserService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        this.userService.getExperiences().subscribe((res: Response) => {
            __this.experiences = res.json();
        });

        this.userService.getEducation().subscribe((res: Response) => {
            __this.education = res.json();
        });

        this.userService.getTestimonials().subscribe((res: Response) => {
            __this.testimonials = res.json();
        });

        this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth =100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;

        this.profilePictureData = {};
    }

    public fileOverBase(e:any):void {
        console.log('file over drop zone');
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }

    public fileDropped(e:any):void {
        console.log('file dropped', e);
        this.fileChangeListener(e);
    }

    public fileChangeListener($event) {
        console.log('file dropped', $event);
        var image:any = new Image();

        /**
         * File was chosen via input[type=file]
         */
        var file:File;
        if ($event.target) {
            file = $event.target.files[0];
        }
        /**
         * File was dropped on ng2FileDrop zone
         */
        else {
            file = $event[0];
        }
        var myReader:FileReader = new FileReader();
        let __this = this;
        myReader.onloadend = function (loadEvent:any) {
            image.src = loadEvent.target.result;
            __this.cropper.setImage(image);
        };

        myReader.readAsDataURL(file);
    }

    uploadProfilePicture() {
        this.userService.uploadProfilePicture(this.profilePictureData.image).subscribe((res: Response) => {
            console.log(res.json());
        });
    }
}