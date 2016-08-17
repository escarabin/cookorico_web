import { Routes, RouterModule } from '@angular/router';

// Components
import { SearchComponent } from './components/search.component';
import { JobSearchResultsComponent } from './components/job-search-results.component';
import { NewApplicationFormComponent } from './components/new-application-form.component';
import { JobComponent } from './components/job.component';

const jobSearchRoutes: Routes = [
    {
        path: '',
        component: SearchComponent,
        children: [
            {path: 'jobs/search/', component: JobSearchResultsComponent},
            {path: 'jobs/search/:parameters', component: JobSearchResultsComponent},
            {path: 'apply/:jobId', component: NewApplicationFormComponent},
            {path: 'job/:jobId', component: JobComponent},
            {
                path: '',
                component: JobSearchResultsComponent
            }
        ]
    }
];

// - Updated Export
export const jobSearchRouting = RouterModule.forChild(jobSearchRoutes);