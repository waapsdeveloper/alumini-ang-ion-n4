import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { ActivatedRoute } from '@angular/router';

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
  constructor(injector: Injector, private route: ActivatedRoute) {
    super(injector)
  }

  ngOnInit() {
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

  blAction(type: string){

    switch(type){
      case 'c':



      break;
      case 'r':
      break;
      case 'd':
      break;
    }

  }



}
