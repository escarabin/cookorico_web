import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { SharedModule } from './shared/shared.module';

// Services
import { NotificationsService } from './services/notification.service'

// Components
import { AppComponent }   from './app.component';
import { HomeComponent } from './shared/components/home.component';
import { HeaderComponent } from './shared/components/header.component';
import { FooterComponent } from './shared/components/footer.component';
import { JobSearchBarComponent } from './shared/components/job-search-bar.component';
import { SignInComponent } from './shared/components/sign-in.component';
import { NotificationsComponent } from './shared/components/notification.component';
import { PostPreviewComponent } from './shared/components/post-preview.component';
import { PostComponent } from './shared/components/post.component';
import { SignUpComponent } from './shared/components/sign-up.component';
import { ProfileSubHeaderComponent } from './shared/components/profile-sub-header.component';
import { RecruiterPromoComponent } from './shared/components/recruiter-promo.component';
import { ClubComponent } from './shared/components/club.component';
import { SignUpComponent } from './shared/components/sign-up.component';
import { PaginationControlsCmp } from 'ng2-pagination';

// Directives
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    declarations: [ BUTTON_DIRECTIVES,
                    AppComponent,
                    HomeComponent,
                    HeaderComponent,
                    FooterComponent,
                    JobSearchBarComponent,
                    PostComponent,
                    ClubComponent,
                    SignUpComponent,
                    PaginationControlsCmp,
                    PostPreviewComponent,
                    SignInComponent,
                    ProfileSubHeaderComponent,
                    RecruiterPromoComponent,
                    NotificationsComponent ],
    imports:      [ BrowserModule,
                    RouterModule,
                    FormsModule,
                    HttpModule,
                    SharedModule,
                    routing ],
    providers:    [ NotificationsService ],
    bootstrap:    [ AppComponent ],
})
export class AppModule {}