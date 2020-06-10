import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-create-rate',
  templateUrl: './create-rate.component.html',
  styleUrls: ['./create-rate.component.scss']
})
export class CreateRateComponent implements OnInit {

  @Input() offers;
  current_rate: number;
  request_data: object;
  isLoading: boolean = true;

  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    this.request_data = new Object;
    this.getOfferId();
    if (this.request_data && this.request_data['offer_id']) {
      this.__service.getRate(this.request_data['offer_id']).subscribe(
        (response) => {
          if (response) {
            this.current_rate = response['rate'];
            console.log(response);
          }
        })
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }
  }

  getOfferId() {
    for (let offer of this.offers) {
      if (offer['status'] == 'accepted') this.request_data['offer_id'] = offer['id'];
    }
  }

  setRate(event) {
    if (event.target.value > 0 && event.target.value <= 5) {
      this.request_data['rate'] = event.target.value;
      if (!this.current_rate) {
        this.__service.setRate(this.request_data).subscribe(
          (response) => {
            if (response) {
              console.log(response);
            }
          })
      } else {
        this.__service.updateRate(this.request_data['offer_id'], this.request_data).subscribe(
          (response) => {
            if (response) {
              console.log(response);
            }
          })
      }
    }
  }

}
