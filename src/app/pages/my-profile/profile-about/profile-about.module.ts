import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileAboutComponent } from './profile-about.component';



@NgModule({
  declarations: [ProfileAboutComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileAboutComponent]
})
export class ProfileAboutModule { }
