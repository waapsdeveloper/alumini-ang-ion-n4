import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { BasePage } from '../../base-page/base-page';
import * as moment from 'moment';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss'],
})
export class ProfileAboutComponent extends BasePage implements OnInit {
  user: any;
  education: any;
  start_date: any;
  end_date: any;
  experince: any;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector)
  }
  ngOnInit() {
    this.user = this.users.getUser();

    this.getMyEducation();
    this.getMyExperince();
  }
  async getMyEducation() {
    this.user = this.users.getUser();
    let user_id = this.user.id;

    let res = await this.network.getEducation(user_id);
    console.log(res);

    this.education = res;

  }
  async getMyExperince() {
    this.user = this.users.getUser();
    let user_id = this.user.id;

    let res = await this.network.getExperince(user_id);
    console.log(res);

    this.experince = res;
    const startdate = this.experince.start_date;
    const endTime = this.experince.end_date;
    this.start_date = moment(startdate).format('Y-MM-DD');
    this.end_date = moment(startdate).format('Y-MM-DD');

  }
}
