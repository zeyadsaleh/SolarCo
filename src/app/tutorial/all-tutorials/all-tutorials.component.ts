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
  category: any;
  contractor: any;

  constructor(private __service: TutorialService,
    public tokenAuth: AngularTokenService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.router.url.includes('categories')) {
      this.route.params.subscribe(params => {
        if (Number.isInteger(+params['id'])) {
          this.TutorialsByCat(+params['id']);
        } else {
          this.router.navigate(['404']);
        }
      })
    } else if (this.router.url.includes('contractors')) {
      this.route.params.subscribe(params => {
        if (Number.isInteger(+params['id'])) {
          this.TutorialsByCon(+params['id']);
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
        }, 500);
      },
      (error) => {
        console.log(error);
      })
  }

  TutorialsByCat(id) {
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

  TutorialsByCon(id) {
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

}
