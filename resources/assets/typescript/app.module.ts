import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { MetaModule, MetaService, MetaConfig } from 'ng2-meta';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core/index';

// Services
import { NotificationsService } from './services/notification.service'

// Components
import { AppComponent }   from './app.component';
import { HomeComponent } from './shared/components/home.component';
import { HeaderComponent } from './shared/components/header.component';
import { FooterComponent } from './shared/components/footer.component';
import { SignInComponent } from './shared/components/sign-in.component';
import { NotificationsComponent } from './shared/components/notification.component';
import { PostPreviewComponent } from './shared/components/post-preview.component';
import { PostComponent } from './shared/components/post.component';
import { ProfileSubHeaderComponent } from './shared/components/profile-sub-header.component';
import { RecruiterPromoComponent } from './shared/components/recruiter-promo.component';
import { CandidatePromoComponent } from './shared/components/candidate-promo.component';
import { ClubComponent } from './shared/components/club.component';
import { CandidateSignUpComponent } from './shared/components/candidate-sign-up.component';
import { CguComponent } from './shared/components/cgu.component';
import { CgvComponent } from './shared/components/cgv.component';
import { AboutComponent } from './shared/components/about.component';

// Global vars
import appGlobals = require('./globals');

const metaConfig: MetaConfig = {
    //Append a title suffix such as a site name to all titles
    //Defaults to false
    useTitleSuffix: true,
    defaults: {
        title: 'Accueil',
        titleSuffix: ' | Cookorico',
        'og:image': '/img/oechr_logo.png',
        'any other': 'arbitrary tag can be used'
    }
};

@NgModule({
    declarations: [ AppComponent,
                    HomeComponent,
                    HeaderComponent,
                    FooterComponent,
                    PostComponent,
                    ClubComponent,
                    CandidateSignUpComponent,
                    PostPreviewComponent,
                    SignInComponent,
                    ProfileSubHeaderComponent,
                    CguComponent,
                    AboutComponent,
                    CgvComponent,
                    RecruiterPromoComponent,
                    CandidatePromoComponent,
                    NotificationsComponent ],
    imports:      [ RouterModule,
                    HttpModule,
                    SharedModule,
                    BrowserModule,
                    AgmCoreModule.forRoot({
                        apiKey: appGlobals.googleMapsApiKey
                    }),
                    MetaModule.forRoot(metaConfig),
                    routing ],
    providers:    [ NotificationsService,
                    MetaService ],
    bootstrap:    [ AppComponent ],
})

export class AppModule {}