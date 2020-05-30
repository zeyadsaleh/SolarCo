import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularTokenService, UserData } from 'angular-token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/interfaces/user';
import { UserService } from '../shared/services/user.service';
import { PvCalculationService } from '../shared/services/pv-calculation.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData;
  title:string = 'Profile';

  isLoading:boolean = true;

  @ViewChild('avatarUploader') avatarUploader: any;
  @ViewChild('avatarAlert') avatarAlert: any;

  constructor(private data: PvCalculationService, 
              private tokenAuthService: AngularTokenService,
              private router: Router,
              private userService: UserService) {}

  systems:object;

  ngOnInit(): void {
    // Get the data of the logged in user after validating token
    this.tokenAuthService.validateToken().subscribe(
      res => {
        this.userData = this.tokenAuthService.currentUserData;
        console.log(this.userData)
        this.isLoading = false;
        this.getSystems();
      },
      error => console.log(error)
      );

  }

  getSystems(){
    this.data.getSystems(response =>{
        if(response){ 
          this.systems = response;
        }
    });
  }

  uploadAvatar(ev) {

    if(ev.target.files[0].type.startsWith('image/')) {
      // Hide alert
      this.avatarAlert.nativeElement.style.display = 'none';
      // // Send the image as form data
      let formData = new FormData();
      formData.append('avatar', ev.target.files[0]);

      // Specify the headers for form data not JSON
      var headers = new HttpHeaders();
      headers.set('Content-Type', 'multipart/form-data')

      // Send the request and store the response in the avatar variable
      this.userService.updateAvatar(this.userData.id, formData, headers).subscribe(
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

  getCalc(event){
    console.log(event.target.id);
    this.router.navigate(['pv-calculation/', event.target.id]);
  }

}
