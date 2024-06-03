import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuserListComponent } from './cuser-list.component';



@NgModule({
  declarations: [CuserListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CuserListComponent
  ]

})
export class CuserListModule { }
