import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { EditProfilePage } from './edit-profile.page';
import { EditProfileImageModule } from './edit-profile-image/edit-profile-image.module';
import { EditProfileAboutModule } from './edit-profile-about/edit-profile-about.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilePageRoutingModule,
    EditProfileImageModule,
    EditProfileAboutModule
  ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule {}
