import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from 'src/app/shared/services/pv-calculation.service';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-systems-details',
  templateUrl: './systems-details.component.html',
  styleUrls: ['./systems-details.component.css']
})
export class SystemsDetailsComponent implements OnInit {

  systems_details = new Array;
  error: string;
  isLoading: boolean = true;
  noResponse: boolean = false;
  title: string = 'Pv-Systems Details';
  p: number = 1;

  constructor(private data: PvCalculationService,
    private router: Router,
    private tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    if (this.tokenAuth.userSignedIn() && this.tokenAuth['currentUserType'] == 'USER') {
      setTimeout(() => { this.timeOut() }, 40000);
      this.getDetails();
    } else {
      this.router.navigate(['login']);
    }
  }

  getDetails() {
    this.data.getCalculations(
      response => {
        if (response && response['length'] > 0) {
          this.systems_details = response;
          setTimeout(() => {
            this.isLoading = false;
          }, 400);
        }
      },
      error => {
        this.error = error.error.error;
      });
  }

  timeOut() {
    if (this.isLoading == true) {
      this.noResponse = true;
      this.isLoading = false;
    }
  }

  //scroll up whenever you change the page on pagination
  pageChanged(event) {
    this.p = event;
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 30); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 8);
  }
}
