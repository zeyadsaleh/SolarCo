import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications = [];
  title: string = 'Notifications';
  isLoading: boolean = true;
  toProfile: boolean;
  constructor(
    private notificationService: NotificationService,
    private router: Router,) { }

  ngOnInit(): void {
    this.getNotifications();
  }
  getNotifications(){
    if (this.router.url.includes('profile')){
      this.toProfile = true;
    }

  this.notificationService.getNotifications().subscribe((res) => {
    if (res) {
      console.log("res: ", res)
      for (let notiObj of res) {
        this.notifications.push(notiObj);
      }
      console.log("noti" ,this.notifications)
    } else {
      console.log("no notifications received")
    }
  });
  }
}
