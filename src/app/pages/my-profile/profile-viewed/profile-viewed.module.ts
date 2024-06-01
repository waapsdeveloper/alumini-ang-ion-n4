import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewedComponent } from './profile-viewed.component';



@NgModule({
  declarations: [ProfileViewedComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileViewedComponent]
})
export class ProfileViewedModule { }
