import { Component, OnInit, Input } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Router } from '@angular/router';
import { Ability } from '@casl/ability';
import { ChatAuthService } from 'src/app/shared/services/chat-auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  @Input() type: string = "";

  submitted: boolean = false;

  errorMessage = '';

  signInUser = {
    email: '',
    password: '',
    userType: ''
  };

  constructor(private tokenAuthSerivce: AngularTokenService,
    private router: Router,
    private ability: Ability,
    readonly chatAuthService: ChatAuthService,
    private userService: UserService) { }

  ngOnInit() { }

  onSignInSubmit() {

    this.submitted = true;
    this.signInUser.userType = this.type
    this.tokenAuthSerivce.signIn({
      login: this.signInUser.email,
      password: this.signInUser.password,
      userType: this.signInUser.userType
    }).subscribe(
      res => {
        console.log(res);
        this.ability.update(res.body.data.rules); // Casl Abilities
        // let username = res.body.data.name.trim().toLowerCase() + Math.round((Math.random() * 100))
        // console.log(username);
        // this.chatAuthService
        //   .login(res.body.data.username)
        //   .then(
        //     (res) => {
        //       console.log(res);   
        //     },
        //     err => (console.log(err))
        //   );
        // console.log(this.ability.rules);
        // console.log(this.ability)
        this.userService.current_user = res.body.data;
        this.userService.user_type = this.tokenAuthSerivce.currentUserType;
        this.submitted = false;
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.errors[0];
        this.submitted = false;
      }

    );

  }

}
