import {Component, OnInit, Input} from '@angular/core';
import {AngularTokenService} from "angular-token";
import { Router } from '@angular/router';
import { Ability } from '@casl/ability';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  @Input() type: string = "";

  submitted:boolean = false;

  errorMessage = '';

  signInUser = {
    email: '',
    password: '',
    userType: ''
  };

  constructor(private tokenAuthSerivce:AngularTokenService,  private router: Router, private ability: Ability) { }

  ngOnInit() {}

  onSignInSubmit(){

    this.submitted = true;
    this.signInUser.userType = this.type
    this.tokenAuthSerivce.signIn({
      login:    this.signInUser.email,
      password: this.signInUser.password,
      userType: this.signInUser.userType
    }).subscribe(
      res => {
        console.log(res);
        this.ability.update(res.body.data.rules); // Casl Abilities
        this.submitted = false;
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.errors[0];
        this.submitted = false;
      } 
          
    );

  }

}
