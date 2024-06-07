import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  user: any;
  list: any = [];
  message = ""
  messages: any;
  selectedItem: any;
  room_id: any;
  data: any;
  formattedDate: any;

  constructor(private network: NetworkService, private users: UsersService) { }

  ngOnInit() {
    this.user = this.users.getUser();
    this.initialize()
  }

  async initialize() {

    let obj = {
      search: '',
      offset: 0,
      limit: 20
    }
    const res = await this.network.getAddedConnections(obj, this.user.id)
    console.log(res);
    this.list = res;

  }

  async selectUserToChat(item: any) {
    this.selectedItem = item;
    console.log(this.selectedItem);
    let obj = {
      user_id_1: this.user.id,
      user_id_2: this.selectedItem.id,
    }
    this.data = await this.network.getRoom(obj) as any[];
    console.log(this.data);
    this.room_id = this.data.id;
    this.getMessages(this.room_id)

  }


  async getMessages(id: any){

    let res = await this.network.getMessages(id)
    console.log(res);

    this.messages = res;

    let date = this.messages.created_at;
    this.formattedDate = moment(date).format('YYYY-MM-DD');
  }

  onKeyUp(event: any) {
    console.log(
      event.target.value
    );

    this.message = event.target.value

  }

  async sendMessage() {
    if (!this.message) {
      return;
    }

    let obj = {
      user_id: this.user.id,
      message: this.message,
      room_id: this.room_id
    };

    console.log(obj);
    // return;

    let res = await this.network.sendMessage(obj) as any[];
    console.log(res);
    this.getMessages(this.room_id);

    this.message = '';
  }


}
