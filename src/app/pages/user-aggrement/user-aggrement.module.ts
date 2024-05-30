import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAggrementPageRoutingModule } from './user-aggrement-routing.module';

import { UserAggrementPage } from './user-aggrement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAggrementPageRoutingModule
  ],
  declarations: [UserAggrementPage]
})
export class UserAggrementPageModule {}
