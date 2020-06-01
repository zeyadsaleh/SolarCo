import { Component } from '@angular/core';
import { Ability } from '@casl/ability';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solarco';

  isLoading:boolean = true;
  
  constructor(private ability: Ability, private tokenService: AngularTokenService){ 
    if(this.tokenService.userSignedIn()) {
      // this.isLoading = false;
      this.tokenService.validateToken().subscribe(
        res => {
          // console.log('validating');
          this.ability.update(res.data.rules);
          this.isLoading = false;
        },
        error => console.log(error)
        ); 
    } else {
      this.isLoading = false;
    }
  }


}
