import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './components/app.component';
import { routing } from './app.routes';

// Services
import { NotificationsService } from './services/notification.service'

// Components
import { HomeComponent } from './components/home.component';
import { JobComponent } from './job-search/components/job.component';
import { NewApplicationFormComponent } from './job-search/components/new-application-form.component';
import { UNITYTinyMCE } from './components/tiny-mce.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { JobSearchBarComponent } from './job-search/components/job-search-bar.component';
import { SignInComponent } from './components/sign-in.component';
import { NotificationsComponent } from './components/notification.component';
import { BusinessSelectComponent } from './components/business-select.component';
import { JobPreviewComponent } from './job-search/components/job-preview.component';
import { PostPreviewComponent } from './components/post-preview.component';
import { PostComponent } from './components/post.component';
import { ClubComponent } from './components/club.component';
import { SignUpComponent } from './components/sign-up.component';
import { ProfileComponent } from './profile/components/profile.component';
import { SearchComponent } from './job-search/components/search.component';
import { JobSearchSidebarComponent } from './job-search/components/job-search-sidebar.component';
import { CustomPaginationComponent } from './components/custom-pagination.component';
import { ProfileSidebarComponent } from './profile/components/profile-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar.component';
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
                    NewApplicationFormComponent,
                    UNITYTinyMCE,
                    HeaderComponent,
                    FooterComponent,
                    JobSearchBarComponent,
                    PostComponent,
                    ClubComponent,
                    SignUpComponent,
                    SearchComponent,
                    ProfileComponent,
                    ProfileSidebarComponent,
                    ImageCropperComponent,
                    RightSidebarComponent,
                    CustomPaginationComponent,
                    BusinessSelectComponent,
                    PaginationControlsCmp,
                    JobSearchSidebarComponent,
                    JobPreviewComponent,
                    PostPreviewComponent,
                    /*
                    SignInComponent,
                    NotificationsComponent,
                    */],
    imports:      [BrowserModule,
                    RouterModule,
                    FormsModule,
                    HttpModule,
                    routing],
    providers:    [NotificationsService],
    bootstrap:    [AppComponent],
})
export class AppModule {}