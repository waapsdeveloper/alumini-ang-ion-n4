import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { AddEducationComponent } from '../edit-profile-basic/add-education/add-education.component';
import { AddExerienceComponent } from '../edit-profile-basic/add-exerience/add-exerience.component';

@Component({
  selector: 'app-edit-profile-about',
  templateUrl: './edit-profile-about.component.html',
  styleUrls: ['./edit-profile-about.component.scss'],
})
export class EditProfileAboutComponent extends BasePage implements OnInit {

  user: any;
  biotext = '';
  education: any;
  experince: any;
  selectedSkills = []

  constructor(injector: Injector) {
    super(injector)

    this.user = this.users.getUser();
    console.log(this.user);
  }

  ngOnInit() {
    this.biotext = this.user.description;

    if (this.user.skills) {
      let arr = this.user.skills.split(',')
      this.selectedSkills = arr;
    }
  }

  async saveMySkills() {
    console.log(this.biotext, this.selectedSkills);
    let obj = {
      description: this.biotext,
      skills: this.selectedSkills.join()
    }
    const res = await this.network.setUserDescAndSkills(obj, this.user.id);
    console.log(res);
    if (res) {
      this.users.setUser(res);
      this.events.publish('profile-updated')
      this.utility.presentSuccessToast("About Saved");
    }
  }


}
