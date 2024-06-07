import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsPageRoutingModule } from './notifications-routing.module';

import { NotificationsPage } from './notifications.page';
import { WhoViewProfileModule } from 'src/app/components/who-view-profile/who-view-profile.module';
import { PeopleMayKnowModule } from '../dashboard/people-may-know/people-may-know.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsPageRoutingModule,
    WhoViewProfileModule,
    PeopleMayKnowModule
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
