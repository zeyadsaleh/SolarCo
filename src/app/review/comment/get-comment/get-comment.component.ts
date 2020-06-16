import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-get-comment',
  templateUrl: './get-comment.component.html',
  styleUrls: ['./get-comment.component.scss']
})
export class GetCommentComponent implements OnInit {
  
  @Input() offer_id;
  req_data: object;
  error: string;

  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    this.req_data = new Object;
    this.req_data['offer_id'] = this.offer_id;
    if (this.req_data && this.req_data['offer_id']) {
      this.__service.getReview(this.req_data['offer_id']).subscribe(
        (response) => {
          if (response) {
            this.req_data = response;
          }
        },
        (error) => {
          this.error = error.error.error;
        })
    }
  }

}
