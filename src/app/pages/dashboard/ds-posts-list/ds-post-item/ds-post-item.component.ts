import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import 'moment-timezone';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { NetworkService } from 'src/app/services/network.service';
import { CommentBoxComponent } from './comment-box/comment-box.component';

@Component({
  selector: 'app-ds-post-item',
  templateUrl: './ds-post-item.component.html',
  styleUrls: ['./ds-post-item.component.scss'],
})
export class DsPostItemComponent extends BasePage implements OnInit {

  user: any;
  like: any;
  flag= false;
  data: any
  private _item: any;

  @Output('deletePostEvent') deletePostEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input('item')
  public get item(): any {
    return this._item;
  }

  public set item(value: any) {
    this._item = value;
    this.initialize(value)

  }

  constructor(injector:Injector) {
    super(injector)
    this.initialize(null);
   }

  async ngOnInit() {
    this.user = this.users.getUser();
    let obj = {
      post_id: this.item.id,
      user_id: this.user.id
    }
    this.data = await this.network.getLikes(obj) as any [];
    this.like = this.data.totalLikes;
    this.flag = this.data.mylike >= 1;
   }

  initialize(value: any) {
    console.log(value);



  }

  timeDilation(datetime: string) {
    const d = moment(datetime).tz('Asia/Karachi').fromNow()
    return d;
  }
  async addLike(item: any) {

    // return
    let obj = {
      post_id: item.id,
      user_id: this.user.id
    }
    console.log('====================================');
    console.log(obj);
    console.log('====================================');
    let res = await this.network.addLike(obj)
    console.log(res);
    this.data = await this.network.getLikes(obj) as any [];
    this.like = this.data.totalLikes;
    this.flag = this.data.mylike >= 1;

  }
  async removeLike(item: any){

    let obj = {
      post_id: item.id,
      user_id: this.user.id
    }
    let res = await this.network.removeLike(obj)
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    this.flag = false;

  }
  openComments(item: any): void {
    console.log(item);
    this.modals.present(CommentBoxComponent, { item });
  }

  async deletePost(item: any){

    const flag = await this.utility.presentConfirm("Yes", "No", "Delete Post", "Are you sure you want to delete post?")

    if(flag){
      let res = await this.network.deletePost(item.id)
      console.log(res)
      this.deletePostEvent.emit(item)
    }




  }

}
