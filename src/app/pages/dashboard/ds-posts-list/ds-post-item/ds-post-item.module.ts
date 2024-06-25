import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsPostItemComponent } from './ds-post-item.component';
import { CommentBoxModule } from './comment-box/comment-box.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DsPostItemComponent],
  imports: [
    CommonModule,
    CommentBoxModule,
    IonicModule
  ],
  exports: [
    DsPostItemComponent
  ]
})
export class DsPostItemModule { }
