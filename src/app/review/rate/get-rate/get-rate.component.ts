import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-get-rate',
  templateUrl: './get-rate.component.html',
  styleUrls: ['./get-rate.component.css']
})
export class GetRateComponent implements OnInit {

  @Input() contractor_id:number;
  rate: number;
  rate_obj: object;
  users: number;

  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    this.__service.getRates(this.contractor_id).subscribe(
      (response) => {
        if(response){
          this.rate = response.length;
        }
      })
  }

}
