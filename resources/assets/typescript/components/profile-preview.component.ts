import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated'
import { Response } from '@angular/http';
import { CORE_DIRECTIVES,
         FORM_DIRECTIVES,
         NgClass,
         NgStyle } from '@angular/common';

// Services
import { UserService } from './../services/user.service';
import { NotificationsService } from './../services/notification.service';

// Image cropping
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

// Bootstrap (used to pop-up modals)
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap';

// File drop zone
import { FileSelectDirective,
         FileDropDirective,
         FileUploader } from 'ng2-file-upload/ng2-file-upload';

// Models
import { Notification } from './../models/notification';

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
    @Output profilePictureChanged: EventEmitter = new EventEmitter();
    user: any = [];
    experiences: any = [];
    education: any = [];
    testimonials: any = [];
    profilePictureData: any;
    resumeData: any;
    isLoading:boolean = false;
    editableProfile: boolean = true;
    cropperSettings: CropperSettings;
    public profilePictureUploader:FileUploader = new FileUploader({url: URL});
    public resumeUploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    constructor(private userService: UserService,
                private notificationService: NotificationsService) {
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

        /**
         * Image cropper settings
         * @type {CropperSettings}
         */
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 150;
        this.cropperSettings.croppedHeight = 150;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;

        this.profilePictureData = {};
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }

    public profilePictureFileDropped(e:any):void {
        this.fileChangeListener(e);
    }

    public resumeFileDropped(e:any):void {
        this.resumeData = e[0];

        if (this.resumeData.type == "application/pdf") {
            this.uploadResume();
        }
        else {
            this.notificationService.show(
                new Notification('error', 'Seuls les fichiers de type PDF sont acceptés')
            );
        }
    }

    public fileChangeListener($event) {
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
        };

        myReader.readAsDataURL(file);
    }

    uploadProfilePicture() {
        this.isLoading = true;

        this.userService.uploadProfilePicture(this.profilePictureData.image).subscribe((res: Response) => {
            /**
             * File has been successfully uploaded to AWS S3
             */
            if (res['_body']) {
                this.notificationService.show(
                    new Notification('success', 'Votre photo de profil a bien été modifiée')
                );

                /**
                 * Close profile picture modal
                 */
                document.getElementById('close-profile-picture-modal').click();
            }

            this.isLoading = false;

            this.profilePictureChanged.emit();
        });
    }

    uploadResume() {
        this.isLoading = true;

        this.userService.uploadResume(this.resumeData).subscribe((res: Response) => {
            /**
             * File has been successfully uploaded to AWS S3
             */
            if (res['_body']) {
                this.notificationService.show(
                    new Notification('success', 'Votre CV a bien été modifié')
                );

                /**
                 * Close resume modal
                 */
                document.getElementById('edit-resume-modal').click();
            }

            this.isLoading = false;
        });
    }

    submitDescription() {
        this.userService.saveDescription(this.user.description) .subscribe((res: Response) => {

        });
    }
}