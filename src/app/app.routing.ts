import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {ProjectComponent} from './components/pages/project.component';
import {ProfileComponent} from './githubprofile/profile.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)