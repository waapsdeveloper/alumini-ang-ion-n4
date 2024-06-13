import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsPostItemComponent } from './ds-post-item.component';
import { CommentBoxModule } from './comment-box/comment-box.module';



@NgModule({
  declarations: [DsPostItemComponent],
  imports: [
    CommonModule,
    CommentBoxModule
  ],
  exports: [
    DsPostItemComponent
  ]
})
export class DsPostItemModule { }
