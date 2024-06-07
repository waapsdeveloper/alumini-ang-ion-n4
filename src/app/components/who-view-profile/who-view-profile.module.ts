import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoViewProfileComponent } from './who-view-profile.component';



@NgModule({
  declarations: [WhoViewProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WhoViewProfileComponent
  ]
})
export class WhoViewProfileModule { }
