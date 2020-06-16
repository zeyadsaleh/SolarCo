import { Component, OnInit , ViewChild} from '@angular/core';
import {AngularTokenService} from "angular-token";
import { Ability } from '@casl/ability';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isCollapsed:boolean = true;
  
  constructor(public tokenAuthService:AngularTokenService, private ability: Ability) { }
 
  ngOnInit(): void {
  }

  signOut() {
    this.tokenAuthService.signOut().subscribe(
      res =>      {
        // console.log(res);
        this.ability.update([]);
      },
      error => {}
    );
}

}
