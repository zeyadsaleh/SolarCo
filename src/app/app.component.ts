import { Component } from '@angular/core';
import {AngularTokenService} from "angular-token";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solarco';
  
  constructor(private authToken: AngularTokenService){
    // this.authToken.init(environment.token_auth_config);
    
    this.authToken.signIn({
      login:    'user@example.com',
      password: 'monkey67'
    }).subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
  }
}
