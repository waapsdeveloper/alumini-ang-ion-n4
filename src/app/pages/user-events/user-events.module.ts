import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEventsPageRoutingModule } from './user-events-routing.module';

import { UserEventsPage } from './user-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEventsPageRoutingModule
  ],
  declarations: [UserEventsPage]
})
export class UserEventsPageModule {}
