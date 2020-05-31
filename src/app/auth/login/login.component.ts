import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "";
  title:string = 'Login';

  constructor() { }

  ngOnInit(): void {
  }

  handleType(ev) {
    this.type = ev.target.name
  }

}
