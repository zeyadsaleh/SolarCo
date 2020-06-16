import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Ability } from '@casl/ability';
import { AngularTokenService } from 'angular-token';
import { ChatAuthService } from './shared/services/chat-auth.service';
import { UserService } from './shared/services/user.service';
import { DOCUMENT } from '@angular/common';
import { GlobalService } from './shared/services/global.service';

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
  showTop: boolean = false;

  @HostListener("window:scroll", []) onWindowScroll() {
    if (this.document.documentElement.scrollTop >= 106) { // Navigation bar has disappeared
      this.showTop = true;
    } else {
      this.showTop = false;
    }
  }


  constructor(private ability: Ability,
    private tokenService: AngularTokenService,
    readonly chatAuthService: ChatAuthService,
    private userService: UserService,
    readonly globalService: GlobalService,
    @Inject(DOCUMENT) private document: Document) {

    setTimeout(() => {
      this.timeOut()
    }, 60000);
    if (this.tokenService.userSignedIn()) {
      this.tokenService.validateToken().subscribe(
        res => {
          this.userService.setCurrentUser(res.data, this.tokenService.currentUserType);
          this.ability.update(res.data.rules);
          // this.chatAuthService
          //   .login(res.data.username)
          //   .then(
          //     (res) => {
          //       console.log(res);
          //     },
          //     err => (console.log(err))
          //   );
          setTimeout(() => {
            this.isLoading = false;
          }, 100);
        },
        error => {
          this.tokenService.signOut().subscribe(
            res => {
              this.ability.update([]);
            },
            error => {}
          );
        }
      );
    } else {
      setTimeout(() => {
        this.isLoading = false;
      }, 200);
    }
  }

  goToTop() {
    this.document.documentElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

  timeOut() {
    if (this.isLoading == true) {
      this.noResponse = true;
      this.isLoading = false;
    }
  }

  onActivate(event) {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 15); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 8);
    }
}
