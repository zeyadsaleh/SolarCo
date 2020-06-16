import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-get-rates',
  templateUrl: './get-rates.component.html',
  styleUrls: ['./get-rates.component.css']
})
export class GetRatesComponent implements OnInit {

  @Input() contractor_id:number;
  rate: number = 0;
  rate_obj: object = {"1":0, "2":0, "3":0, "4":0, "5":0}
  users: number;

  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    this.__service.getRates(this.contractor_id).subscribe(
      (response) => {
        if(response){
          this.setRateDetails(response);
          console.log(response);
        }
      },
      (error) => {
        
      })
  }

  setRateDetails(rates){
    let tot_rates:number = 0;
    for (let rate of rates){
      if (rate['rate'] == 1) this.rate_obj['1'] += 1;
      if (rate['rate'] == 2) this.rate_obj['2'] += 1;
      if (rate['rate'] == 3) this.rate_obj['3'] += 1;
      if (rate['rate'] == 4) this.rate_obj['4'] += 1;
      if (rate['rate'] == 5) this.rate_obj['5'] += 1;
      tot_rates += Number(rate['rate']);
    }
    this.users = rates['length']
    this.rate = +(tot_rates/this.users).toFixed(2);
    console.log(this.rate_obj);
    console.log(this.rate);
    console.log(this.users);
  }

}
