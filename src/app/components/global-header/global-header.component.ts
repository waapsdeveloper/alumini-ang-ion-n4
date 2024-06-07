import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { NavService } from 'src/app/services/nav.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
})
export class GlobalHeaderComponent  implements OnInit {

  user: any;
  constructor(private users: UsersService, private events: EventsService, public nav: NavService) { }

  ngOnInit() {
    this.user = this.users.getUser();

    this.events.subscribe('user-image-updated', (obj: any) => {
      console.log(obj)
      this.user.image = obj.image
    })
  }

  logout(){
    this.users.logout();
  }

  // jobsclick(){
  //   console.log("ranaaaaaa");
  //   this.nav.push("/pages/dl/jobs")
  // }
  // Eventclick(){
  //   this.nav.push("/pages/dl/events")
  // }
  goToMessages(){
    // this.nav.push('/pages/messages')
  }

}
