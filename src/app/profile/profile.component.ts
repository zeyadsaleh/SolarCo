import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData;

  apiUrl:String = 'http://localhost:3000';

  constructor(private tokenAuthService: AngularTokenService, private http: HttpClient) {}

  ngOnInit(): void {
    // Get the data of the logged in user after validating token
    this.tokenAuthService.validateToken().subscribe(
      res => {
        this.userData = this.tokenAuthService.currentUserData;

        // Get all the data of the client with its avatar
        this.http.get(`${this.apiUrl}/clients/${this.userData.id}`).subscribe(
          res => {
            if(res['avatar_url'])
              this.userData.avatar = this.apiUrl + res['avatar_url']
          },
          error => console.log(error)
        );

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
    this.http.put(`${this.apiUrl}/clients/avatar/${this.userData.id}`, formData, {headers: headers}).subscribe(
      res => {
        if(res['avatar_url'])
          this.userData.avatar = this.apiUrl + res['avatar_url']
      },
      error => console.log(error)
    )
  }

}
