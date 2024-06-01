import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DolLayoutPage } from './dol-layout.page';

const routes: Routes = [
  {
    path: '',
    component: DolLayoutPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.module').then( m => m.DashboardPageModule),
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./../my-profile/my-profile.module').then( m => m.MyProfilePageModule)
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('./../edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
      },
      {
        path: 'jobs',
        loadChildren: () => import('./../jobs/jobs.module').then( m => m.JobsPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./../events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: 'job-profle',
        loadChildren: () => import('./../job-profle/job-profle.module').then( m => m.JobProflePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DolLayoutPageRoutingModule {}
