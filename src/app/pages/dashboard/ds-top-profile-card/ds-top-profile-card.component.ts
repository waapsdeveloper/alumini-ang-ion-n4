import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ds-top-profile-card',
  templateUrl: './ds-top-profile-card.component.html',
  styleUrls: ['./ds-top-profile-card.component.scss'],
})
export class DsTopProfileCardComponent implements OnInit {

  user: any;
  totalConnections = 0;
  totalViews = 0;

  constructor(public nav: NavService, private users: UsersService, private events: EventsService, private network: NetworkService) { }


  ngOnInit() {
    this.user = this.users.getUser();
    this.getCnnStats();
    this.events.subscribe('profile-updated', () => {
      this.user = this.users.getUser();
    })
  }

  async getCnnStats(){
    const res = await this.network.getCnnStats(this.user.id);
    console.log(res);

    this.totalConnections = res['connection_count'] ? res['connection_count'] : 0;
    this.totalViews = res['views_count'] ? res['views_count'] : 0;

  }

}
