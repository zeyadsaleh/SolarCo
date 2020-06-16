import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  userData;

  constructor(readonly userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService.current_user)
    this.userData = this.userService.current_user;
  }

}
