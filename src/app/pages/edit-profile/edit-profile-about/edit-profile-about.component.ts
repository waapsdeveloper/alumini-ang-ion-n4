import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-profile-about',
  templateUrl: './edit-profile-about.component.html',
  styleUrls: ['./edit-profile-about.component.scss'],
})
export class EditProfileAboutComponent  implements OnInit {

  user: any;
  biotext = '';
  selectedSkills = []

  constructor(private network: NetworkService, private users: UsersService) { }

  ngOnInit() {
    this.user = this.users.getUser();
  }

  async saveMySkills(){
    console.log(this.biotext, this.selectedSkills);
    let obj = {
      description: this.biotext,
      skills: this.selectedSkills.join()
    }

    const res = await this.network.setUserDescAndSkills(obj, this.user.id);
    console.log(res)


  }

}
