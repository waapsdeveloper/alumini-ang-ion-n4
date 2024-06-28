import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileAboutComponent } from './edit-profile-about.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddEducationModule } from '../edit-profile-basic/add-education/add-education.module';
import { AddExerienceModule } from '../edit-profile-basic/add-exerience/add-exerience.module';



@NgModule({
  declarations: [EditProfileAboutComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AddEducationModule,
    AddExerienceModule
  ],
  exports: [EditProfileAboutComponent]
})
export class EditProfileAboutModule { }
