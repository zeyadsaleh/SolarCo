import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/user';
import { Contractor } from 'src/app/shared/interfaces/contractor';
import { UserService } from 'src/app/shared/services/user.service';
import { Ability } from '@casl/ability';
import { GlobalService } from 'src/app/shared/services/global.service';
import { ChatAuthService } from 'src/app/shared/services/chat-auth.service';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  apiUrl: String = this.api.host;

  @Input() type: string = "";

  errorMessage = '';
  submitted:boolean = false;

  signUpUser: User = {
    email: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    type: ''
  };

  contractor: Contractor = {
    has_office: false,
    address: '',
    mobileNumber: '',
    website: '',
    fax: ''
  };

  constructor(private tokenAuthSerivce: AngularTokenService,
              private router: Router, private ability: Ability, private api: GlobalService,
              readonly chatAuthService:ChatAuthService) { }

  ngOnInit() {
  }


  onSignUpSubmit() {
    this.submitted = true;
    this.signUpUser.type = this.type
    let username = this.signUpUser.name.trim().toLowerCase() + Math.round((Math.random() * 100));
    if (this.signUpUser.type == 'USER') { //register client
      this.tokenAuthSerivce.registerAccount({
        login: this.signUpUser.email,
        password: this.signUpUser.password,
        passwordConfirmation: this.signUpUser.passwordConfirmation,
        name: this.signUpUser.name,
        username: username,
        userType: this.signUpUser.type,
      }).subscribe(
        res => {
          console.log(res);
          this.ability.update(res.data.rules); // Casl Abilities

          this.chatAuthService
          .signUp(res.data.username, res.data.name)
          .then(
            (response) => {
              this.chatAuthService.login(res.data.username)
              .then(
                (res) => {
                  console.log(res);   
                },
                err => (console.log(err))
              );   
            },
            err => (console.log(err))
          ); 
          this.submitted = false;
          this.router.navigate(['home']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.errors.full_messages;
          this.submitted = false;
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
        mobileNumber: this.contractor.mobileNumber,
        website: this.contractor.website,
        fax: this.contractor.fax
      }).subscribe(
        res => {
          console.log(res);
          this.ability.update(res.data.rules); // Casl Abilities
          this.submitted = false;
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
