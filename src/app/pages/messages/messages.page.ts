import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  @ViewChild('scroll', { read: ElementRef }) public scrollableDiv!: ElementRef<any>;

  user: any;
  list: any[] = [];
  message = ""
  messages: any;
  selectedItem: any;
  room_id: any;
  data: any;
  formattedDate: any;

  constructor(private network: NetworkService, private users: UsersService, private events: EventsService) { }

  ngOnInit() {
    this.user = this.users.getUser();
    this.initialize();
    this.messageReceivedViaPusher()
  }

  messageReceivedViaPusher(){
    this.events.registerPusherEvent(this.user.id);
    this.events.subscribe('message-received-via-pusher', this.updateChatsByMessageReceived.bind(this))
  }

  updateChatsByMessageReceived(data: any){
    console.log(data);

    // create logic here
    console.log(this.list, data)
    let rlistIndex = this.list.findIndex( x => x.id == data.user_id);
    if(rlistIndex != -1){
      this.list[rlistIndex]['last_message'] = data['message'];

      if(this.messages.length > 0){
        if(this.messages[0]['room_id'] == data['room_id']){
          this.messages.push(data);

          setTimeout(() => {
            this.scrollToBottom()
          }, 1000);

        }


      }
    }

  }

  scrollToBottom(): void {
    try {
      console.log(this.scrollableDiv)
      if(this.scrollableDiv){
        this.scrollableDiv.nativeElement.scrollTop = this.scrollableDiv.nativeElement.scrollHeight;
      }

    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
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
    this.getMessages(this.room_id);

    this.events.registerPusherEvent(this.room_id);

  }


  async getMessages(id: any){

    let res = await this.network.getMessages(id)
    console.log(res);
    this.messages = res;

    setTimeout(() => {
      this.scrollToBottom()
    }, 1000);

    // let date = this.messages.created_at;
    // this.formattedDate = moment(date).format('YYYY-MM-DD');

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
