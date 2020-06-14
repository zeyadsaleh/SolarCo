import { Component, OnInit } from '@angular/core';
import { Ability } from '@casl/ability';
import { AngularTokenService } from 'angular-token';
import { ChatAuthService } from './shared/services/chat-auth.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SolarCo';
  showFiller: boolean = false;
  isLoading: boolean = true;
  noResponse: boolean = false;


  constructor(private ability: Ability, private tokenService: AngularTokenService, readonly chatAuthService: ChatAuthService, private userService: UserService) {
    setTimeout(() => {this.timeOut()}, 60000);
    if (this.tokenService.userSignedIn()) {
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
          setTimeout(() => {
            this.isLoading = false;
          }, 80);
        },
        error => {
          console.log(error);
          this.tokenService.signOut().subscribe(
            res => {
              console.log(res);
              this.ability.update([]);
            },
            error => console.log(error)
          );
        }
      );
    } else {
      setTimeout(() => {
        this.isLoading = false;
      }, 200);
    }
  }

  timeOut() {
    if (this.isLoading == true) {
      console.log("noresponse");
      this.noResponse = true;
      this.isLoading = false;
    }
  }

  onActivate(event) {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }
}
