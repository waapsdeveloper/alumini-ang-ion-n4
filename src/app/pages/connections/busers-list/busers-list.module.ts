import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusersListComponent } from './busers-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BusersListComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    BusersListComponent
  ]
})
export class BusersListModule { }
