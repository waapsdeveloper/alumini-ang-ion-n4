import { Component, Injector, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.scss'],
})
export class ElectionListComponent extends BasePage implements OnInit {
  @Input() item: any;
  user: any;
  selectedOption: string = '';
  constructor(injector:Injector) {
    super(injector)
  }

  ngOnInit() {
    this.user = localStorage.getItem('user')
    console.log('====================================');
    console.log(this.item);
    console.log('====================================');

   }
  getNowDate(date: string) {

    return moment(date).fromNow();
  };

  selectedOptions(key: any){
    let user = JSON.parse(this.user);
    console.log(user);
    let obj = {
      election_id: this.item.id,
      user_id: user.id,
      option: key
    }
    console.log(obj);
    
    let res = this.network.seletedElectionOption(obj);
    console.log(res);
    
  }
}
