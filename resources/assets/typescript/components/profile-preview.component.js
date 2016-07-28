"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
// Services
var user_service_1 = require('./../services/user.service');
var notification_service_1 = require('./../services/notification.service');
// Image cropping
var ng2_img_cropper_1 = require('ng2-img-cropper');
// Bootstrap (used to pop-up modals)
var ng2_bootstrap_1 = require('ng2-bootstrap');
// File drop zone
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
// Models
var notification_1 = require('./../models/notification');
var ProfilePreviewComponent = (function () {
    function ProfilePreviewComponent(userService, notificationService) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.profilePictureChanged = new core_1.EventEmitter();
        this.user = [];
        this.experiences = [];
        this.education = [];
        this.testimonials = [];
        this.isLoading = false;
        this.editableProfile = true;
        this.editingItems = [];
        this.profilePictureUploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.resumeUploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userService.getExperiences().subscribe(function (res) {
            __this.experiences = res.json();
        });
        this.userService.getEducation().subscribe(function (res) {
            __this.education = res.json();
        });
        this.userService.getTestimonials().subscribe(function (res) {
            __this.testimonials = res.json();
        });
        /**
         * Image cropper settings
         * @type {CropperSettings}
         */
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 150;
        this.cropperSettings.croppedHeight = 150;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
        this.profilePictureData = {};
    }
    ProfilePreviewComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ProfilePreviewComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    ProfilePreviewComponent.prototype.profilePictureFileDropped = function (e) {
        this.fileChangeListener(e);
    };
    ProfilePreviewComponent.prototype.resumeFileDropped = function (e) {
        this.resumeData = e[0];
        if (this.resumeData.type == "application/pdf") {
            this.uploadResume();
        }
        else {
            this.notificationService.show(new notification_1.Notification('error', 'Seuls les fichiers de type PDF sont acceptés'));
        }
    };
    ProfilePreviewComponent.prototype.fileChangeListener = function ($event) {
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
        var myReader = new FileReader();
        var __this = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            __this.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    ProfilePreviewComponent.prototype.uploadProfilePicture = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.uploadProfilePicture(this.profilePictureData.image).subscribe(function (res) {
            /**
             * File has been successfully uploaded to AWS S3
             */
            if (res['_body']) {
                _this.notificationService.show(new notification_1.Notification('success', 'Votre photo de profil a bien été modifiée'));
                /**
                 * Close profile picture modal
                 */
                document.getElementById('close-profile-picture-modal').click();
            }
            _this.isLoading = false;
            _this.profilePictureChanged.emit();
        });
    };
    ProfilePreviewComponent.prototype.uploadResume = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.uploadResume(this.resumeData).subscribe(function (res) {
            /**
             * File has been successfully uploaded to AWS S3
             */
            if (res['_body']) {
                _this.notificationService.show(new notification_1.Notification('success', 'Votre CV a bien été modifié'));
                /**
                 * Close resume modal
                 */
                document.getElementById('edit-resume-modal').click();
            }
            _this.isLoading = false;
        });
    };
    /**
     * Save edited profile info
     * @param key
     * @param value
     */
    ProfilePreviewComponent.prototype.saveProfileInfo = function (key, value) {
        var _this = this;
        this.userService.updateInfo(key, value).subscribe(function (res) {
            _this.editingItems[key] = false;
            if (key == 'new_email') {
                _this.notificationService.show(new notification_1.Notification('success', 'Un mail vient de vous être envoyé pour confirmer votre nouvelle adresse email'));
            }
            else {
                _this.notificationService.show(new notification_1.Notification('success', 'Vos modifications ont bien été enregistrées'));
            }
        });
    };
    __decorate([
        core_1.ViewChild('cropper', undefined), 
        __metadata('design:type', (typeof (_a = typeof ng2_img_cropper_1.ImageCropperComponent !== 'undefined' && ng2_img_cropper_1.ImageCropperComponent) === 'function' && _a) || Object)
    ], ProfilePreviewComponent.prototype, "cropper", void 0);
    __decorate([
        core_1.Output, 
        __metadata('design:type', core_1.EventEmitter)
    ], ProfilePreviewComponent.prototype, "profilePictureChanged", void 0);
    ProfilePreviewComponent = __decorate([
        core_1.Component({
            providers: [user_service_1.UserService],
            directives: [router_deprecated_1.RouterLink,
                ng2_img_cropper_1.ImageCropperComponent,
                ng2_bootstrap_1.MODAL_DIRECTIVES,
                common_1.NgClass,
                common_1.NgStyle,
                common_1.CORE_DIRECTIVES,
                ng2_file_upload_1.FileDropDirective,
                ng2_file_upload_1.FileSelectDirective,
                common_1.FORM_DIRECTIVES],
            viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
            selector: 'profile-preview',
            templateUrl: '../templates/profile-preview.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
    ], ProfilePreviewComponent);
    return ProfilePreviewComponent;
    var _a;
}());
exports.ProfilePreviewComponent = ProfilePreviewComponent;
//# sourceMappingURL=profile-preview.component.js.map