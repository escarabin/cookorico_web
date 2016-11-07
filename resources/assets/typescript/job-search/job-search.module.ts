import { NgModule } from '@angular/core';
import { jobSearchRouting } from './job-search.routes';
import { SharedModule }   from './../shared/shared.module';
import { AgmCoreModule } from 'angular2-google-maps/core/index';

// Components
import { JobComponent } from './components/job.component';
import { NewApplicationFormComponent } from './components/new-application-form.component';
import { CustomPaginationComponent } from './../shared/components/custom-pagination.component';
import { JobSearchSidebarComponent } from './../job-search/components/job-search-sidebar.component';
import { JobSearchResultsComponent } from './../job-search/components/job-search-results.component';
import { SearchComponent } from './components/search.component';

// Services
import { SearchService } from './../services/search.service';
import { JobService } from './../services/job.service';

@NgModule({
    declarations: [ JobComponent,
                    SearchComponent,
                    NewApplicationFormComponent,
                    JobSearchSidebarComponent,
                    JobSearchResultsComponent,
                    CustomPaginationComponent ],
    imports:      [ jobSearchRouting,
                    AgmCoreModule,
                    SharedModule ],
    providers:    [ SearchService, JobService ],
})

export class JobSearchModule {}