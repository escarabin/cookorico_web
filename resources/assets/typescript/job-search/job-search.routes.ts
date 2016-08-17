import { Routes, RouterModule } from '@angular/router';

// Components
import { JobSearchResultsComponent } from './components/job-search-results.component'
import { NewApplicationFormComponent } from './components/new-application-form.component';
import { JobComponent } from './components/job.component';

const jobSearchRoutes: Routes = [
    { path: 'jobs/search/', name: 'ShowAllJobs', component: JobSearchResultsComponent, useAsDefault: true },
    { path: 'job/:jobId/', name: 'ShowJob', component: JobComponent },
    { path: 'jobs/search/:parameters',
        name: 'SearchJobs', component: JobSearchResultsComponent },
    { path: 'apply/:jobId', name: 'Apply', component: NewApplicationFormComponent }
];

// - Updated Export
export const jobSearchRouting = RouterModule.forChild(jobSearchRoutes);