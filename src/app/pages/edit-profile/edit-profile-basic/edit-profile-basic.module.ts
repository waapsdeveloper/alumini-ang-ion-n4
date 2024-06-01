import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileBasicComponent } from './edit-profile-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [EditProfileBasicComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [EditProfileBasicComponent]
})
export class EditProfileBasicModule { }
