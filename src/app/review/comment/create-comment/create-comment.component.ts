import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/shared/services/tutorial.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {

  @Input() offers;
  @Input() tutorial_id: number;
  req_data: object;
  edit: boolean = false;
  show: boolean = false;
  comment_id: number;
  error: string;

  constructor(private __service: OfferReviewService,
    private router: Router,
    private __tutService: TutorialService,
    private shareService: ShareService,
    public tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    this.req_data = new Object;
    if (this.router.url.includes('tutorials')) {
      this.req_data['tutorial_id'] = this.tutorial_id;
    } else {
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
  }

  getOfferId() {
    for (let offer of this.offers) {
      if (offer['status'] == 'accepted') this.req_data['offer_id'] = offer['id'];
    }
  }

  setComment() {
    if (this.req_data['review'].length > 5) {
      if (this.router.url.includes('tutorials')) {
        this.__tutService.setComment(this.req_data).subscribe(
          (response) => {
            if (response) {
              console.log(response);
              this.shareService.setData(response);
              this.req_data['review'] = '';
            }
          })
      } else {
        if (!this.edit) {
          this.__service.setReview(this.req_data).subscribe(
            (response) => {
              if (response) {
                console.log(response);
                setTimeout(() => {
                  this.show = false;
                }, 200);
              }
            })
        } else {
          this.__service.updateReview(this.req_data['offer_id'], this.req_data).subscribe(
            (response) => {
              if (response) {
                console.log(response);
                setTimeout(() => {
                  this.show = false;
                }, 300);
              }
            })
        }
      }
    } else {
      this.error = "comment must be more than 5 characters";
    }
  }

}
