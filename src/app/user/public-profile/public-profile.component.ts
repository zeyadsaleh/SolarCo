import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

  user;
  isLoading: boolean = true;
  noResponse: boolean = false;
  title: string = this.router.url.includes('client') ? 'Client' : 'Contractor';
  allOffers: number = 0;
  acceptedOffers: number = 0;
  isContractor: boolean;
  closedPostsCount: number = 0;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    this.route.paramMap.subscribe(params => {
      if(this.router.url.includes('clients')) {

        this.userService.getClient(params.get('id')).subscribe(res => {
          console.log(res);
          this.user = res;
          this.isContractor = false;
          this.user.posts.forEach(post => {
            if(post.closed)
              this.closedPostsCount += 1;
          });
          // this.setOffers(res['offers']);
          setTimeout(() => {
            this.isLoading = false;
          }, 600);
        })

      } else if (this.router.url.includes('contractors')) {

        this.userService.getContractor(params.get('id')).subscribe(res => {
          console.log(res);
          this.user = res;
          this.isContractor = true;
          this.setOffers(res['offers']);
          // this.allOffers = res.offers.length;
          // this.acceptedOffers = res.offers.lengthl;
          setTimeout(() => {
            this.isLoading = false;
          }, 600);
        })

      }
    })
  }

  setOffers(offers) {
    for (let offer of offers) {
      if (offer['status'] == 'accepted') this.acceptedOffers++;
      this.allOffers++;
    }
    console.log(this.acceptedOffers);
    console.log(this.allOffers);
  }

  timeOut() {
    if (this.isLoading == true) {
      console.log("noresponse");
      this.noResponse = true;
      this.isLoading = false;
    }
  }
}
