import { Component } from '@angular/core';
import { Ability } from '@casl/ability';
import { AngularTokenService } from 'angular-token';
import { ChatAuthService } from './shared/services/chat-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solarco';

  isLoading:boolean = true;
  
  constructor(private ability: Ability, private tokenService: AngularTokenService, readonly chatAuthService: ChatAuthService){ 
    if(this.tokenService.userSignedIn()) {
      this.tokenService.validateToken().subscribe(
        res => {
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
        error => console.log(error)
        ); 
    } else {
      this.isLoading = false;
    }
  }


}
