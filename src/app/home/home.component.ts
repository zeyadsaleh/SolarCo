import { Component, OnInit } from '@angular/core';
import {AngularTokenService} from "angular-token";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tokenAuthService:AngularTokenService) { }

  ngOnInit(): void {
  }

}
