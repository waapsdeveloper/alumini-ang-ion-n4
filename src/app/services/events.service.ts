import { Injectable } from "@angular/core";
import { NgxPubSubService } from "@pscoped/ngx-pub-sub";
import Pusher from 'pusher-js';

@Injectable({
  providedIn: "root",
})
export class EventsService {
  latestEvent = "randomLast";
  historicalEvent = "randomHistory";

  subscriptions: any[] = [];

  private pusher: Pusher;
  chatChannel: any;
  notificationChannel: any;

  constructor(public pubsubSvc: NgxPubSubService) {
    pubsubSvc.registerEventWithHistory(this.historicalEvent, 6);
    pubsubSvc.registerEventWithLastValue(this.latestEvent, undefined);

    const options = {
      cluster: 'ap2',
      forceTLS: true
    };

    this.pusher = new Pusher('ac433fc5d9ffde9feb10', options);
    this.chatChannel = this.pusher.subscribe("chats-channel");
    this.notificationChannel = this.pusher.subscribe('notification-channel')
  }

  registerPusherEvent(id: any){
    this.chatChannel.bind("message-rec-" + id, this.chatChannelReceived.bind(this))
  }



  chatChannelReceived($event: any){
    console.log($event);
    this.publish('message-received-via-pusher', $event);
  }

  publish(key: string, data = {}) {
    this.pubsubSvc.publishEvent(key, data);
  }

  async subscribe(key: string, handler: any, unsubPrior = true) {

    if(unsubPrior){
      const item = this.subscriptions.find((x) => x.key === key);
      if (item) {
        this.unsubscribe(key);
      }
    }


    const subs = this.pubsubSvc.subscribe(key, (data) => handler(data));
    this.subscriptions.push({ key, subs });

    //this.subscribe[key] = subs;
  }

  unsubscribe(key: string) {
    const item = this.subscriptions.find((x) => x.key === key);
    if (item) {
      const subs = item["subs"];
      subs.unsubscribe();

      const index = this.subscriptions.findIndex((x) => x.key === key);
      if (index > -1) {
        this.subscriptions.splice(index, 1);
      }
    }
  }
}
