import {Component, OnInit, EventEmitter,Input} from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  @Input() type: string = "";

  errorMessage = '';

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    type: '',
  };

  constructor(private tokenAuthSerivce:AngularTokenService, private router: Router) { }

  ngOnInit() {
  }


  onSignUpSubmit(){
    this.signUpUser.type = this.type
    this.tokenAuthSerivce.registerAccount({
      login:                this.signUpUser.email,
      password:             this.signUpUser.password,
      passwordConfirmation: this.signUpUser.passwordConfirmation,
      name :                this.signUpUser.name,
      type:                 this.signUpUser.type,
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
