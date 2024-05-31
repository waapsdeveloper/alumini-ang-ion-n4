import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileWithImageBoxComponent } from './profile-with-image-box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfileWithImageBoxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProfileWithImageBoxComponent
  ]
})
export class ProfileWithImageBoxModule { }
