import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectionListComponent } from './election-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ElectionListComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [ElectionListComponent]
})
export class ElectionListModule { }
