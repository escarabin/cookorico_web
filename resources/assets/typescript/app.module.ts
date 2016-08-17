import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './components/app.component';
import { routing } from './app.routes';
import { MODAL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

// Services
import { NotificationsService } from './services/notification.service'

// Components
import { HomeComponent } from './components/home.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { JobSearchBarComponent } from './job-search/components/job-search-bar.component';
import { SignInComponent } from './components/sign-in.component';
import { NotificationsComponent } from './components/notification.component';
import { PostPreviewComponent } from './components/post-preview.component';
import { PostComponent } from './components/post.component';
import { ClubComponent } from './components/club.component';
import { SignUpComponent } from './components/sign-up.component';
import { ProfileSidebarComponent } from './profile/components/profile-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar.component';
import { PaginationControlsCmp } from 'ng2-pagination';

// Directives
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core/index';

@NgModule({
    declarations: [ BUTTON_DIRECTIVES,
                    GOOGLE_MAPS_DIRECTIVES,
                    GoogleplaceDirective,
                    MODAL_DIRECTIVES,
                    AppComponent,
                    HomeComponent,
                    HeaderComponent,
                    FooterComponent,
                    JobSearchBarComponent,
                    PostComponent,
                    ClubComponent,
                    SignUpComponent,
                    ProfileSidebarComponent,
                    RightSidebarComponent,
                    PaginationControlsCmp,
                    PostPreviewComponent,
                    SignInComponent,
                    /*NotificationsComponent,
                    */ ],
    imports:      [BrowserModule,
                    RouterModule,
                    FormsModule,
                    HttpModule,
                    routing],
    providers:    [NotificationsService],
    bootstrap:    [AppComponent],
})
export class AppModule {}