import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileBasicComponent } from './edit-profile-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddExerienceModule } from './add-exerience/add-exerience.module';
import { AddEducationModule } from './add-education/add-education.module';



@NgModule({
  declarations: [EditProfileBasicComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AddEducationModule,
    AddExerienceModule
  ],
  exports: [EditProfileBasicComponent]
})
export class EditProfileBasicModule { }
