import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-create-rate',
  templateUrl: './create-rate.component.html',
  styleUrls: ['./create-rate.component.scss']
})
export class CreateRateComponent implements OnInit {

  @Input() offer_id: number;
  current_rate: number;
  request_data: object;
  show: boolean = false;
  error: string;

  constructor(private __service: OfferReviewService,
    private shareService: ShareService,
    public tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    this.request_data = new Object;
    this.currentRate();
  }

  setRate(event) {
    if (this.tokenAuth.userSignedIn() && this.tokenAuth['currentUserType'] == 'USER') {
      if (event.target.value > 0 && event.target.value <= 5) {
        this.request_data['rate'] = event.target.value;
        this.request_data['offer_id'] = this.offer_id;
        if (!this.current_rate) {
          this.__service.setRate(this.request_data).subscribe(
            (response) => {

            },
            (error) => {
              this.error = error.error.error;
            })
        } else {
          this.__service.updateRate(this.request_data['offer_id'], this.request_data).subscribe(
            (response) => {

            },
            (error) => {
              this.error = error.error.error;
            })
        }
      }
    }
  }

  Appear() {
    this.shareService.Data.subscribe((data) => {
      if (data) {
        this.show = data;
      }
    });
  }

  currentRate() {
    if (this.request_data && this.request_data['offer_id']) {
      this.__service.getRate(this.request_data['offer_id']).subscribe(
        (response) => {
          if (response) {
            this.current_rate = response['rate'];
          }
        },
        (error) => {

        })
    }
  }

}
