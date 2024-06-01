import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileBasicComponent } from './edit-profile-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditProfileBasicComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [EditProfileBasicComponent]
})
export class EditProfileBasicModule { }
