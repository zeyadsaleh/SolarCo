import { Component, OnInit } from '@angular/core';
import { AngularTokenService, UserData } from 'angular-token';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { Ability } from '@casl/ability';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  type: string;
  userData: object;
  title: string = 'Profile';
  error: string;

  constructor(private tokenAuthService: AngularTokenService,
    private router: Router,
    private userService: UserService,
    private ability: Ability) { }

  ngOnInit(): void {
    this.tokenAuthService.validateToken().subscribe(
      res => {
        this.type = this.tokenAuthService.currentUserType;
        this.userData = this.tokenAuthService.currentUserData;
      },
      error => this.error = error['error']);
  }

  updateUser() {
    this.userData['username'] = this.userData['name'];
    if (this.userData['uid'] != this.userData['email']) {
      this.userData['uid'] = this.userData['email'];
      this.tokenAuthService.signOut().subscribe(
        res => {
          this.ability.update([]);
          this.userService.updateUser(this.userData['id'], this.type, this.userData).subscribe(
            res => {
              this.router.navigate(['login']);
            },
            error => this.error = error['error']);
        },
        error => this.error = error);
    } else {
      this.userData['uid'] = this.userData['email'];
      this.userService.updateUser(this.userData['id'], this.type, this.userData).subscribe(
        res => {
          location.reload();
        },
        error => this.error = error['error']);
    }    
  }

}
