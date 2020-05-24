import {Component, OnInit, EventEmitter,} from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  errorMessage = '';

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(private tokenAuthSerivce:AngularTokenService, private router: Router) { }

  ngOnInit() {}


  onSignUpSubmit(){

    this.tokenAuthSerivce.registerAccount({
      login:                this.signUpUser.email,
      password:             this.signUpUser.password,
      passwordConfirmation: this.signUpUser.passwordConfirmation
    }).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['home']);
      } ,   
      error => {
        console.log(error);
        this.errorMessage = error.error.errors['full_messages']                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ;
      }
    );

  }
}