import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DolLayoutPageRoutingModule } from './dol-layout-routing.module';

import { DolLayoutPage } from './dol-layout.page';
import { GlobalHeaderModule } from 'src/app/components/global-header/global-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DolLayoutPageRoutingModule,
    GlobalHeaderModule
  ],
  declarations: [DolLayoutPage]
})
export class DolLayoutPageModule {}
