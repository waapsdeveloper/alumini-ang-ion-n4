import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusersListComponent } from './busers-list.component';



@NgModule({
  declarations: [BusersListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BusersListComponent
  ]
})
export class BusersListModule { }
