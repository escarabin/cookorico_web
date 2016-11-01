import { Routes, RouterModule } from '@angular/router';
import { Http } from '@angular/http';

// Components
import { SearchComponent } from './components/search.component';
import { JobSearchResultsComponent } from './components/job-search-results.component';
import { NewApplicationFormComponent } from './components/new-application-form.component';
import { JobComponent } from './components/job.component';

const jobSearchChildrenRouteList = [
    { path: 'tous-les-emplois', component: JobSearchResultsComponent,
        data: {
            meta: {
                title: 'Tous les emplois'
            }
        }
    },
    { path: ':placeId/:jobNamingId/:contractTypeId/:studyLevelId', component: JobSearchResultsComponent,
        data: {
            meta: {
                title: 'Recherche d\'emploi'
            }
        }
    },
    { path: 'candidater/:jobId', component: NewApplicationFormComponent },
    { path: 'annonce/:jobId', component: JobComponent },
    {
        path: '',
        component: JobSearchResultsComponent
    }
];

const jobSearchRoutes: Routes = [
    {
        path: '',
        component: SearchComponent,
        children: jobSearchChildrenRouteList
    }
];

// - Updated Export
export const jobSearchRouting = RouterModule.forChild(jobSearchRoutes);