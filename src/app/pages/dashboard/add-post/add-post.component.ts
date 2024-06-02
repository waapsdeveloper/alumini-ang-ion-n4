import { Component, Injector } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent extends BasePage {

  user: any;
  description: any;
  image: any;
  obj: any;

  constructor(injector: Injector) {
    super(injector);
  }

  onProfileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      this.image = reader.result as string;
      console.log(this.image);
    };
    reader.readAsDataURL(file);
  }

  result(event: any) {
    console.log(this.description);
  }

  async postImage() {
    this.user = localStorage.getItem('user');
    let userId = JSON.parse(this.user);

    if(!this.description){
      this.utility.presentFailureToast("Please add your thoughts to the post");
      return;
    }


    this.obj = {
      user_id: userId.id,
      description: this.description,
    };

    if(this.image){
      this.obj['image'] = this.image
    }

    const res = await this.network.addPost(this.obj);
    console.log(res);
    if(res){
      this.utility.presentSuccessToast('Post Uploaded');
      this.description = '';
      this.image = '';

      this.events.publish('post-added', res);
    }



    // window.location.reload();
    // this.profilePhoto = res.result.image;

    // console.log(res);
  }
}
