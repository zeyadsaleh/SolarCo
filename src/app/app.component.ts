import { Component } from '@angular/core';
import {AngularTokenService} from "angular-token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solarco';
  
  constructor(private authToken: AngularTokenService){
    this.authToken.signIn({
      login:    'user@example.com',
      password: 'monkey67'
    }).subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
    this.authToken.registerAccount({
  login:                'example@example.org',
  password:             'secretPassword',
  passwordConfirmation: 'secretPassword'
}).subscribe(
  res =>      console.log(res),
  error =>    console.log(error)
);
  }
}
