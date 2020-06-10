import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {

  @Input() offers;
  req_data: object;
  edit: boolean = false;
  show: boolean = false;
  error: string;

  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    this.req_data = new Object;
    this.getOfferId();
    if (this.req_data && this.req_data['offer_id']) {
      this.__service.getReview(this.req_data['offer_id']).subscribe(
        (response) => {
          if (response) {
            if (response['review']) this.edit = true;
            this.req_data = response;
            console.log(response);
          }
        })
    }
  }

  getOfferId() {
    for (let offer of this.offers) {
      if (offer['status'] == 'accepted') this.req_data['offer_id'] = offer['id'];
    }
  }

  setComment() {
    if (this.req_data['review'].length > 5) {
      if (!this.edit) {
        this.__service.setReview(this.req_data).subscribe(
          (response) => {
            if (response) {
              console.log(response);
              this.show = false;
            }
          })
      } else {
        this.__service.updateReview(this.req_data['offer_id'], this.req_data).subscribe(
          (response) => {
            if (response) {
              console.log(response);
              this.show = false;
            }
          })
      }
    }else{
      this.error = "comment must be more than 5 characters";
    }
  }
}
