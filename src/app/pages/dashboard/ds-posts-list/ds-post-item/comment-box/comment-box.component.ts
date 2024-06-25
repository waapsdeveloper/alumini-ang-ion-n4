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
    // let user = JSON.parse(this.user);
    let obj = {
      post_id: this.item.id,
    }

    let res = await this.network.getComments(obj);
    console.log(res);
    this.list = res.comments;

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
    const d = moment(datetime).fromNow()
    return d;
  }
}
