import { Component, OnInit, Input } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ShareService } from 'src/app/shared/services/share.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
 
  title: string = 'Reset Password';
  submitted: boolean = false;
  @Input() type: string = "";

  error = '';

  is_reset: boolean = true;
  userData = {
    email: '',
    password: '',
    passwordConfirmation: '',
    userType: ''
  };

  private _routeSubscription: Subscription;

  constructor(private tokenAuthSerivce: AngularTokenService,private router: Router, private _actvaedRoutes: ActivatedRoute, private __service: ShareService) { }

  ngOnInit(): void {
    this.__service.Data.subscribe((data) => {
      if (data) {
        console.log(data); 
        this.userData.userType = data;
      }else{
        console.log("err"+data);
      }
    });

    this._routeSubscription = this._actvaedRoutes.queryParamMap.subscribe((queryParamMap) => {
      console.log(queryParamMap.has('access-token'));
      if (queryParamMap.has('access-token')) {
        this.is_reset = false;    
        this.title = "Change password";
      }
    })
  }


  resetPssword() {
    this.submitted = true;
    this.tokenAuthSerivce.resetPassword({
      login: this.userData.email,
      userType: this.userData.userType
    }).subscribe(
      res => {
        this.submitted = false;
        console.log(res);
      } ,   
      error => {
        this.submitted = false;
        console.log(error);
        this.error = error.error.errors;
      } 
    );
  } 
  
  updatePassword() {
    this.submitted = true;
    this.tokenAuthSerivce.updatePassword({
      password:             this.userData.password,
      passwordConfirmation: this.userData.passwordConfirmation,
    }).subscribe(
      res => {
        this.submitted = false;
        console.log(res);
        this.router.navigate(['']);
      }, 
      error => {
        this.submitted = false;
        console.log(error);
        this.error = error.error.errors;
      } 
    );
  }

}
