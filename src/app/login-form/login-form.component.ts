import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularTokenService} from "angular-token";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();
  constructor(private tokenAuthSerivce:AngularTokenService) { }

  ngOnInit() {}

  onSignInSubmit(){

    this.tokenAuthSerivce.signIn({
      login:    this.signInUser.email,
      password: this.signInUser.password
    }).subscribe(
      res => {
        console.log(res);
        this.onFormResult.emit({ signedIn: true, res });
        } ,
      error => {
        console.log(error);
        this.onFormResult.emit({signedIn: false, error});
        } 
          
    );

  }

}
