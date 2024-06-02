import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsPostsListComponent } from './ds-posts-list.component';
import { DsPostItemModule } from './ds-post-item/ds-post-item.module';



@NgModule({
  declarations: [DsPostsListComponent],
  imports: [
    CommonModule,
    DsPostItemModule
  ],
  exports: [
    DsPostsListComponent
  ]
})
export class DsPostsListModule { }
