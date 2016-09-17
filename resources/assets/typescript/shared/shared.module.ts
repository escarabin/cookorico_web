import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { MODAL_DIRECTIVES, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { UNITYTinyMCE } from './components/tiny-mce.component';
import { SELECT_DIRECTIVES } from 'ng2-select/ng2-select';
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

@NgModule({
    declarations: [ MODAL_DIRECTIVES,
                    UNITYTinyMCE,
                    CollapseDirective,
                    MD_CHECKBOX_DIRECTIVES,
                    SELECT_DIRECTIVES,
                    GoogleplaceDirective ],
    exports:      [ MODAL_DIRECTIVES,
                    UNITYTinyMCE,
                    CollapseDirective,
                    SELECT_DIRECTIVES,
                    GoogleplaceDirective ],
    imports:      [ BrowserModule,
                    FormsModule,
                    HttpModule ],
})
export class SharedModule {}