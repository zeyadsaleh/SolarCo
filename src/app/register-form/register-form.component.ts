import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AngularTokenService} from "angular-token";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private tokenAuthSerivce:AngularTokenService) { }

  ngOnInit() {}


  onSignUpSubmit(){

    this.tokenAuthSerivce.registerAccount({
      login:                this.signUpUser.email,
      password:             this.signUpUser.password,
      passwordConfirmation: this.signUpUser.passwordConfirmation
    }).subscribe(
      res => {
        console.log(res);
        this.onFormResult.emit({ signedUp: true, res });
      } ,   
      error => {
        console.log(error);
        this.onFormResult.emit({ signedUp: false, error });
      }
    );

  }
}
