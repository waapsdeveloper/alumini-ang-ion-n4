import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileAboutComponent } from './edit-profile-about.component';



@NgModule({
  declarations: [EditProfileAboutComponent],
  imports: [
    CommonModule
  ],
  exports:[EditProfileAboutComponent]
})
export class EditProfileAboutModule { }
