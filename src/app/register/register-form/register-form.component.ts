import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  apiUrl: String = 'http://localhost:3000';

  @Input() type: string = "";

  errorMessage = '';

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

  constructor(private tokenAuthSerivce: AngularTokenService, private router: Router, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
  }


  onSignUpSubmit() {
    this.signUpUser.type = this.type
    this.tokenAuthSerivce.registerAccount({
      login: this.signUpUser.email,
      password: this.signUpUser.password,
      passwordConfirmation: this.signUpUser.passwordConfirmation,
      name: this.signUpUser.name,
      type: this.signUpUser.type,
    }).subscribe(
      res => {
        console.log(res);
        if (this.contractor.has_office) {
          this.userService.updateContractor(res.data.id, this.contractor).subscribe(
            res => {
              console.log(res);
            },
            error => console.log(error)
          );
        }
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.errors.full_messages;
      }
    );

  }
}
