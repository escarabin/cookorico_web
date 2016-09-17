import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { jobSearchRouting } from './job-search.routes';
import { SharedModule }   from './../shared/shared.module';
import { AgmCoreModule } from 'angular2-google-maps/core/index';

// Components
import { JobComponent } from './components/job.component';
import { NewApplicationFormComponent } from './components/new-application-form.component';
import { JobPreviewComponent } from './components/job-preview.component';
import { CustomPaginationComponent } from './../shared/components/custom-pagination.component';
import { JobSearchSidebarComponent } from './../job-search/components/job-search-sidebar.component';

// Services
import { SearchService } from './../services/search.service';
import { JobService } from './../services/job.service';


// Global vars
import appGlobals = require('./../globals');

@NgModule({
    declarations: [ JobComponent,
                    NewApplicationFormComponent,
                    JobPreviewComponent,
                    JobSearchSidebarComponent,
                    CustomPaginationComponent ],
    imports:      [ jobSearchRouting,
                    CommonModule,
                    FormsModule,
                    AgmCoreModule.forRoot({
                        apiKey: appGlobals.googleMapsApiKey
                    }),
                    SharedModule ],
    providers:    [ SearchService, JobService ],
})

export class JobSearchModule {}