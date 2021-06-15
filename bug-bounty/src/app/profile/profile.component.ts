import { Component, OnInit } from '@angular/core';
import {profileService} from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private imageToUpload: File;
  img_path = "assets/img/profile_image.png"
  constructor(
    private profileService : profileService
  ) {}
  handleImage(files: FileList){
    this.imageToUpload = files.item(0);
  }

}
