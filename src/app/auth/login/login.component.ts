import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/shared/services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "";
  title:string = 'Login';

  constructor(private __service: ShareService) { }

  ngOnInit(): void {
  }

  handleType(ev) {
    this.type = ev.target.name
    this.__service.setData(this.type);
  }

}
