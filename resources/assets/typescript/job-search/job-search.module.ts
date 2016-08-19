import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { jobSearchRouting } from './job-search.routes';
import { SELECT_DIRECTIVES } from 'ng2-select';

// Components
import { JobComponent } from './components/job.component';
import { NewApplicationFormComponent } from './components/new-application-form.component';
import { JobPreviewComponent } from './components/job-preview.component';
import { CustomPaginationComponent } from './../components/custom-pagination.component';
import { JobSearchSidebarComponent } from './../job-search/components/job-search-sidebar.component';
import { UNITYTinyMCE } from './../components/tiny-mce.component';

// Services
import { SearchService } from './../services/search.service';

@NgModule({
    declarations: [ JobComponent,
                    NewApplicationFormComponent,
                    JobPreviewComponent,
                    JobSearchSidebarComponent,
                    SELECT_DIRECTIVES,
                    UNITYTinyMCE,
                    CustomPaginationComponent ],
    imports:      [ jobSearchRouting,
                    CommonModule,
                    FormsModule ],
    providers:    [ SearchService ],
})
export class JobSearchModule {}