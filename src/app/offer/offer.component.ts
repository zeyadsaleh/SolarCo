import { Component, OnInit, Input } from '@angular/core';
import { OfferService } from 'src/app/shared/services/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offers=[];
  has_offers: boolean = false;
  @Input() post_id:string = '';

  
  constructor(private offerService: OfferService,private router: Router) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.offerService.getOffers(this.post_id).subscribe((res)=>{
      for (let o of res){
        this.offers.push(o);
      }
      if (this.offers.length > 0) {
        this.has_offers = true;
      }
      console.log(this.offers);
    });
  }

  deleteOffer(id) {
    this.offerService.deleteOffer(id).subscribe();
    this.offers = this.offers.filter(function( obj ) {
      return obj.id !== id;
    });
    if (this.offers.length < 0) {
      this.has_offers = false;
    }
  }
}
