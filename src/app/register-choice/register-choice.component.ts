import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-choice',
  templateUrl: './register-choice.component.html',
  styleUrls: ['./register-choice.component.css']
})
export class RegisterChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleType(ev) {
    console.log(ev.target.name);
    
  }

}
