import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-with-image-box',
  templateUrl: './profile-with-image-box.component.html',
  styleUrls: ['./profile-with-image-box.component.scss'],
})
export class ProfileWithImageBoxComponent  implements OnInit {

  user: any;
  defaultImage = 'assets/img/p13.png';
  editDesignation = false;
  editedDesignation = 'UI DEsigner';
  totalConnections = 0;
  totalViews = 0;


  constructor(private users: UsersService, private network: NetworkService) { }

  ngOnInit() {
    this.setUserData();
  }

  setUserData(){
    this.user = this.users.getUser();
    this.getCnnStats();
  }

  saveDesignation(){
    this.editDesignation = false;
  }

  changeImage(){

  }

  logout(){
    this.users.logout();
  }

  async getCnnStats(){
    const res = await this.network.getCnnStats(this.user.id);
    console.log(res);

    this.totalConnections = res['connection_count'] ? res['connection_count'] : 0;
    this.totalViews = res['views_count'] ? res['views_count'] : 0;
  }

}
