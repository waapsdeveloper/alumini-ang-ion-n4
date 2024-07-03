import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ModalService } from 'src/app/services/basic/modal.service';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

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
    const res = await this.getJobs('', 0, 10)
    this.list = res as any[];

  }

  getJobs(search = '', offset = 0, limit = 10) {

    return new Promise(async resolve => {
      let obj = {
        search,
        offset,
        limit
      }

      const res = await this.network.getJobs(obj);
      console.log(res);
      resolve(res);

    })


  }

  getNowDate(date: string) {

    const adjustedTime = moment(date).subtract(5, 'hours').format('hh:mm a');
    return adjustedTime;
  }

  async doSearch() {
    const res = await this.getJobs(this.searchText, 0, 10)
    this.list = res as any[];
  }

  async loadMore() {

    let obj = {
      search: this.searchText,
      offset: this.list.length,
      limit: 20
    }
    const res = await this.network.getJobs(obj)
    console.log(res);
    this.list = [...this.list, ...res];
  }

  async openJobDetails(item: any) {
    this.nav.push('/pages/dl/job-profle/' + item.id)
  }



}
