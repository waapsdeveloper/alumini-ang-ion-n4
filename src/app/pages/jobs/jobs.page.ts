import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

  constructor(private users: UsersService, public nav: NavService) { }

  ngOnInit() {
  }

  jobDetail(){
    this.nav.push("/pages/dl/job-profile")
  }

}
