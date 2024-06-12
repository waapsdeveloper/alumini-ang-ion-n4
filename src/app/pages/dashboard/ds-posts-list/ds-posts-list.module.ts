import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsPostsListComponent } from './ds-posts-list.component';
import { DsPostItemModule } from './ds-post-item/ds-post-item.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DsPostsListComponent],
  imports: [
    CommonModule,
    IonicModule,
    DsPostItemModule
  ],
  exports: [
    DsPostsListComponent
  ]
})
export class DsPostsListModule { }
