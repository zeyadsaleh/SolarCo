import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/interfaces/user';
import { UserService } from '../shared/services/user.service';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData;

  @ViewChild('avatarUploader') avatarUploader: any;

  constructor(private tokenAuthService: AngularTokenService, private userService: UserService) {}

  ngOnInit(): void {
    // Get the data of the logged in user after validating token
    this.tokenAuthService.validateToken().subscribe(
      res => {
        this.userData = this.tokenAuthService.currentUserData;
        console.log(this.userData)
      },
      error => console.log(error)
      );
  }

  uploadAvatar(ev) {
    // Send the image as form data
    let formData = new FormData();
    formData.append('avatar', ev.target.files[0]);

    // Specify the headers for form data not JSON
    var headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data')

    // Send the request and store the response in the avatar variable
    this.userService.updateAvatar(this.userData.id, formData, headers).subscribe(
      res => {
        this.userData.avatar = res['avatar']
      },
      error => console.log(error)
    );
  }

  openUploader() {
    // Open File Uploader
    this.avatarUploader.nativeElement.click();
  }

}
