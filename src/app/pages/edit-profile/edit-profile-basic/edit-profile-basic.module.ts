import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileBasicComponent } from './edit-profile-basic.component';



@NgModule({
  declarations: [EditProfileBasicComponent],
  imports: [
    CommonModule
  ],
  exports:[EditProfileBasicComponent]
})
export class EditProfileBasicModule { }
