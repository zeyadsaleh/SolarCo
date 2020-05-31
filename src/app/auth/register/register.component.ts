import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleType(ev) {
    this.type = ev.target.name
  }

}
