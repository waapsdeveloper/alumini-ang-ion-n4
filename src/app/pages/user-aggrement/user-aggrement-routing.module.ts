import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAggrementPage } from './user-aggrement.page';

const routes: Routes = [
  {
    path: '',
    component: UserAggrementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAggrementPageRoutingModule {}
