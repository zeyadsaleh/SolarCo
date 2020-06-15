import { Component, OnInit } from '@angular/core';
import {AngularTokenService} from "angular-token";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public tokenAuthService:AngularTokenService) { }

  ngOnInit(): void {
  }

}
