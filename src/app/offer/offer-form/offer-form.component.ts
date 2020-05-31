import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/shared/services/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent implements OnInit {

  errorMessage = '';

  offer = {
    proposal: '',
    price: 0,
    // post_id: 2
  }

  constructor(private offerService: OfferService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.offerService.createOffer(this.offer).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['post']);
      },
      error => {
        console.log(error);
        // this.errorMessage =error.error.errors[0];
      }
    );
  }
}
