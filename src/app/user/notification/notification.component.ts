import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications = [];
  title: string = 'Notifications';
  isLoading: boolean = true;
  noResponse: boolean = false;
  toProfile: boolean;
  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    this.getNotifications();
  }
  getNotifications() {
    if (this.router.url.includes('profile')) {
      this.toProfile = true;
    }

    this.notificationService.getNotifications().subscribe((res) => {
      if (res) {
        for (let notiObj of res.data) {
          this.notifications.push(notiObj);
        }
      }
    });
  }

  timeOut() {
    if (this.isLoading == true) {
      this.noResponse = true;
      this.isLoading = false;
    }
  }
}
