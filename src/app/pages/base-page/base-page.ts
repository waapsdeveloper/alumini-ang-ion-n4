import { Injector } from "@angular/core";
import { EventsService } from "src/app/services/events.service";
import { NavService } from "src/app/services/nav.service";
// import { ModalService } from "../services/basic/modal.service";


import { NetworkService } from "src/app/services/network.service";
import { UsersService } from "src/app/services/users.service";
import { UtilityService } from "src/app/services/utility.service";
// import { UtilityService } from "../services/utility.service";
// import { ProfileService } from "../services/profile.service";

export abstract class BasePage {

  public network: NetworkService;
  public utility: UtilityService;
  public nav: NavService;
  public events: EventsService;
  public users: UsersService;
  // public profiles: ProfileService;
  // public modals: ModalService;

  constructor(injector: Injector) {
    this.users = injector.get(UsersService);
    // this.profiles = injector.get(ProfileService);
    this.network = injector.get(NetworkService);
    this.utility = injector.get(UtilityService);
    this.events = injector.get(EventsService);
    this.nav = injector.get(NavService);
    // this.modals = injector.get(ModalService);
  }



}
