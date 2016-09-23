import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { SELECT_DIRECTIVES } from 'ng2-select/ng2-select';
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

// Components
import { UNITYTinyMCE } from './components/tiny-mce.component';
import { JobPreviewComponent } from './components/job-preview.component';

// Bootstrap modules
import { ButtonsModule, ModalModule, CollapseModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    declarations: [ UNITYTinyMCE,
                    MD_CHECKBOX_DIRECTIVES,
                    SELECT_DIRECTIVES,
                    JobPreviewComponent,
                    GoogleplaceDirective],
    exports:      [ UNITYTinyMCE,
                    JobPreviewComponent,
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