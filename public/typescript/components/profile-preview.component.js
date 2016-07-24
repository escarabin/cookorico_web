System.register(['@angular/core', '@angular/router-deprecated', '@angular/common', './../services/user.service', './../services/notification.service', 'ng2-img-cropper', 'ng2-bootstrap', 'ng2-file-upload/ng2-file-upload', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, common_1, user_service_1, notification_service_1, ng2_img_cropper_1, ng2_bootstrap_1, ng2_file_upload_1, notification_1;
    var ProfilePreviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (ng2_img_cropper_1_1) {
                ng2_img_cropper_1 = ng2_img_cropper_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            ProfilePreviewComponent = (function () {
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
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
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
                ProfilePreviewComponent.prototype.fileDropped = function (e) {
                    this.fileChangeListener(e);
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
                ProfilePreviewComponent.prototype.submitDescription = function () {
                    this.userService.saveDescription(this.user.description).subscribe(function (res) {
                    });
                };
                __decorate([
                    core_1.ViewChild('cropper', undefined), 
                    __metadata('design:type', ng2_img_cropper_1.ImageCropperComponent)
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
            }());
            exports_1("ProfilePreviewComponent", ProfilePreviewComponent);
        }
    }
});
