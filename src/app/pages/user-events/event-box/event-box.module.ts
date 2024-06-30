import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBoxComponent } from './event-box.component';



@NgModule({
  declarations: [EventBoxComponent],
  imports: [
    CommonModule
  ],
  exports:[EventBoxComponent]
})
export class EventBoxModule { }
