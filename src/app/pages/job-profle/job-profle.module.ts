import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobProflePageRoutingModule } from './job-profle-routing.module';

import { JobProflePage } from './job-profle.page';
import { SimilarJobsModule } from './similar-jobs/similar-jobs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobProflePageRoutingModule,
    SimilarJobsModule
  ],
  declarations: [JobProflePage]
})
export class JobProflePageModule {}
