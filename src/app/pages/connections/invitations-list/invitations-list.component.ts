import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-invitations-list',
  templateUrl: './invitations-list.component.html',
  styleUrls: ['./invitations-list.component.scss'],
})
export class InvitationsListComponent  implements OnInit {

  user: any;
  list: any[] = []

  constructor(private users: UsersService, private network: NetworkService, private utility: UtilityService ) { }

  ngOnInit() {
    this.user = this.users.getUser();
    this.initialize();
  }

  async initialize(){

    let obj = {
      search: '',
      offset: 0,
      limit: 10
    }
    const res = await this.network.getReceivedInvitations(obj, this.user.id )
    console.log(res);
    this.list = res;

  }

  async rejectInvitation(item: any){

    let obj = {
      invitation_id: item.id
    }

    const res = await this.network.setInvitationReject(obj, this.user.id);
    this.utility.presentFailureToast("Invitation Rejected")

    let index = this.list.findIndex(x => x.id == item.id);
    this.list.splice(index, 1)
  }

  async acceptInvitation(item: any){

    let obj = {
      invitation_id: item.id
    }

    const res = await this.network.setInvitationAccept(obj, this.user.id);
    this.utility.presentSuccessToast("Invitation Accepted")

    let index = this.list.findIndex(x => x.id == item.id);
    this.list.splice(index, 1)
  }



}
