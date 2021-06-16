import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {profileService} from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: any;
  private imageToUpload: File;
  img_path = "assets/img/profile_image.png"
  constructor(
    private profileService : profileService
  ) {}
  handleImage(files: FileList){
    this.imageToUpload = files.item(0);
  }
  ngOnInit(): void {
    this.profileService.getUserInfo().subscribe(
      (response) => this.profile = response,
      (error) => console.log(error)
    );
  }
  updateInfo(form: NgForm){
    this.profileService.updateInfo(form.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
