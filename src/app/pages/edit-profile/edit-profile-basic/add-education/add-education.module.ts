import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEducationComponent } from './add-education.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddEducationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[AddEducationComponent]
})
export class AddEducationModule { }
