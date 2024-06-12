import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectionsPageRoutingModule } from './elections-routing.module';

import { ElectionsPage } from './elections.page';
import { PeopleMayKnowModule } from '../dashboard/people-may-know/people-may-know.module';
import { ElectionListModule } from './election-list/election-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectionsPageRoutingModule,
    PeopleMayKnowModule,
    ElectionListModule
  ],
  declarations: [ElectionsPage]
})
export class ElectionsPageModule { }
