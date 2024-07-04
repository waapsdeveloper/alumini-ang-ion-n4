import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage extends BasePage implements OnInit {

  user: any;
  defaultImage = 'assets/img/p13.png';
  skills: any = []

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.setUserData();
  }

  setUserData(){
    this.user = this.users.getUser();
    console.log(this.user);
    
    if(this.user.skills){
      this.skills = this.user.skills.split(',');
    }
  }

  changeImage(){

  }

}
