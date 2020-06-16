import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-get-rate',
  templateUrl: './get-rate.component.html',
  styleUrls: ['./get-rate.component.scss']
})
export class GetRateComponent implements OnInit {

  @Input() offer_id;
  current_rate: number;
  request_data: object;
  error: string;

  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    this.request_data = new Object;
    this.request_data['offer_id'] = this.offer_id;
    if (this.request_data && this.request_data['offer_id']) {
      this.__service.getRate(this.request_data['offer_id']).subscribe(
        (response) => {
          if (response) {
            this.current_rate = response['rate'];
          }
        },
        (error) => {
          this.error = error.error.error;
        })
    }
  }

}
