import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEventsPageRoutingModule } from './user-events-routing.module';

import { UserEventsPage } from './user-events.page';
import { PeopleMayKnowModule } from '../dashboard/people-may-know/people-may-know.module';
import { EventBoxModule } from './event-box/event-box.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEventsPageRoutingModule,
    PeopleMayKnowModule,
    EventBoxModule
  ],
  declarations: [UserEventsPage]
})
export class UserEventsPageModule {}
