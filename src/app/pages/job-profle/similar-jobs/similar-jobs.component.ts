import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-similar-jobs',
  templateUrl: './similar-jobs.component.html',
  styleUrls: ['./similar-jobs.component.scss'],
})
export class SimilarJobsComponent implements OnInit {

  user: any;
  list: any[] = [];

  constructor(private users: UsersService, private network: NetworkService, private nav: NavService) {

  }

  ngOnInit() {
    this.user = this.users.getUser()
    this.initialize()
  }

  async initialize() {

    let obj = {
      search: '',
      offset: 1,
      limit: 2
    }
    const res = await this.network.getJobs(obj)
    console.log(res);
    this.list = res;

  }

  async openJobDetails(item: any) {
    this.nav.push('/pages/dl/job-profle/' + item.id)
  }

  getNowDate(date: string) {
    const adjustedTime = moment(date).subtract(5, 'hours').format('hh:mm a');
    return adjustedTime;
  }

}
