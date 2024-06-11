import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProfilePageRoutingModule } from './view-profile-routing.module';

import { ViewProfilePage } from './view-profile.page';
import { SkillsEndorsementsModule } from 'src/app/components/skills-endorsements/skills-endorsements.module';
import { WhoViewProfileModule } from 'src/app/components/who-view-profile/who-view-profile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProfilePageRoutingModule,
    SkillsEndorsementsModule,
    WhoViewProfileModule
  ],
  declarations: [ViewProfilePage]
})
export class ViewProfilePageModule {}
