import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AngularTokenService, UserData } from 'angular-token';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData;
  type;
  title: string = 'Profile';
  subPage: string = 'overview';
  isLoading: boolean = true;
  noResponse: boolean = false;

  @ViewChild('avatarUploader') avatarUploader: any;
  @ViewChild('avatarAlert') avatarAlert: any;

  constructor(private tokenAuthService: AngularTokenService,
    private userService: UserService,
    private router: Router) { }


  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    // Current nav active page from router
    this.subPage = this.router.url.split('/')[2] ? this.router.url.split('/')[2] : 'overview';
    // Get the data of the logged in user after validating token
    this.tokenAuthService.validateToken().subscribe(
      res => {
        this.userData = this.tokenAuthService.currentUserData;
        this.type = this.tokenAuthService.currentUserType;
        console.log(this.userData)
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      },
      error => console.log(error)
    );

  }

  uploadAvatar(ev) {

    if (ev.target.files[0].type.startsWith('image/')) {
      // Hide alert
      this.avatarAlert.nativeElement.style.display = 'none';

      let type = this.tokenAuthService.currentUserType;
      // // Send the image as form data
      let formData = new FormData();
      formData.append('avatar', ev.target.files[0]);

      // Specify the headers for form data not JSON
      var headers = new HttpHeaders();
      headers.set('Content-Type', 'multipart/form-data')

      // Send the request and store the response in the avatar variable
      this.userService.updateAvatar(this.userData.id, type, formData, headers).subscribe(
        res => {
          console.log(res)
          this.userData.avatar = res['avatar']
        },
        error => console.log(error)
      );
    } else {
      // alert('This is not a valid image');
      this.avatarAlert.nativeElement.style.display = 'block';
    }
  }

  openUploader() {
    // Open File Uploader
    this.avatarUploader.nativeElement.click();
  }

  changeSubpage(ev) {
    this.subPage = ev.target.name;
  }

  timeOut() {
    if (this.isLoading == true) {
      console.log("noresponse");
      this.noResponse = true;
      this.isLoading = false;
    }
  }

}
