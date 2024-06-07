import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';

import { MyProfilePage } from './my-profile.page';
import { ProfileWithImageBoxModule } from './profile-with-image-box/profile-with-image-box.module';
import { ProfileSkillsModule } from './profile-skills/profile-skills.module';
import { ProfileAboutModule } from './profile-about/profile-about.module';
import { ProfileViewedModule } from './profile-viewed/profile-viewed.module';
import { SkillsEndorsementsModule } from 'src/app/components/skills-endorsements/skills-endorsements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProfilePageRoutingModule,
    ProfileWithImageBoxModule,
    ProfileSkillsModule,
    ProfileViewedModule,
    ProfileAboutModule,
    SkillsEndorsementsModule
  ],
  declarations: [MyProfilePage]
})
export class MyProfilePageModule {}
