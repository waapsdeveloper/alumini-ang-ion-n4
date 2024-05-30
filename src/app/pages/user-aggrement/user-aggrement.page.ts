import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-user-aggrement',
  templateUrl: './user-aggrement.page.html',
  styleUrls: ['./user-aggrement.page.scss'],
})
export class UserAggrementPage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }

}

