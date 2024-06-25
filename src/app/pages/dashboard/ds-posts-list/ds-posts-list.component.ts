import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-ds-posts-list',
  templateUrl: './ds-posts-list.component.html',
  styleUrls: ['./ds-posts-list.component.scss'],
})
export class DsPostsListComponent  implements OnInit {

  list: any[] = [];
  offset = 0;
  limit = 10;

  constructor(public network: NetworkService, private events: EventsService) { }

  ngOnInit() {
    this.events.subscribe('post-added', this.initialize.bind(this));
    this.initialize();
  }

  async initialize(){
    const res = await this.getPosts('',0, 10)
    this.list = res as any[];

  }

  getPosts(search = '', offset = 0, limit = 10){

    return new Promise( async resolve => {
      let obj = {
        search,
        offset,
        limit
      }

      const res = await this.network.getPosts(obj);
      resolve(res);

    })


  }

  async loadMore(){

    let obj = {
      search: '',
      offset: this.list.length,
      limit: 20
    }
    const res = await this.network.getPosts(obj)
    console.log(res);
    this.list = [...this.list, ...res];
  }

  deletePost(item: any){

    const index = this.list.findIndex( x => x.id == item.id);
    this.list.splice(index, 1);

  }


}
