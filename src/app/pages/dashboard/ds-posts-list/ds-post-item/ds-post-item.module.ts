import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsPostItemComponent } from './ds-post-item.component';



@NgModule({
  declarations: [DsPostItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DsPostItemComponent
  ]
})
export class DsPostItemModule { }
