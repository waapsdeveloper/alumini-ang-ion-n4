import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  user: any;
  list: any = [];
  selectedItem: any;

  constructor(private network: NetworkService, private users: UsersService) { }

  ngOnInit() {
    this.user = this.users.getUser();
    this.initialize()
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

  selectUserToChat(item: any){
    this.selectedItem = item;


  }

}
