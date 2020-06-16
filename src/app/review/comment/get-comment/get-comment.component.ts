import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-get-comment',
  templateUrl: './get-comment.component.html',
  styleUrls: ['./get-comment.component.scss']
})
export class GetCommentComponent implements OnInit {
  
  @Input() offers;
  req_data: object;

  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    this.req_data = new Object;
    this.getOfferId();
    if (this.req_data && this.req_data['offer_id']) {
      this.__service.getReview(this.req_data['offer_id']).subscribe(
        (response) => {
          if (response) {
            this.req_data = response;
          }
        },
        (error) => {
          
        })
    }
  }

  getOfferId() {
    for (let offer of this.offers) {
      if (offer['status'] == 'accepted') this.req_data['offer_id'] = offer['id'];
    }
  }

}
