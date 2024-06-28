import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplyComponent } from './job-apply.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [JobApplyComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[JobApplyComponent]
})
export class JobApplyModule { }
