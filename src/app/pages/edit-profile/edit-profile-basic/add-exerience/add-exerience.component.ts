import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-add-exerience',
  templateUrl: './add-exerience.component.html',
  styleUrls: ['./add-exerience.component.scss'],
})
export class AddExerienceComponent extends BasePage implements OnInit {

  @Input() data: any;
  user: any;
  obj = {

    company_name: '',
    title: '',
    description: '',
    location: '',
    start_date: '',
    user_id: '',
    end_date: ''
  }

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
      this.obj = this.data;
    }
  }

  async saveMyExperince() {
    if (!this.obj.company_name || !this.obj.title || !this.obj.location || !this.obj.description || !this.obj.start_date || !this.obj.end_date) {
      return console.log("Please fill in all the required fields");
    }
    this.user = this.users.getUser();
    let user_id = this.user.id
    console.log(user_id);
    this.obj['user_id'] = user_id;
    console.log(this.obj);
    let res = await this.network.AddExperince(this.obj);
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    this.modals.dismiss(res)
  }

  async EditMyEducation() {
    if (!this.obj.company_name || !this.obj.title || !this.obj.location || !this.obj.description || !this.obj.start_date || !this.obj.end_date) {
      return console.log("Please fill in all the required fields");
    }
    this.user = this.users.getUser();
    let user_id = this.user.id
    console.log(user_id);
    this.obj['user_id'] = user_id;
    console.log(this.obj);
    let res = await this.network.editExperince(this.obj, this.data.id);
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    this.modals.dismiss(res)
  }
}
