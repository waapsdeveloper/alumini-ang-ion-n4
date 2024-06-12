import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectionsPage } from './elections.page';

const routes: Routes = [
  {
    path: '',
    component: ElectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectionsPageRoutingModule {}
