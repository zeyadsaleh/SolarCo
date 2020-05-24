import { Component, OnInit , ViewChild} from '@angular/core';
import {AngularTokenService} from "angular-token";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  constructor(public tokenAuthService:AngularTokenService) { }
 
  ngOnInit(): void {
  }

  signOut() {
    this.tokenAuthService.signOut().subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
}

}
