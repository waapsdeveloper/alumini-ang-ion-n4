import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { NavService } from 'src/app/services/nav.service';
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

  constructor(public nav: NavService, private users: UsersService, private events: EventsService) { }


  ngOnInit() {
    this.user = this.users.getUser();

    this.events.subscribe('profile-updated', () => {
      this.user = this.users.getUser();
    })
  }

}
