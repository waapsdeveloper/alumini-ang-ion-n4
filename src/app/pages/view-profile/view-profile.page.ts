import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage extends BasePage implements OnInit {

  visiter: any;
  user: any;
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
    this.getViewUser()
  }

  async getViewUser(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log('W', id);

    this.setUserProfileVIew(id)

    const res = await this.network.getViewUser(id);
    console.log(res);
    this.user = res;
    if(this.user.skills){
      this.skills = this.user.skills.split(',');
    }

    this.getIfUserConnected(id);

    if(this.user.date_of_birth){

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



}
