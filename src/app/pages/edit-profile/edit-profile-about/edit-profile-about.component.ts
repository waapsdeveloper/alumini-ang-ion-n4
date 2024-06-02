import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-edit-profile-about',
  templateUrl: './edit-profile-about.component.html',
  styleUrls: ['./edit-profile-about.component.scss'],
})
export class EditProfileAboutComponent  implements OnInit {

  user: any;
  biotext = '';
  selectedSkills = []

  constructor(private network: NetworkService, private users: UsersService, private utility: UtilityService, private events: EventsService) { }

  ngOnInit() {
    this.user = this.users.getUser();
    this.biotext = this.user.description;
    if(this.user.skills){
      let arr = this.user.skills.split(',')
      this.selectedSkills = arr;
    }
  }

  async saveMySkills(){
    console.log(this.biotext, this.selectedSkills);
    let obj = {
      description: this.biotext,
      skills: this.selectedSkills.join()
    }

    const res = await this.network.setUserDescAndSkills(obj, this.user.id);
    console.log(res);
    if(res){
      this.users.setUser(res);
      this.events.publish('profile-updated')
      this.utility.presentSuccessToast("About Saved");
    }


  }

}
