import { Component, OnInit } from '@angular/core';
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
  list: any[]=[]

  constructor(private users: UsersService, public nav: NavService , private network:NetworkService) {

   }

  ngOnInit() {
    this.user = this.users.getUser
  }

  jobDetail(){
    this.nav.push("/pages/dl/job-profile")
  }

  async initialize(){
    const res = await this.getJobs('',0, 10)
    this.list = res as any[];

  }

  getJobs(search = '', offset = 0, limit = 10){

    return new Promise( async resolve => {
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



}
