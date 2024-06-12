import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.page.html',
  styleUrls: ['./elections.page.scss'],
})
export class ElectionsPage implements OnInit {

  user: any;
  options: any[] = [];
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
    const res = await this.getElections('', 0, 10)
    this.list = res as any[];

  }

  getElections(search = '', offset = 0, limit = 10) {

    return new Promise(async resolve => {
      let obj = {
        search,
        offset,
        limit
      }

      const res = await this.network.getElections(obj);
      console.log(res);
      
      resolve(res);


    })


  }

  getNowDate(date: string) {

    return moment(date).fromNow();
  }

  async doSearch() {
    const res = await this.getElections(this.searchText, 0, 10)
    this.list = res as any[];
  }



}
