import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage extends BasePage implements OnInit {

  visiter: any;
  user: any;
  link = '';
  day: any;
  month: any;
  experince: any;
  education: any;
  year: any;
  skills: any[] = [];
  cStatus = '';
  MyGroup: FormGroup | any;

  constructor(private fb: FormBuilder, injector: Injector, private route: ActivatedRoute) {
    super(injector)
  }

  ngOnInit() {
    this.MyGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
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
      organization: [''],
      website: [''],
      gender: ['', [Validators.required]],
      preferred_language: ['', [Validators.required]],
    });


    this.visiter = this.users.getUser();
    console.log('====================================');
    console.log(this.visiter);
    console.log('====================================');
    this.getViewUser()
    this.getMyExperince()
    this.getMyEducation();
  }
  copyToClipboard() {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('value', this.link);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    alert('Link copied to clipboard!');
  }
  async getViewUser(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log('W', id);
    this.setUserProfileVIew(id)
    const res = await this.network.getViewUser(id);
    console.log(res, "dfsdf");
    this.link = 'https://aluminiconnect.online//pages/dl/view-profile/' + id;
    this.user = res;
    if(this.user.skills){
      this.skills = this.user.skills.split(',');
    }

    this.getIfUserConnected(id);

    if(this.user.date_of_birth){

      const dateOfBirth = new Date(this.user.date_of_birth);

      this.day = dateOfBirth.getDate().toString().padStart(2, '0');
      this.month = (dateOfBirth.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
      this.year = dateOfBirth.getFullYear().toString();

      this.MyGroup.controls['day'].setValue(this.day);
      this.MyGroup.controls['date_of_birth'].setValue(this.user.date_of_birth);
      this.MyGroup.controls['month'].setValue(this.month);
      this.MyGroup.controls['year'].setValue(this.year);

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

  async setUserProfileVIew(id: any) {

    let obj = {
      viewer_id: this.visiter.id,
      user_id: id
    }
    const res = await this.network.setUserProfileVIew(obj)


  }

  async getIfUserConnected(id: any){


    let obj = {
      viewer_id: this.visiter.id,
      user_id: id
    }
    const res = await this.network.isUserCOnnected(obj);
    console.log(res);
    this.cStatus = res.cstatus


  }

  async blAction(type: string){

    switch(type){
      case 'c':

      let obj = {
        sender_id: this.visiter.id,
        receiver_id: this.user.id,
        status: 0
      }

      const res = await this.network.sendConnectionRequest(obj, this.user.id)
      console.log(res);
      //this.list = res;

      this.utility.presentSuccessToast("Invitation sent - Thank you");
      this.cStatus = '';


      break;
      case 'r':




      break;
      case 'd':

        let obj2 = {
          connection_id: this.user.id
        }

        const res2 = await this.network.removeAddedConnection(obj2, this.visiter.id);
        this.utility.presentFailureToast("Connection removed")

        this.cStatus = '';

      break;
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

  async getMyExperince() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('W', id);
    let user_id = id;

    let res = await this.network.getExperince(user_id);
    console.log(res , "asfsf");

    this.experince = res;
    this.experince = res;
    this.experince.forEach((exp: { start_date: moment.MomentInput; end_date: moment.MomentInput; }) => {
      exp.start_date = moment(exp.start_date).format('YYYY-MM-DD');
      exp.end_date = moment(exp.end_date).format('YYYY-MM-DD');
    });

  }


  async getMyEducation() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('W', id);
    let user_id = id;
    let res = await this.network.getEducation(user_id);
    // console.log(res);
    this.education = res;
    this.education.forEach((exp: { start_date: moment.MomentInput; end_date: moment.MomentInput; }) => {
      exp.start_date = moment(exp.start_date).format('YYYY-MM-DD');
      exp.end_date = moment(exp.end_date).format('YYYY-MM-DD');
    });


  }



}
