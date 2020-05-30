import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type: string = "";
  // title: string = 'Register';

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  handleType(ev) {
    this.type = ev.target.name
  }

}
