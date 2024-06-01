import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
})
export class GlobalHeaderComponent  implements OnInit {

  user: any;
  constructor(private users: UsersService, public nav: NavService) { }

  ngOnInit() {
    this.user = this.users.getUser()
  }

  logout(){
    this.users.logout();
  }

  jobsclick(){
    console.log("ranaaaaaa");
    this.nav.push("/pages/dl/jobs")
  }
  Eventclick(){
    this.nav.push("/pages/dl/events")
  }

}
