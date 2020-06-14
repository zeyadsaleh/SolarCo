import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/shared/services/tutorial.service';
import { AngularTokenService } from 'angular-token';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-tutorials',
  templateUrl: './all-tutorials.component.html',
  styleUrls: ['./all-tutorials.component.css']
})
export class AllTutorialsComponent implements OnInit {

  title: string = "Tutorial";
  tutorials = new Array;
  p: number = 1;
  isLoading: boolean = true;
  noResponse: boolean = false;
  category: any;
  contractor: any;
  user: any;

  constructor(private __service: TutorialService,
    public tokenAuth: AngularTokenService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    console.log(this.tokenAuth);
    if (this.router.url.includes('categories')) {
      this.route.params.subscribe(params => {
        if (Number.isInteger(+params['id'])) {
          this.tutorialsByCat(+params['id']);
        } else {
          this.router.navigate(['404']);
        }
      })
    } else if (this.router.url.includes('contractors')) {
      this.route.params.subscribe(params => {
        if (Number.isInteger(+params['id'])) {
          this.tutorialsByCon(+params['id']);
        } else {
          this.router.navigate(['404']);
        }
      })
    } else if (this.router.url.includes('users')) {
      this.route.params.subscribe(params => {
        if (Number.isInteger(+params['id'])) {
          this.tutorialsByFav(+params['id']);
        } else {
          this.router.navigate(['404']);
        }
      })
    } else {
      this.allTutorials();
    }
  }

  allTutorials() {
    this.__service.getTutorials().subscribe(
      (response) => {
        if (response) {
          console.log(response);
          this.tutorials = response;
        }
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      },
      (error) => {
        console.log(error);
      })
  }

  tutorialsByCat(id) {
    this.__service.getTutorialsByCategory(id).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          this.tutorials = response;
          if (response['length'] > 0) this.category = response[0].category;
        }
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      },
      (error) => {
        console.log(error);
      })
  }

  tutorialsByCon(id) {
    this.__service.getTutorialsByContractor(id).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          this.tutorials = response;
          if (response['length'] > 0) this.contractor = response[0].contractor;
        }
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      },
      (error) => {
        console.log(error);
      })
  }

  tutorialsByFav(id) {
    this.__service.getUserFavorites(id).subscribe(
      (response) => {
        if (response) {
          for (let res of response) {
            this.tutorials.push(res['tutorial']);
          }
          console.log(this.tutorials);
          
          if (response['length'] > 0) this.user = response[0].user;
          console.log(this.user);
          
        }
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      },
      (error) => {
        console.log(error);
      })
  }

  removeFav(id) {

  }

  timeOut() {
    if (this.isLoading == true) {
      console.log("noresponse");
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
        window.scrollTo(0, pos - 10); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

}
