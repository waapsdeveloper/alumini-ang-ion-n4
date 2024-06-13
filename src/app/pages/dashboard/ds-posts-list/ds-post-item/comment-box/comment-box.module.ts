import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentBoxComponent } from './comment-box.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommentBoxComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [CommentBoxComponent]
})
export class CommentBoxModule { }
