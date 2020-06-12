import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contractor-profile',
  templateUrl: './contractor-profile.component.html',
  styleUrls: ['./contractor-profile.component.css']
})
export class ContractorProfileComponent implements OnInit {

  contractor;
  isLoading: boolean = true;
  noResponse: boolean = false;
  title: string = 'Contractor';
  allOffers: number = 0;
  acceptedOffers: number = 0;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    this.route.paramMap.subscribe(params => {
      this.userService.getContractor(params.get('id')).subscribe(res => {
        console.log(res);
        this.contractor = res;
        this.setOffers(res['offers']);
        // this.allOffers = res.offers.length;
        // this.acceptedOffers = res.offers.lengthl;
        setTimeout(() => {
          this.isLoading = false;
        }, 600);
      })
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
