import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MODAL_DIRECTIVES, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { UNITYTinyMCE } from './../components/tiny-mce.component';

@NgModule({
    declarations: [ MODAL_DIRECTIVES,
                    UNITYTinyMCE,
                    CollapseDirective ],
    exports:      [ MODAL_DIRECTIVES,
                    UNITYTinyMCE,
                    CollapseDirective ],
    imports:      [ BrowserModule,
                    FormsModule,
                    HttpModule ],
})
export class SharedModule {}