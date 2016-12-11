"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
// import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';
var index_1 = require('angular2-google-maps/core/index');
var ng2_pagination_1 = require('ng2-pagination');
// Components
var tiny_mce_component_1 = require('./components/tiny-mce.component');
var job_preview_component_1 = require('./components/job-preview.component');
var job_search_bar_component_1 = require('./components/job-search-bar.component');
var applicants_component_1 = require('./../profile/components/applicants.component');
var pricing_plans_component_1 = require('./components/pricing-plans.component');
var ng2_img_cropper_1 = require('ng2-img-cropper');
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var custom_pagination_component_1 = require('./components/custom-pagination.component');
// Bootstrap modules
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
// Services
var user_service_1 = require('./../services/user.service');
var reference_service_1 = require('./../services/reference.service');
var business_service_1 = require('./../services/business.service');
var place_service_1 = require('./../services/place.service');
var sellsy_service_1 = require('./../services/sellsy.service');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [tiny_mce_component_1.UNITYTinyMCE,
                job_preview_component_1.JobPreviewComponent,
                job_search_bar_component_1.JobSearchBarComponent,
                ng2_file_upload_1.FileSelectDirective,
                ng2_file_upload_1.FileDropDirective,
                ng2_img_cropper_1.ImageCropperComponent,
                custom_pagination_component_1.CustomPaginationComponent,
                applicants_component_1.ApplicantsComponent,
                pricing_plans_component_1.PricingPlansComponent,
            ],
            exports: [tiny_mce_component_1.UNITYTinyMCE,
                job_preview_component_1.JobPreviewComponent,
                job_search_bar_component_1.JobSearchBarComponent,
                applicants_component_1.ApplicantsComponent,
                // GoogleplaceDirective,
                ng2_file_upload_1.FileSelectDirective,
                ng2_file_upload_1.FileDropDirective,
                ng2_img_cropper_1.ImageCropperComponent,
                custom_pagination_component_1.CustomPaginationComponent,
                pricing_plans_component_1.PricingPlansComponent,
                ng2_bootstrap_1.ButtonsModule,
                ng2_bootstrap_1.CollapseModule,
                ng2_bootstrap_1.AccordionModule,
                common_1.CommonModule,
                index_1.AgmCoreModule,
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_1.TooltipModule,
                ng2_pagination_1.Ng2PaginationModule,
                ng2_bootstrap_1.ModalModule],
            providers: [user_service_1.UserService,
                reference_service_1.ReferenceService,
                place_service_1.PlaceService,
                business_service_1.BusinessService,
                sellsy_service_1.SellsyService],
            imports: [forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule,
                ng2_bootstrap_1.ButtonsModule,
                ng2_bootstrap_1.CollapseModule,
                common_1.CommonModule,
                ng2_bootstrap_1.AccordionModule,
                index_1.AgmCoreModule,
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_1.TooltipModule,
                ng2_pagination_1.Ng2PaginationModule,
                ng2_bootstrap_1.ModalModule]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
