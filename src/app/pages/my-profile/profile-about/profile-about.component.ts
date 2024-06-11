import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss'],
})
export class ProfileAboutComponent  implements OnInit {

  user: any;
  constructor(private users: UsersService) { }

  ngOnInit() {
    this.user = this.users.getUser();
  }

}
