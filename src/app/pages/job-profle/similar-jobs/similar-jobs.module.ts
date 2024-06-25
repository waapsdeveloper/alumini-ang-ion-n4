import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimilarJobsComponent } from './similar-jobs.component';



@NgModule({
  declarations: [SimilarJobsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SimilarJobsComponent
  ]
})
export class SimilarJobsModule { }
