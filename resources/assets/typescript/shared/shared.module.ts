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

// Bootstrap modules
import { ButtonsModule, ModalModule, CollapseModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    declarations: [ UNITYTinyMCE,
                    SELECT_DIRECTIVES,
                    JobPreviewComponent,
                    JobSearchBarComponent,
                    GoogleplaceDirective],
    exports:      [ UNITYTinyMCE,
                    JobPreviewComponent,
                    JobSearchBarComponent,
                    SELECT_DIRECTIVES,
                    GoogleplaceDirective,
                    ButtonsModule,
                    CollapseModule,
                    AccordionModule,
                    ModalModule ],
    imports:      [ BrowserModule,
                    FormsModule,
                    HttpModule,
                    RouterModule,
                    ButtonsModule,
                    CollapseModule,
                    AccordionModule,
                    ModalModule ],
})

export class SharedModule {}