import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatUserBoxSideComponent } from './chat-user-box-side.component';



@NgModule({
  declarations: [ChatUserBoxSideComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ChatUserBoxSideComponent
  ]
})
export class ChatUserBoxSideModule { }
