import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss'],
})
export class CommentBoxComponent implements OnInit {
  private _item: any;
  list: any[] = [];
  count: any
  @Input('item')
  public get item() {
    return this._item;
  };
  public set item(value: any) {
    this._item = value;
    this.callApi();
  }
  user: any;
  comment:any;

  constructor(private network: NetworkService, private users: UsersService) {

  }

  ngOnInit() {

  }

  async callApi(){
    let obj = {
      post_id: this.item.id,
    }
    let res = await this.network.getComments(obj);
    console.log(res, "asdagasghsaghjsah");
    this.list = res.comments;
    this.count = res.total;

  }
  async sendComment(){
    this.user = this.users.getUser();
    if(!this.comment){
      return;
    }
    let obj = {
      user_id: this.user.id,
      post_id: this.item.id,
      comment: this.comment,
    };
    let res = await this.network.postComment(obj);
    console.log(res);
    this.list.push(res)
    this.comment = null;

  }

  timeDilation(datetime: string) {
    // console.log(datetime);
    
    moment.updateLocale('en', {
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: 'a few seconds',
        ss: '%d s',
        m: "a minute",
        mm: "%dm",
        h: "an hour",
        hh: "%dh",
        d: "a day",
        dd: "%dd",
        M: "a month",
        MM: "%dM",
        y: "a year",
        yy: "%dy"
      }
    });
    const d = moment(datetime).fromNow()
    return d;
  }
}
