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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DolLayoutPageRoutingModule {}
