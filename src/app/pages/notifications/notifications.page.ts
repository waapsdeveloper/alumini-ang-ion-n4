import { Component, Injector, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { BasePage } from '../base-page/base-page';
import * as moment from 'moment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage extends BasePage implements OnInit {

  user: any;
  list: any[] = [1, 2, 3, 4, 5];

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.user = this.users.getUser();
    this.initialize()
  }

  async initialize() {

    let obj = {
      "user_id": this.user.id,
      "offset": 0,
      "limit": 10
    }
    const res = await this.network.getNotifications(obj);
    console.log(res);
    this.list = res;
  }

  timeDilation(datetime: string) {
    const adjustedTime = moment(datetime).subtract(5, 'hours').format('hh:mm a');
    return adjustedTime;
  }

}
