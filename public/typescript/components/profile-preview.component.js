System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './../services/file.service', 'ng2-img-cropper', 'ng2-bootstrap', 'file-droppa'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, file_service_1, ng2_img_cropper_1, ng2_bootstrap_1, file_droppa_1;
    var ProfilePreviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (file_service_1_1) {
                file_service_1 = file_service_1_1;
            },
            function (ng2_img_cropper_1_1) {
                ng2_img_cropper_1 = ng2_img_cropper_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (file_droppa_1_1) {
                file_droppa_1 = file_droppa_1_1;
            }],
        execute: function() {
            ProfilePreviewComponent = (function () {
                function ProfilePreviewComponent(userService, fileService) {
                    this.userService = userService;
                    this.fileService = fileService;
                    this.user = [];
                    this.experiences = [];
                    this.education = [];
                    this.testimonials = [];
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
                    this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
                    this.cropperSettings.width = 100;
                    this.cropperSettings.height = 100;
                    this.cropperSettings.croppedWidth = 100;
                    this.cropperSettings.croppedHeight = 100;
                    this.cropperSettings.canvasWidth = 400;
                    this.cropperSettings.canvasHeight = 300;
                    this.profilePictureData = {};
                }
                ProfilePreviewComponent.prototype.uploadProfilePicture = function () {
                    this.userService.uploadProfilePicture(this.profilePictureData.image).subscribe(function (res) {
                        console.log(res.json());
                    });
                };
                ProfilePreviewComponent = __decorate([
                    core_1.Component({
                        providers: [user_service_1.UserService, file_service_1.FileService],
                        directives: [file_droppa_1.FileDroppa_1,
                            router_deprecated_1.RouterLink,
                            ng2_img_cropper_1.ImageCropperComponent,
                            ng2_bootstrap_1.MODAL_DIRECTIVES],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        selector: 'profile-preview',
                        templateUrl: '../templates/profile-preview.component.html',
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, file_service_1.FileService])
                ], ProfilePreviewComponent);
                return ProfilePreviewComponent;
            }());
            exports_1("ProfilePreviewComponent", ProfilePreviewComponent);
        }
    }
});
