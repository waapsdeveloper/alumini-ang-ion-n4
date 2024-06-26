import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.page.html',
  styleUrls: ['./user-events.page.scss'],
})
export class UserEventsPage implements OnInit {
  user: any
  list: any[] = []
  searchText = '';

  constructor(private users: UsersService, public nav: NavService, private network: NetworkService) {

  }

  ngOnInit() {
    this.user = this.users.getUser()
    this.initialize();
  }

  jobDetail(item: any) {
    this.nav.push("/pages/dl/job-profile")
  }

  async initialize() {
    const res = await this.getEvents('', 0, 10)
    this.list = res as any[];

  }

  getEvents(search = '', offset = 0, limit = 10) {

    return new Promise(async resolve => {
      let obj = {
        search,
        offset,
        limit
      }

      const res = await this.network.getEvents(obj);
      console.log(res);
      resolve(res);

    })


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


  async doSearch() {
    const res = await this.getEvents(this.searchText, 0, 10)
    this.list = res as any[];
  }

  async loadMore() {

    let obj = {
      search: this.searchText,
      offset: this.list.length,
      limit: 20
    }
    const res = await this.network.getEvents(obj)
    console.log(res);
    this.list = [...this.list, ...res];
  }



}
