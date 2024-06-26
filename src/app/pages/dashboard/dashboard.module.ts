import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { GlobalHeaderModule } from 'src/app/components/global-header/global-header.module';
import { AddPostComponent } from './add-post/add-post.component';
import { AddPostModule } from './add-post/add-post.module';
import { DsTopProfileCardModule } from './ds-top-profile-card/ds-top-profile-card.module';
import { DsPostsListModule } from './ds-posts-list/ds-posts-list.module';
import { PeopleMayKnowModule } from './people-may-know/people-may-know.module';

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    GlobalHeaderModule,
    AddPostModule,
    DsTopProfileCardModule,
    DsPostsListModule,
    PeopleMayKnowModule
  ],
})
export class DashboardPageModule {}
