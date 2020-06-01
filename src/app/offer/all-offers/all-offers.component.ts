import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/shared/services/offer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit {

  constructor(private offerService: OfferService,private router: Router) { }

  offers=[];
  has_offers: boolean = false;
  
  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.offerService.getAllOffers().subscribe((res)=>{
      for (let o of res){
        this.offers.push(o);
      }
      if (this.offers.length > 0) {
        this.has_offers = true;
      }
      console.log(this.offers);
    });
  }

}
