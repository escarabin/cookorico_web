import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SELECT_DIRECTIVES } from 'ng2-select/ng2-select';
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

// Components
import { UNITYTinyMCE } from './components/tiny-mce.component';
import { JobPreviewComponent } from './components/job-preview.component';
import { JobSearchBarComponent } from './components/job-search-bar.component';
import { ApplicantsComponent } from './../profile/components/applicants.component';

// Bootstrap modules
import { ButtonsModule,
         ModalModule,
         CollapseModule,
         AccordionModule,
         AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

// Services
import { UserService } from './../services/user.service';

@NgModule({
    declarations: [ UNITYTinyMCE,
                    SELECT_DIRECTIVES,
                    JobPreviewComponent,
                    JobSearchBarComponent,
                    ApplicantsComponent,
                    GoogleplaceDirective],
    exports:      [ UNITYTinyMCE,
                    JobPreviewComponent,
                    JobSearchBarComponent,
                    ApplicantsComponent,
                    SELECT_DIRECTIVES,
                    GoogleplaceDirective,
                    ButtonsModule,
                    CollapseModule,
                    AccordionModule,
                    AlertModule,
                    ModalModule ],
    providers:    [ UserService ],
    imports:      [ BrowserModule,
                    FormsModule,
                    HttpModule,
                    RouterModule,
                    ButtonsModule,
                    CollapseModule,
                    AccordionModule,
                    AlertModule,
                    ModalModule ],
})

export class SharedModule {}