import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../../base-page/base-page';
import { AddExerienceComponent } from './add-exerience/add-exerience.component';
import { AddEducationComponent } from './add-education/add-education.component';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-profile-basic',
  templateUrl: './edit-profile-basic.component.html',
  styleUrls: ['./edit-profile-basic.component.scss'],
})
export class EditProfileBasicComponent extends BasePage implements OnInit {
  MyGroup: FormGroup | any;
  user: any;
  education: any;
  start_date: any;
  end_date: any;
  experince:any;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector)
  }



  ngOnInit() {
    this.MyGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      alum_registration: [''],
      batch: ['', [Validators.required]],
      department: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      day: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      location: ['', [Validators.required]],
      organization: [''],
      website: [''],
      gender: ['', [Validators.required]],
      preferred_language: ['', [Validators.required]],
    });
    this.getMyEducation();
    this.getMyExperince();


    this.user = this.users.getUser();

    if (this.user.date_of_birth) {

      const dateOfBirth = new Date(this.user.date_of_birth);

      const day = dateOfBirth.getDate().toString().padStart(2, '0');
      const month = (dateOfBirth.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
      const year = dateOfBirth.getFullYear().toString();

      this.MyGroup.controls['day'].setValue(day);
      this.MyGroup.controls['date_of_birth'].setValue(this.user.date_of_birth);
      this.MyGroup.controls['month'].setValue(month);
      this.MyGroup.controls['year'].setValue(year);

    }


    this.MyGroup.controls['name'].setValue(this.user.name);
    this.MyGroup.controls['email'].setValue(this.user.email);
    this.MyGroup.controls['username'].setValue(this.user.username);
    this.MyGroup.controls['phone'].setValue(this.user.phone);
    this.MyGroup.controls['alum_registration'].setValue(this.user.alum_registration);
    this.MyGroup.controls['batch'].setValue(this.user.batch);
    this.MyGroup.controls['department'].setValue(this.user.department);
    this.MyGroup.controls['occupation'].setValue(this.user.occupation);

    this.MyGroup.controls['location'].setValue(this.user.location);
    this.MyGroup.controls['organization'].setValue(this.user.organization);
    this.MyGroup.controls['website'].setValue(this.user.website);
    this.MyGroup.controls['gender'].setValue(this.user.gender);
    this.MyGroup.controls['preferred_language'].setValue(this.user.preferred_language);






  }

  async onSubmit() {
    console.log(this.MyGroup.value);

    let formdata = { ...this.MyGroup.value };
    const day = formdata.day;
    const month = formdata.month;
    const year = formdata.year;
    if (day && month && year) {
      let date_of_birth = year + '-' + month + '-' + day
      console.log(date_of_birth)
      this.MyGroup.controls['date_of_birth'].setValue(date_of_birth)
    }

    formdata = { ...this.MyGroup.value };

    if (!this.MyGroup.valid) {
      this.utility.presentFailureToast("All Fields required");
      return;
    }




    // return
    const res = await this.network.editProfile(formdata, this.user.id);
    console.log(res);
    if (res) {
      this.users.setUser(res);
      this.events.publish('profile-updated')
      this.utility.presentSuccessToast("Profile Saved");
      this.nav.push('/pages/dl/dashboard')
    }

  }


  getYears(): number[] {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear - 100; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  }

  async addEducation() {

    let res = await this.modals.present(AddEducationComponent);
    console.log('====================================');
    console.log(res);
    console.log('====================================');

    this.getMyEducation();
  }

  async editEducation(data: any) {

    let res = await this.modals.present(AddExerienceComponent, {data: data});
    console.log('====================================');
    console.log(res);
    console.log('====================================');

    this.getMyEducation();
  }
  async editExperince(data: any){
    let res = await this.modals.present(AddExerienceComponent, {data: data});
    console.log('====================================');
    console.log(res);
    console.log('====================================');

    this.getMyEducation();
  }

  async addExperince() {
    let res = await this.modals.present(AddExerienceComponent);
    console.log('====================================');
    console.log(res);
    console.log('====================================');

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
    console.log(res[0]);

    this.experince = res;
    this.experince.forEach((exp: { start_date: moment.MomentInput; end_date: moment.MomentInput; }) => {
      exp.start_date = moment(exp.start_date).format('YYYY-MM-DD');
      exp.end_date = moment(exp.end_date).format('YYYY-MM-DD');
    });


  }

}
