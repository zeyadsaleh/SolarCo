import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-get-rate',
  templateUrl: './get-rate.component.html',
  styleUrls: ['./get-rate.component.css']
})
export class GetRateComponent implements OnInit {

  @Input() offer_id:number;
  rates: number;

  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    this.__service.getRates(this.offer_id).subscribe(
      (response) => {
        if(response){
          this.rates = response.length;
        }
      })
  }

}
