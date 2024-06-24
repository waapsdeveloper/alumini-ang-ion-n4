import { Component, Injector, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BasePage } from '../../base-page/base-page';
import { UsersService } from 'src/app/services/users.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.scss'],
})
export class ElectionListComponent implements OnInit {
  @Input() item: any;
  user: any;
  selectedOption: string = '';
  constructor(private users: UsersService, private network: NetworkService) {

  }

  ngOnInit() {
    this.user = this.users.getUser();
    console.log(this.item);

    this.initialize()

   }

  async initialize(){

    const res = await this.network.getElectionItem({
      election_id: this.item.id
    })

    console.log(res);

    if(res.length > 0){
      this.item = res[0]
    }


  }

  getNowDate(date: string) {
    return moment(date).fromNow();
  };

  async selectedOptions(key: any){
    let obj = {
      election_id: this.item.id,
      user_id: this.user.id,
      option: key
    }
    console.log(obj);

    let res = await this.network.seletedElectionOption(obj);
    console.log(res);

    this.initialize()



  }

  getGradientStyle(percentage: number): any {
    return {
      'background': `linear-gradient(90deg, rgba(129, 24, 27, 0.2) ${percentage}%, white ${percentage}%)`
    };
  }

}
