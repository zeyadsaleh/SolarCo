import { Component } from '@angular/core';
import { AngularTokenService } from "angular-token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solarco';
  
  constructor(private tokenAuthSerivce:AngularTokenService){
    // this.tokenAuthSerivce.registerAccount({
    //   login:                'example@examplef.org',
    //   password:             'secretPassword',
    //   passwordConfirmation: 'secretPassword',
    //   name:                 'dd'         
    // }).subscribe(
    //   res =>      console.log(res),
    //   error =>    console.log(error)
    // );
   
  }

}
