import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated'
import { Response } from '@angular/http';
import { CORE_DIRECTIVES } from '@angular/common';

// Services
import { UserService } from './../services/user.service';
import { FileService } from './../services/file.service';

// Image cropping
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

// Bootstrap (used to pop-up modals)
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap';

// File drop-zone
import { FileDroppa_1 } from 'file-droppa';

@Component({
    providers: [UserService, FileService],
    directives: [FileDroppa_1,
                 RouterLink,
                 ImageCropperComponent,
                 MODAL_DIRECTIVES],
    viewProviders:[BS_VIEW_PROVIDERS],
    selector: 'profile-preview',
    templateUrl: '../templates/profile-preview.component.html',
})

export class ProfilePreviewComponent {
    user: any = [];
    experiences: any = [];
    education: any = [];
    testimonials: any = [];
    profilePictureData: any;
    cropperSettings: CropperSettings;

    constructor(private userService: UserService,
                private fileService: FileService) {
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
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth =100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;

        this.profilePictureData = {};
    }

    uploadProfilePicture() {
        this.userService.uploadProfilePicture(this.profilePictureData.image).subscribe((res: Response) => {
            console.log(res.json());
        });
    }
}