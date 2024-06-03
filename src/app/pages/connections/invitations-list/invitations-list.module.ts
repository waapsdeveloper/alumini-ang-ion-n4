import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationsListComponent } from './invitations-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [InvitationsListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InvitationsListComponent
  ]
})
export class InvitationsListModule { }
