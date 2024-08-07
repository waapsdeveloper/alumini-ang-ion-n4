import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { UtilityService } from './utility.service';
import { ModalService } from './basic/modal.service';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(
    public api: ApiService,
    public router: Router,
    public utility: UtilityService,
    public modals: ModalService
  ) { }

  // Authentication Related APIs
  login(data: any) {
    return this.httpPostResponse('users/login', data, null, true, true);
  }

  editProfile(data: any, id: any) {
    return this.httpPostResponse('users/edit/' + id, data, null, false, false);
  }

  signup(data: any) {
    return this.httpPostResponse('users/register', data, null, true, true);
  }

  setUserDescAndSkills(data: any, id: any) {
    return this.httpPostResponse('users/edit/update-desc-skills', data, id, false, false);
  }

  uploadUserImage(data: any, id: any) {
    return this.httpPostResponse('users/upload-image', data, id, false, false);
  }

  setUserProfileVIew(data: any) {
    return this.httpPostResponse('users/set-profile-view', data, null, false, false);
  }

  isUserCOnnected(data: any) {
    return this.httpPostResponse('users/is-user-connected', data, null, false, false);
  }

  addPost(data: any) {
    return this.httpPostResponse('posts/post-add', data, null, false, true);
  }

  addLike(data: any) {
    return this.httpPostResponse('posts/like', data, null, false, true);
  }

  AddEducaion(data: any) {
    return this.httpPostResponse('educations/add', data, null, false, true);
  }

  editEducaion(data: any, id: any) {
    return this.httpPostResponse('educations/edit/' + id, data, null, false, true);
  }

  AddExperince(data: any) {
    return this.httpPostResponse('experiences/add', data, null, false, true);
  }

  applyJob(data: any) {
    return this.httpPostResponse('job-application/add', data, null, false, true);
  }


  editExperince(data: any, id: any) {
    return this.httpPostResponse('experiences/edit/' + id, data, null, false, true);
  }

  eventInterest(data: any) {
    return this.httpPostResponse('events/response', data, null, false, true);

  }

  removeLike(data: any) {
    return this.httpPostResponse('posts/dis-like', data, null, false, true);
  }

  sendMessage(data: any) {
    return this.httpPostResponse('messages/add', data, null, false, true);
  }

  postComment(data: any) {
    return this.httpPostResponse('posts/comment', data, null, false, true);
  }

  marAsRead(data: any) {
    return this.httpPostResponse('notifications/notification-read', data, null, false, true);
  }


  postCv(data: any, id: any) {
    return this.httpPostResponse('job-application/upload-cv/' +id, data, null, false, true);
  }

  getRoom(data: any) {
    return this.httpPostResponse('rooms/add', data, null, false, true);
  }

  getPosts(data: any) {
    return this.httpPostResponse('posts/get-posts', data, null, false, true);
  }

  deletePost(id: any) {
    return this.httpDeleteResponse('posts/delete/' + id);
  }

  getViewUser(id: any) {
    return this.httpGetResponse('users/by-id', id, false, false);
  }

  getPostUser(id: any) {
    return this.httpGetResponse('posts/get-post-user', id, false, false);
  }
  getLikes(data: any) {
    return this.httpPostResponse('posts/likes/count', data, null, false);
  }

  getComment(data: any) {
    return this.httpPostResponse('posts/comment/count', data, null, false);
  }
  getInterested(data: any) {
    return this.httpPostResponse('events/intrested/count', data, null, false);
  }
  getMessages(id: any) {
    return this.httpGetResponse('messages/list/my-messages/' + id, null, false);
  }


  getNotificationsCount(id: any) {
    return this.httpGetResponse('notifications/count/' + id, null, false);
  }

  getNotifications(data: any) {
    return this.httpPostResponse('notifications/get-notifications', data, null, false, true);
  }
  seletedElectionOption(data: any) {
    return this.httpPostResponse('elections/selected-option', data, null, false, true);
  }

  getComments(data: any) {
    return this.httpPostResponse('posts/comment/list', data, null, false);
  }

  // connections

  getAllUsers(data: any, id: any) {
    return this.httpPostResponse('users/get-all-users/' + id, data, null, false, true);
  }

  getEducation(id: any) {
    return this.httpGetResponse('educations/list/my-educations/' + id, null, false);
  }

  getExperince(id: any) {
    return this.httpGetResponse('experiences/list/my-experiences/' + id, null, false);
  }

  getCnnStats(id: any) {
    return this.httpGetResponse('users/get-cnnp-stats', id, false, true);
  }

  getNonAddedConnections(data: any, id: any) {
    return this.httpPostResponse('users/get-non-added-connections/' + id, data, null, false, true);
  }

  getAddedConnections(data: any, id: any) {
    return this.httpPostResponse('users/get-added-connections/' + id, data, null, false, true);
  }

  getEventInterst( data: any) {
    return this.httpPostResponse('events/get-response-list',  data, null, false);
  }

  sendConnectionRequest(data: any, id: any) {
    return this.httpPostResponse('users/send-connection-invite/' + id, data, null, false, true);
  }

  removeAddedConnection(data: any, id: any) {
    return this.httpPostResponse('users/remove-added-connections/' + id, data, null, false, true);
  }

  getReceivedInvitations(data: any, id: any) {
    return this.httpPostResponse('invitations/get-received-invitations/' + id, data, null, false, true);
  }

  setInvitationReject(data: any, id: any) {
    return this.httpPostResponse('invitations/set-invitation-reject/' + id, data, null, false, true);
  }

  setInvitationAccept(data: any, id: any) {
    return this.httpPostResponse('invitations/set-invitation-accept/' + id, data, null, false, true);
  }

  getJobs(data: any) {
    return this.httpPostResponse('jobs/get-jobs', data, null, false, true);
  }

  getJobsById(id: any) {
    return this.httpGetResponse('jobs/by-id', id, false, true);
  }


  getElections(data: any) {
    return this.httpPostResponse('elections/get-elections', data, null, false, true);
  }

  getElectionItem(data: any) {
    return this.httpPostResponse('elections/election-list-item', data, null, false, true);
  }



  getEvents(data: any) {
    return this.httpPostResponse('events/get-events', data, null, false, true);
  }




  serialize = (obj: any) => {
    const str: any[] = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        let f: string =
          encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]);
        str.push(f);
      }
    }
    return str.join('&');
  };

  // Function for POST method
  httpPostResponse(
    key: any,
    data: any,
    id = null,
    showloader = true,
    showError = true,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'post',
      key,
      data,
      id,
      showloader,
      showError,
      contenttype
    );
  }

  // Function for GET method
  httpGetResponse(
    key: any,
    id = null,
    showloader = true,
    showError = true,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'get',
      key,
      {},
      id,
      showloader,
      showError,
      contenttype
    );
  }

  // Function for PUT method
  httpPutResponse(key: any, data: any, id = null) {
    return new Promise<any>((resolve, reject) => {
      this.api.put(key, data).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  // Function for PATCH method
  httpPatchResponse(key: any, data: any, id = null) {
    return new Promise<any>((resolve, reject) => {
      this.api.patch(key, data).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  // Function for DELETE method
  httpDeleteResponse(key: any, showloader = true) {
    return new Promise<any>((resolve, reject) => {
      if (showloader === true) {
        this.utility.showLoader();
      }
      this.api.delete(key).subscribe((res: any) => {

        this.utility.hideLoader();
        resolve(res);
      });
    });
  }

  httpResponse(
    type = 'get',
    key: any,
    data: any,
    id = null,
    showloader = true,
    showError = true,
    contenttype = 'application/json'
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      if (showloader === true) {
        this.utility.showLoader();
      }
      const url = key + (id ? '/' + id : '');
      const seq =
        type === 'get' ? this.api.get(url, {}) : this.api.post(url, data);

      seq.subscribe({
        next: (res: any) => {

          this.utility.hideLoader();

          // if(showError){
          //   this.utility.presentSuccessToast(res.message)
          // }

          resolve(res.result);
        },
        error: (err: any) => {

          this.utility.hideLoader();

          if (showError) {
            this.utility.presentFailureToast(err.error.message);
          }


          if (err.status == 401) {
            this.modals.dismiss(false);
            localStorage.removeItem('token');
            localStorage.removeItem('user_role');
            this.router.navigate(['']);
          }
          reject(err.error);
        },
      });
    }).catch((err) => {
      if (err.status == 'Error') {
        this.utility.presentFailureToast(err.message);
        if (err.message == 'User Not Logged In!') {
          this.router.navigate(['']);
        }
      }
    });
  }
}
