import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-busers-list',
  templateUrl: './busers-list.component.html',
  styleUrls: ['./busers-list.component.scss'],
})
export class BusersListComponent  implements OnInit {

  user: any;
  list: any[] = [];
  searchText = '';

  constructor(private users: UsersService, private network: NetworkService, private utility: UtilityService, public nav: NavService  ) { }

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
    //this.list = res;

    this.utility.presentSuccessToast("Invitation sent - Thank you")
    const findIndex = this.list.findIndex( x => x.id == item.id);

    this.list.splice(findIndex, 1);

  }

  async doSearch($event: any){

    let v = $event.target.value;

    let obj = {
      search: v,
      offset: 0,
      limit: 20
    }
    const res = await this.network.getNonAddedConnections(obj, this.user.id)
    console.log(res);
    this.list = res;

  }

  async loadMore(){

    let obj = {
      search: this.searchText,
      offset: this.list.length,
      limit: 20
    }
    const res = await this.network.getNonAddedConnections(obj, this.user.id)
    console.log(res);
    this.list = [...this.list, ...res];
  }

}
