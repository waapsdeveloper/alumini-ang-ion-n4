import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-edit-profile-basic',
  templateUrl: './edit-profile-basic.component.html',
  styleUrls: ['./edit-profile-basic.component.scss'],
})
export class EditProfileBasicComponent extends BasePage implements OnInit {
  MyGroup: FormGroup | any;
  user:any;

  constructor(private fb: FormBuilder, injector:Injector) {
    super(injector)
   }



   ngOnInit() {
    this.MyGroup = this.fb.group({
      name: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      alum_registration: ['', [Validators.required]],
      batch: ['', [Validators.required]],
      department: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      day: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      location: ['', [Validators.required]],
      organization: ['', [Validators.required]],
      website: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      preferred_language: ['', [Validators.required]],
    });
  }
  
  async onSubmit() {
      console.log(this.MyGroup.value);
      const formdata = { ...this.MyGroup.value };
      const day = formdata.day;
      const month = formdata.month;
      const year = formdata.year;
      const date_of_birth = `${year}-${month}-${day}`;
      console.log(date_of_birth);
      delete formdata.day;
      delete formdata.month;
      delete formdata.year;
      formdata.date_of_birth = date_of_birth;
      this.user = localStorage.getItem('user');
      let userId = JSON.parse(this.user);
      console.log(formdata);
      // return
      const res = await this.network.editProfile(formdata, userId.id);
      console.log(res);
    
  }
  

  getYears(): number[] {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear - 100; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  }

}
