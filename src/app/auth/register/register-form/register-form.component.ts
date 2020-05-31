import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Ability } from '@casl/ability';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  apiUrl: String = 'http://localhost:3000';

  @Input() type: string = "";

  errorMessage = '';
  // title: string = 'Register';

  signUpUser: User = {
    email: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    type: ''
  };

  contractor = {
    has_office: false,
    address: ''
  };

  constructor(private tokenAuthSerivce: AngularTokenService,
     private router: Router, private ability: Ability) { }

  ngOnInit() {
  }


  onSignUpSubmit() {
    this.signUpUser.type = this.type
    if (this.signUpUser.type == 'USER') { //register client
      this.tokenAuthSerivce.registerAccount({
        login: this.signUpUser.email,
        password: this.signUpUser.password,
        passwordConfirmation: this.signUpUser.passwordConfirmation,
        name: this.signUpUser.name,
        userType: this.signUpUser.type,
      }).subscribe(
        res => {
          console.log(res);
          this.ability.update(res.data.rules); // Casl Abilities
          this.router.navigate(['home']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.errors.full_messages;
        }
      );
    }
    else {  // register contractor
      this.tokenAuthSerivce.registerAccount({
        login: this.signUpUser.email,
        password: this.signUpUser.password,
        passwordConfirmation: this.signUpUser.passwordConfirmation,
        name: this.signUpUser.name,
        address: this.contractor.address,
        userType: this.signUpUser.type,
      }).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['home']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.errors.full_messages;
        }
      );
    }
  }
}
