import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleMayKnowComponent } from './people-may-know.component';



@NgModule({
  declarations: [PeopleMayKnowComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PeopleMayKnowComponent
  ]
})
export class PeopleMayKnowModule { }
