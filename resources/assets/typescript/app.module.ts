import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './components/app.component';
import { routing } from './app.routes';

// Components
import { HomeComponent } from './components/home.component';
import { FooterComponent } from './components/footer.component';
import { NotificationsComponent } from './components/notification.component';
import { HeaderComponent } from './components/header.component';
import { BusinessSelectComponent } from './components/business-select.component';
import { UNITYTinyMCE } from './components/tiny-mce.component';
import { SignInComponent } from './components/sign-in.component';
import { JobSearchBarComponent } from './components/job-search-bar.component';
import { JobPreviewComponent } from './components/job-preview.component';
import { PostPreviewComponent } from './components/post-preview.component';
import { JobSearchSidebarComponent } from './components/job-search-sidebar.component';
import { NewApplicationFormComponent } from './components/new-application-form.component';
import { CustomPaginationComponent } from './components/custom-pagination.component';
import { UserSidebarComponent } from './components/user-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar.component';
import { JobComponent } from './components/job.component';
import { PaginationControlsCmp } from 'ng2-pagination';
import { ImageCropperComponent } from 'ng2-img-cropper';

// Directives
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { BUTTON_DIRECTIVES, CollapseDirective, MODAL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core/index';

@NgModule({
    declarations: [BUTTON_DIRECTIVES,
                   MODAL_DIRECTIVES,
                   GOOGLE_MAPS_DIRECTIVES,
                   CollapseDirective,
                   GoogleplaceDirective,
                   FileSelectDirective,
                   FileDropDirective,
                   AppComponent,
                   HomeComponent,
                   JobComponent,
                   UserSidebarComponent,
                   ImageCropperComponent,
                   RightSidebarComponent,
                   FooterComponent,
                   NotificationsComponent,
                   CustomPaginationComponent,
                   BusinessSelectComponent,
                   PaginationControlsCmp,
                   JobSearchBarComponent,
                   JobSearchSidebarComponent,
                   NewApplicationFormComponent,
                   JobPreviewComponent,
                   PostPreviewComponent,
                   SignInComponent,
                   UNITYTinyMCE,
                   HeaderComponent],
    imports:      [BrowserModule, FormsModule, HttpModule, routing],
    bootstrap:    [AppComponent],
})
export class AppModule {}