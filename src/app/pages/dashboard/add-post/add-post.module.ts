import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddPostComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AddPostComponent
  ]
})
export class AddPostModule { }
