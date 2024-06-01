import { Component, Injector } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent extends BasePage {

  profilePhoto: any;
  user: any;
  description: any;
  image: any;
  obj:
    | {
        user_id: '';
        image: '';
        description: '';
      }
    | any;
  constructor(injector: Injector) {
    super(injector);
  }

  onProfileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      this.image = reader.result as string;

      // this.profilePhoto = this.image;

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
    this.obj = {
      user_id: userId.id,
      image: this.image,
      description: this.description,
    };

    // const res = await this.network.postImage(this.obj);

    window.location.reload();
    // this.profilePhoto = res.result.image;

    // console.log(res);
  }
}
