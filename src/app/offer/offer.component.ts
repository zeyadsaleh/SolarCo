import { Component, OnInit, Input } from '@angular/core';
import { OfferService } from 'src/app/shared/services/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offer = {
    proposal: '',
    price: 0,
  }
  
  offers=[];
  editOffer: number = 0;
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
      this.offers = new Array();
      // this.getOffers();
      this.has_offers = false;
    }
  }

  edit(id){
    if (this.editOffer != id){
      this.editOffer = id;
    }else{
      this.editOffer = 0;
    }
  }

  onEdit(offer) {
    this.offerService.updateOffer(offer.id, offer).subscribe(
      res => {
        console.log(res);
        this.offers = new Array();
        this.getOffers();
        this.editOffer = 0;
      },
      error => {
        console.log(error);
      }
    );
  }
}
