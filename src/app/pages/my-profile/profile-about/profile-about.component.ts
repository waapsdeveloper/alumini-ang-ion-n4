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
  day: any;
  month: any;
  year: any;
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
    if(this.user.date_of_birth){

      const dateOfBirth = new Date(this.user.date_of_birth);

      this.day = dateOfBirth.getDate().toString().padStart(2, '0');
      this.month = (dateOfBirth.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
      this.year = dateOfBirth.getFullYear().toString();


    }
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
    this.experince = res;
    this.experince.forEach((exp: { start_date: moment.MomentInput; end_date: moment.MomentInput; }) => {
      exp.start_date = moment(exp.start_date).format('YYYY-MM-DD');
      exp.end_date = moment(exp.end_date).format('YYYY-MM-DD');
    });

  }
}
