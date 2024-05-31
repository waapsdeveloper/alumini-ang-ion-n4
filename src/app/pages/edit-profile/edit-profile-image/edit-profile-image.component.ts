import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-profile-image',
  templateUrl: './edit-profile-image.component.html',
  styleUrls: ['./edit-profile-image.component.scss'],
})
export class EditProfileImageComponent  implements OnInit {

  user: any;
  designatedImage = '/assets/img/p13.png';

  constructor(private users: UsersService) { }

  ngOnInit() {
    this.user = this.users.getUser();
  }





}
