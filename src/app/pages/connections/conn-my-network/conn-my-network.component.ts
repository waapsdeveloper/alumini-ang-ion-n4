import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-conn-my-network',
  templateUrl: './conn-my-network.component.html',
  styleUrls: ['./conn-my-network.component.scss'],
})
export class ConnMyNetworkComponent implements OnInit {

  user: any;
  obj = {
    "connection_count": 0,
    "invitation_count": 0,
    "user_count": 0
  }
  constructor(private network: NetworkService, private users: UsersService) { }

  ngOnInit() {
    this.user = this.users.getUser();
    this.initialize()
  }

  async initialize() {
    const res = await this.network.getCnnStats(this.user.id)
    console.log(res);
    this.obj = res;
  }

}
