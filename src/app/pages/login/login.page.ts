import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {

  aForm: FormGroup | any;

  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector)
  }

  ngOnInit(): void {
    this.aForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit(){
    if (this.aForm.valid) {
      console.log(this.aForm.value);
      const formdata = this.aForm.value;

      const res = await this.network.login(formdata);
      console.log(res);

      if(res && res.token){
        this.users.setToken(res.token);

        if(res && res.user){
          this.users.setUser(res.user)
          this.nav.push('/pages/dl/dashboard')
        }

      }



    }
  }

}
