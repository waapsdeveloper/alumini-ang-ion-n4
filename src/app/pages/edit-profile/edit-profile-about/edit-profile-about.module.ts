import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileAboutComponent } from './edit-profile-about.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditProfileAboutComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[EditProfileAboutComponent]
})
export class EditProfileAboutModule { }
