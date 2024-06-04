import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';

import { JobsPage } from './jobs.page';
import { PeopleMayKnowModule } from '../dashboard/people-may-know/people-may-know.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsPageRoutingModule,
    PeopleMayKnowModule
  ],
  declarations: [JobsPage]
})
export class JobsPageModule {}
