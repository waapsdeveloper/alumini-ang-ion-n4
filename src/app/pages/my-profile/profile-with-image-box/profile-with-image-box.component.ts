import { Component, OnInit } from '@angular/core';
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
  editedDesignation = 'UI DEsigner'

  constructor(private users: UsersService) { }

  ngOnInit() {
    this.setUserData();
  }

  setUserData(){
    this.user = this.users.getUser();
  }

  saveDesignation(){
    this.editDesignation = false;
  }

  changeImage(){

  }

  logout(){
    this.users.logout();
  }

}
