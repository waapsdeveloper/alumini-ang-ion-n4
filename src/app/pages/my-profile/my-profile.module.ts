import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';

import { MyProfilePage } from './my-profile.page';
import { ProfileWithImageBoxModule } from './profile-with-image-box/profile-with-image-box.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProfilePageRoutingModule,
    ProfileWithImageBoxModule
  ],
  declarations: [MyProfilePage]
})
export class MyProfilePageModule {}
