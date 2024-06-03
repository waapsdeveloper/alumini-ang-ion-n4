import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';
import { ChatUserBoxSideModule } from './chat-user-box-side/chat-user-box-side.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    ChatUserBoxSideModule
  ],
  declarations: [MessagesPage]
})
export class MessagesPageModule {}
