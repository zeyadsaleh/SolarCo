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

  userData: object;
  title:string = 'Profile';

  constructor(private tokenAuthService: AngularTokenService,
              private router: Router,
              private userService: UserService,
              private ability: Ability) {}
  ngOnInit(): void {
    this.tokenAuthService.validateToken().subscribe(
      res => {
        this.userData = this.tokenAuthService.currentUserData;
        console.log(this.userData)
      },
      error => console.log(error)
      );
  }

  updateUser(){
    this.tokenAuthService.signOut().subscribe(
      res => {
        this.ability.update([]);
        this.userService.updateClient(this.userData['id'], this.userData).subscribe(
          res =>      {
            this.router.navigate(['login']);
      },
      error => console.log(error)
    );
      },
      error =>    console.log(error)
    );

  }

}
