import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-basic',
  templateUrl: './edit-profile-basic.component.html',
  styleUrls: ['./edit-profile-basic.component.scss'],
})
export class EditProfileBasicComponent implements OnInit {
  aForm: FormGroup | any;

 
  constructor(private fb: FormBuilder) { }



  ngOnInit() {
    this.aForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.aForm.valid);
  }

  getYears(): number[] {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear - 100; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  }

}
