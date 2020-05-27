import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData;

  constructor(private tokenAuthService: AngularTokenService) { }

  ngOnInit(): void {
    this.tokenAuthService.validateToken().subscribe(
      res => {
        console.log(this.tokenAuthService.currentUserData)
        this.userData = this.tokenAuthService.currentUserData;
      },
      error => console.log(error)
    );
  }

}
