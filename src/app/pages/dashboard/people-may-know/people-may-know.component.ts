import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-people-may-know',
  templateUrl: './people-may-know.component.html',
  styleUrls: ['./people-may-know.component.scss'],
})
export class PeopleMayKnowComponent  implements OnInit {

  user: any;
  list: any[] = [];

  constructor(private users: UsersService, private network: NetworkService) {

  }

  ngOnInit() {
    this.user = this.users.getUser()
    this.initialize()
  }

  async initialize(){

    let obj = {
      search: '',
      offset: 0,
      limit: 5
    }
    const res = await this.network.getNonAddedConnections(obj, this.user.id)
    console.log(res);
    this.list = res;

  }

  async sendConnectionInvite(item: any){
    console.log(item);

    let obj = {
      sender_id: this.user.id,
      receiver_id: item.id,
      status: 0
    }

    const res = await this.network.sendConnectionRequest(obj, this.user.id)
    console.log(res);
    this.list = res;

  }

}
