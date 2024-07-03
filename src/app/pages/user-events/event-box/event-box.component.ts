import { Component, Injector, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss'],
})
export class EventBoxComponent extends BasePage implements OnInit {

  user: any;
  count: any;

  @Input() item: any;

  constructor(injector: Injector) {
    super(injector)

  }

  async ngOnInit() {
    console.log(this.item);
    let obj = {
      event_id: this.item.id
    }
    let res = await this.network.getEventInterst(obj)
    let data = await this.network.getInterested(obj);
    console.log(data);
    
    this.count = data.intrested_count
    console.log(this.count);
  }
  getNowDate(date: string) {
    return moment(date).fromNow();
  }

  async getInterst(id: any) {
    this.user = localStorage.getItem('user')
    let user = JSON.parse(this.user);
    console.log(user);
    let obj = {
      event_id: id,
      user_id: user.id
    }

    let res = await this.network.eventInterest(obj);
    console.log(res);

  }

}
