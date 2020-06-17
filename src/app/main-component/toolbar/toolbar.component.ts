import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularTokenService } from "angular-token";
import { Ability } from '@casl/ability';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isCollapsed: boolean = true;
  countNotifications: number = 0;
  @ViewChild('toggler') toggler;
  @ViewChild('content') content;

  constructor(public tokenAuthService: AngularTokenService, private ability: Ability, private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  signOut() {
    this.tokenAuthService.signOut().subscribe(
      res =>      {
        // console.log(res);
        this.ability.update([]);
      },
      error => {}
    );
  }

  closeNav() {
    // if (document.documentElement.clientWidth > 768) { return }
    // const links = document.getElementById('navbarSupportedContent');
    // const navToggler = document.getElementById('navbarToggler');
    // console.log(links)
    // console.log(navToggler)
    console.log('hello')
    if (this.content.nativeElement.classList.contains('show')) { 
        // navToggler.click();
        this.toggler.nativeElement.click();
    }
  }

  getNotifications() {
    setInterval(() => {
      if (this.tokenAuthService.currentUserData) {
        this.notificationService.getUncheckedNotifications().subscribe((res) => {
          if (res) {
            // console.log("res: ", res)
            this.countNotifications = res.count;
          } else {
            console.log("no notifications received")
          }
        });
      }
    }, 10000);
  }

  updateAll() {
    if (this.countNotifications > 0) {
      this.notificationService.updateNotifications().subscribe((res) => {
        if (res) {
          console.log("message: ", res);
          this.countNotifications = 0;
        } else {
          console.log("error on updating")
        }
      });
    }
    else {
      console.log("there's no notification to be updated");

    }
  }

}
