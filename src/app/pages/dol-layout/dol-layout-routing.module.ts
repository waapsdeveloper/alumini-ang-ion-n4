import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DolLayoutPage } from './dol-layout.page';
import { PclGuard } from 'src/app/guards/pcl.guard';

const routes: Routes = [
  {
    path: '',
    component: DolLayoutPage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardPageModule),
        canActivate: [PclGuard]
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./../my-profile/my-profile.module').then(m => m.MyProfilePageModule)
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('./../edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
      },
      {
        path: 'jobs',
        loadChildren: () => import('./../jobs/jobs.module').then(m => m.JobsPageModule)
      },
      {
        path: 'job-profle',
        loadChildren: () => import('./../job-profle/job-profle.module').then(m => m.JobProflePageModule)
      },
      {
        path: 'connections',
        loadChildren: () => import('./../connections/connections.module').then(m => m.ConnectionsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./../messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'user-events',
        loadChildren: () => import('./../user-events/user-events.module').then( m => m.UserEventsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./../notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'view-profile/:id',
        loadChildren: () => import('./../view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DolLayoutPageRoutingModule { }
