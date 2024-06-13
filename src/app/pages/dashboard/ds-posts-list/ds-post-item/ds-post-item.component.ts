import { Component, Injector, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
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
    this.data = await this.network.getLikes(this.item.id) as any [];
    console.log(this.data);
    
    this.like = this.data.totalLikes;
   }

  initialize(value: any) {
    console.log(value);
    
    

  }

  timeDilation(datetime: string) {
    const d = moment(datetime).fromNow()
    return d;
  }
  async addLike(item: any) {
    this.user = localStorage.getItem('user')
    let user = JSON.parse(this.user);

    console.log(user);
    
    // return
    let obj = {
      post_id: item.id,
      user_id: user.id
    }
    console.log('====================================');
    console.log(obj);
    console.log('====================================');
    let res = await this.network.addLike(obj)
    console.log(res);
    this.flag = true;
  }
  async removeLike(item: any){
    let user = JSON.parse(this.user);
    console.log(user);
    let obj = {
      post_id: item.id,
      user_id: user.id
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

}
