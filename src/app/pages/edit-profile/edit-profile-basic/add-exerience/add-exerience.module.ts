import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExerienceComponent } from './add-exerience.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddExerienceComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddExerienceComponent]
})
export class AddExerienceModule { }
