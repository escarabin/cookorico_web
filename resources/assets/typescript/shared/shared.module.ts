import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { AgmCoreModule } from 'angular2-google-maps/core/index';
import { Ng2PaginationModule } from 'ng2-pagination';

// Components
import { UNITYTinyMCE } from './components/tiny-mce.component';
import { JobPreviewComponent } from './components/job-preview.component';
import { JobSearchBarComponent } from './components/job-search-bar.component';
import { ApplicantsComponent } from './../profile/components/applicants.component';
import { BusinessPageComponent } from './components/business-page.component';
import { PricingPlansComponent } from './components/pricing-plans.component';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

// Bootstrap modules
import { ButtonsModule,
         ModalModule,
         CollapseModule,
         TooltipModule,
         AccordionModule,
         AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

// Services
import { UserService } from './../services/user.service';

// Global vars
import appGlobals = require('./../globals');

@NgModule({
    declarations: [ UNITYTinyMCE,
                    JobPreviewComponent,
                    JobSearchBarComponent,
                    FileSelectDirective,
                    FileDropDirective,
                    ImageCropperComponent,
                    ApplicantsComponent,
                    PricingPlansComponent,
                    BusinessPageComponent,
                    GoogleplaceDirective],
    exports:      [ UNITYTinyMCE,
                    JobPreviewComponent,
                    JobSearchBarComponent,
                    ApplicantsComponent,
                    GoogleplaceDirective,
                    FileSelectDirective,
                    FileDropDirective,
                    ImageCropperComponent,
                    PricingPlansComponent,
                    ButtonsModule,
                    CollapseModule,
                    ReCaptchaModule,
                    AccordionModule,
                    CommonModule,
                    AlertModule,
                    TooltipModule,
                    AgmCoreModule,
                    Ng2PaginationModule,
                    ModalModule ],
    providers:    [ UserService ],
    imports:      [ FormsModule,
                    HttpModule,
                    RouterModule,
                    ButtonsModule,
                    CollapseModule,
                    CommonModule,
                    AgmCoreModule.forRoot({
                        apiKey: appGlobals.googleMapsApiKey
                    }),
                    ReCaptchaModule,
                    AccordionModule,
                    AlertModule,
                    TooltipModule,
                    Ng2PaginationModule,
                    ModalModule ],
})

export class SharedModule {}