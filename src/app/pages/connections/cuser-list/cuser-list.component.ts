import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-cuser-list',
  templateUrl: './cuser-list.component.html',
  styleUrls: ['./cuser-list.component.scss'],
})
export class CuserListComponent  implements OnInit {

  user: any;
  list: any[] = []
  constructor(private users: UsersService, private network: NetworkService, private utility: UtilityService ) { }

  ngOnInit() {
    this.user = this.users.getUser();
    this.initialize();
  }

  async initialize(){
    let obj = {
      search: '',
      offset: 0,
      limit: 20
    }
    const res = await this.network.getAddedConnections(obj, this.user.id)
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
    //this.list = res;

    this.utility.presentSuccessToast("Invitation sent - Thank you")
    const findIndex = this.list.findIndex( x => x.id == item.id);

    this.list.splice(findIndex, 1);

  }

  async removeConnection(item: any){

    let obj = {
      connection_id: item.id
    }

    const res = await this.network.removeAddedConnection(obj, this.user.id);
    this.utility.presentFailureToast("Connection removed")

    let index = this.list.findIndex(x => x.id == item.id);
    this.list.splice(index, 1)

  }

}
