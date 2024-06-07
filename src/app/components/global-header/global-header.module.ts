import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalHeaderComponent } from './global-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [GlobalHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GlobalHeaderComponent
  ]
})
export class GlobalHeaderModule { }
