import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { NetworkService } from 'src/app/services/network.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-profile-image',
  templateUrl: './edit-profile-image.component.html',
  styleUrls: ['./edit-profile-image.component.scss'],
})
export class EditProfileImageComponent  implements OnInit {

  user: any;
  designatedImage = '/assets/img/p13.png';
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private users: UsersService, private network: NetworkService, private events: EventsService) { }

  ngOnInit() {
    this.user = this.users.getUser();
    console.log(this.user)
    if(this.user && this.user.image){
      this.designatedImage = this.user.image;
    }
  }



  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.readFileAsBase64(file);
    }
  }

  readFileAsBase64(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      console.log('Base64 String:', base64String);
      this.uploadImage(base64String, this.user.id)
      // You can now use the base64String as needed
    };
    reader.readAsDataURL(file);
  }

  async uploadImage(image: string, id: any){
    let d = {
      image: image
    }
    const res = await this.network.uploadUserImage(d, id);
    console.log(res);
    if(res && res.image){
      this.users.setUser(res);
      this.designatedImage = res.image;
      this.events.publish('user-image-updated', {
        image: res.image
      })
    }

  }





}
