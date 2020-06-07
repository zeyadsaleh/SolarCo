import { Component, OnInit } from '@angular/core';
import { Ability } from '@casl/ability';
import { AngularTokenService } from 'angular-token';
import { ChatAuthService } from './shared/services/chat-auth.service';
import { ActionCableService, Channel } from 'angular2-actioncable';
import { Subscription } from 'rxjs';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SolarCo';
  showFiller:boolean = false;
  isLoading:boolean = true;
  
  constructor(private ability: Ability, private tokenService: AngularTokenService, readonly chatAuthService: ChatAuthService, private userService: UserService){ 
    if(this.tokenService.userSignedIn()) {
      this.tokenService.validateToken().subscribe(
        res => {
          this.userService.setCurrentUser(res.data, this.tokenService.currentUserType);
          this.ability.update(res.data.rules);
          console.log(this.ability.rules);
          this.chatAuthService
          .login(res.data.username)
          .then(
            (res) => {
              console.log(res);   
            },
            err => (console.log(err))
          );
          this.isLoading = false;
        },
        error => {
          console.log(error);
          this.tokenService.signOut().subscribe(
            res =>      {
              console.log(res);
              this.ability.update([]);
            },
            error =>    console.log(error)
          );
        }
        ); 
    } else {
      this.isLoading = false;
    }
  }
}
