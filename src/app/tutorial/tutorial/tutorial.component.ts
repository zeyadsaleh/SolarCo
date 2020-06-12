import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/shared/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  title: string = '';
  tutorial: any;
  isLoading: boolean = true;
  noResponse: boolean = false;
  msg: string;

  constructor(private __service: TutorialService,
    private route: ActivatedRoute,
    private router: Router,
    public tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    this.route.params.subscribe(params => {
      this.__service.getTutorial(+params['id']).subscribe(
        (response) => {
          if (response) {
            console.log(response);
            this.tutorial = response;
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          } else {
            this.router.navigate(['404']);
          }
        })
    });
  }

  addFav() {
    this.__service.setFavorite({ "tutorial_id": this.tutorial['id'] }).subscribe(
      (res) => {
        console.log(res);
        if (res && res['exist']) {
          this.msg = res['exist'];
        }else{
          this.msg = "added Successfully!";
        }
      });
  }

  timeOut() {
    if (this.isLoading == true) {
      console.log("noresponse");
      this.noResponse = true;
      this.isLoading = false;
    }
  }

}
