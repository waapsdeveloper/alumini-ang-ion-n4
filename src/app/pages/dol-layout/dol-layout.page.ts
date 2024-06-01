import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dol-layout',
  templateUrl: './dol-layout.page.html',
  styleUrls: ['./dol-layout.page.scss'],
})
export class DolLayoutPage extends BasePage  {

  constructor(injector: Injector, private authService: UsersService) {
    super(injector)
  }

  // ngOnInit() {
  //   setTimeout(() => {

  //     if (!this.authService.isProfileComplete()) {
  //       this.nav.push('/pages/dl/edit-profile');
  //     }
  //   })
  // }

}
