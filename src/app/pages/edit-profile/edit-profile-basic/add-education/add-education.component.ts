import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss'],
})
export class AddEducationComponent extends BasePage implements OnInit {

  user: any;
  @Input() data: any;
  obj = {

    institute_name: '',
    degree: '',
    field_of_study: '',
    description: '',
    grade: '',
    user_id: '',
    start_date: '',
    end_date: ''
  }
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() { 
    console.log(this.data);
    if(this.data){
      this.obj = this.data;
    }
  }

  async EditMyEducation(){
    if (!this.obj.institute_name || !this.obj.degree || !this.obj.field_of_study || !this.obj.description || !this.obj.grade || !this.obj.start_date || !this.obj.end_date) {
      return console.log("Please fill in all the required fields");
    }
    this.user = this.users.getUser();
    let user_id = this.user.id
    console.log(user_id);
    // return
    this.obj['user_id'] = user_id;

    console.log(this.obj)

    let res = await this.network.editEducaion(this.obj, this.data.id);
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    this.modals.dismiss(res)
  }

  async saveMyEducation() {

    if (!this.obj.institute_name || !this.obj.degree || !this.obj.field_of_study || !this.obj.description || !this.obj.grade || !this.obj.start_date || !this.obj.end_date) {
      return console.log("Please fill in all the required fields");
    }
    this.user = this.users.getUser();
    let user_id = this.user.id
    console.log(user_id);
    // return
    this.obj['user_id'] = user_id;

    console.log(this.obj)

    let res = await this.network.AddEducaion(this.obj);
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    this.modals.dismiss(res)
  }

}
