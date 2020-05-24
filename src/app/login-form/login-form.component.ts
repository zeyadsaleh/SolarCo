import {Component, OnInit, EventEmitter} from '@angular/core';
import {AngularTokenService} from "angular-token";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  errorMessage = '';

  signInUser = {
    email: '',
    password: ''
  };

  onFormResult = new EventEmitter<any>();
  constructor(private tokenAuthSerivce:AngularTokenService,  private router: Router) { }

  ngOnInit() {}

  onSignInSubmit(){

    this.tokenAuthSerivce.signIn({
      login:    this.signInUser.email,
      password: this.signInUser.password
    }).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['home']);
        } ,
      error => {
        console.log(error);
        this.errorMessage =error.error.errors[0]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ;
        } 
          
    );

  }

}
