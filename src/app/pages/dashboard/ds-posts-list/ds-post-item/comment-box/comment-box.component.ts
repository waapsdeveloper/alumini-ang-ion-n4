import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss'],
})
export class CommentBoxComponent extends BasePage implements OnInit {
  private _item: any;
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


  constructor(injector: Injector) {
    super(injector);

  }

  ngOnInit() {


  }
  async callApi(){
    // let user = JSON.parse(this.user);
    console.log(this.item);
    let obj = {
      post_id: this.item.id,
    }

    let res = await this.network.getComments(obj);
    console.log(res);
    
  }
  async sendComment(){
    this.user = localStorage.getItem('user');
    let userId = JSON.parse(this.user);

    if(!this.comment){
      this.utility.presentFailureToast("Please add your thoughts to the post");
      return;
    }


    let obj = {
      user_id: userId.id,
      post_id: this.item.id,
      comment: this.comment,
    };

    let res = await this.network.postComment(obj);
    console.log('====================================');
    console.log(res);
    console.log('====================================');

  }
}
