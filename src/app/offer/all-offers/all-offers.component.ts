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
  p: number = 1;
  
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
    }, 16);
  }

}
