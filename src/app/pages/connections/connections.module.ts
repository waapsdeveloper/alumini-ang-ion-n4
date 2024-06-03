import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionsPageRoutingModule } from './connections-routing.module';

import { ConnectionsPage } from './connections.page';
import { InvitationsListModule } from './invitations-list/invitations-list.module';
import { BusersListModule } from './busers-list/busers-list.module';
import { CuserListModule } from './cuser-list/cuser-list.module';
import { ConnMyNetworkModule } from './conn-my-network/conn-my-network.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionsPageRoutingModule,
    InvitationsListModule,
    BusersListModule,
    CuserListModule,
    ConnMyNetworkModule
  ],
  declarations: [ConnectionsPage]
})
export class ConnectionsPageModule {}
