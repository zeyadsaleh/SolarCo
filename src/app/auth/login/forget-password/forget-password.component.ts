import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  error = '';

  is_reset: boolean = true;
  userData = {
    email: '',
    password: '',
    passwordConfirmation: '',
    userType: ''
  };

  private _routeSubscription: Subscription;

  constructor(private tokenAuthSerivce: AngularTokenService,private router: Router, private _actvaedRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    this._routeSubscription = this._actvaedRoutes.queryParamMap.subscribe((queryParamMap) => {
      console.log(queryParamMap.has('access-token'));
      if (queryParamMap.has('access-token')) {
        this.is_reset = false;    
      }
    })
  }


  resetPssword() {
    this.tokenAuthSerivce.resetPassword({
      login: this.userData.email,
      userType: 'USER'
    }).subscribe(
      res =>      console.log(res),
      error => {
        console.log(error);
        this.error = error.error.errors;
      } 
    );
  } 
  
  updatePassword() {
    this.tokenAuthSerivce.updatePassword({
      password:             this.userData.password,
      passwordConfirmation: this.userData.passwordConfirmation,
    }).subscribe(
      res =>      console.log(res),
      error =>     {
        console.log(error);
        this.error = error.error.errors;
      } 
    );
  }

}
