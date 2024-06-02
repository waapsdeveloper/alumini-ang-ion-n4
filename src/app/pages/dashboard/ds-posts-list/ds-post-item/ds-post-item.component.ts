import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-ds-post-item',
  templateUrl: './ds-post-item.component.html',
  styleUrls: ['./ds-post-item.component.scss'],
})
export class DsPostItemComponent implements OnInit {

  private _item: any;

  @Input('item')
  public get item(): any {
    return this._item;
  }

  public set item(value: any) {
    this._item = value;
    this.initialize(value)

  }

  constructor(private network: NetworkService) { }

  ngOnInit() { }

  initialize(value: any) {
    // console.log(value);
  }

  timeDilation(datetime: string){
    const d = moment(datetime).fromNow()
    return d;
  }

}
