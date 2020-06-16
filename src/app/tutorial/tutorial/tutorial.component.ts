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

  title: string = 'Blog Post';
  tutorial: any;
  isLoading: boolean = true;
  noResponse: boolean = false;
  added: boolean = false;
  successMsg: string;
  warningMsg: string;
  contractor_id: number;

  constructor(private __service: TutorialService,
    private route: ActivatedRoute,
    private router: Router,
    public tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    console.log(this.tokenAuth.userSignedIn());
    if (this.tokenAuth.userSignedIn() && this.tokenAuth['currentUserType'] == 'CONTRACTOR' && this.tokenAuth['userData']['id']) {
      this.contractor_id = this.tokenAuth['userData']['id'];
    }
    this.route.params.subscribe(params => {
      if (Number.isInteger(+params['id'])) {
        this.getTut(+params['id']);
      } else {
        this.router.navigate(['404']);
      }
    });
  }

  getTut(id) {
    this.__service.getTutorial(id).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          this.tutorial = response;
          setTimeout(() => {
            this.isLoading = false;
          }, 300);
          if (this.tokenAuth.userSignedIn() && this.tokenAuth['currentUserType'] == 'USER') this.checkIfAdded(this.tutorial.id);
        } else {
          this.router.navigate(['404']);
        }
      });
  }

  checkIfAdded(id) {
    this.__service.getFavorite(id).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          this.added = true;
        }
      });
  }

  addFav() {
    if (!this.added) {
      this.__service.setFavorite({ "tutorial_id": this.tutorial['id'] }).subscribe(
        (res) => {
          console.log(res);
          if (res && res['exist']) {
            this.warningMsg = res['exist'];
          } else {
            this.successMsg = "added Successfully!";
          }
        });
      this.added = true;
    }
  }

  removeFav() {
    if (this.added) {
      this.__service.deleteFavorite(this.tutorial['id']).subscribe(
        (res) => {
          this.added = false;
          this.successMsg = "Removed successfully!";
        });
    }
  }

  tutRemove() {
    if (this.tutorial.contractor_id == this.contractor_id) {
      this.__service.deleteTutorial(this.tutorial['id']).subscribe(
        (res) => {
          this.router.navigate(['blog/contractors', this.contractor_id]);
        });
    } else {
      this.successMsg = "Forbidden!";
    }
  }

  timeOut() {
    if (this.isLoading == true) {
      console.log("noresponse");
      this.noResponse = true;
      this.isLoading = false;
    }
  }

}
