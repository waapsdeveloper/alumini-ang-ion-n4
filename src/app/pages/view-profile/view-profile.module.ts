import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProfilePageRoutingModule } from './view-profile-routing.module';

import { ViewProfilePage } from './view-profile.page';
import { SkillsEndorsementsModule } from 'src/app/components/skills-endorsements/skills-endorsements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProfilePageRoutingModule,
    SkillsEndorsementsModule
  ],
  declarations: [ViewProfilePage]
})
export class ViewProfilePageModule {}
