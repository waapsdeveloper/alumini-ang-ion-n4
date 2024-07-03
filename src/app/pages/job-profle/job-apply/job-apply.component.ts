import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss'],
})
export class JobApplyComponent extends BasePage implements OnInit {

  user: any;
  @Input() id: any;
  obj = {
    name: '',
    phone_number: '',
    user_id: '',
    job_id: '',
    cv: ''
  };

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.obj.cv = reader.result as string;
        console.log(this.obj.cv);
      };

      reader.readAsDataURL(file);
    }
  }

  async applyToJob() {
    if (!this.obj.name || !this.obj.phone_number) {
      return console.log("Please fill in all the required fields");
    }

    this.user = this.users.getUser();
    let user_id = this.user.id;
    console.log(user_id);

    this.obj['user_id'] = user_id;
    this.obj['job_id'] = this.id;
    console.log('====================================');
    console.log(this.obj);
    console.log('====================================');

    let res = await this.network.applyJob(this.obj);
    console.log(res);
    this.modals.dismiss();
  }
}
