import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/shared/services/offer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
 
@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent implements OnInit {

  errorMessage = '';

  offer = {
    proposal: '',
    price: "",
    post_id: ''
  }

  negativePattern = '[+]?([.]\d+|\d+[.]?\d*)$'

  title:string = 'New Offer';
  submitted:boolean = false;

  private _routeSubscription: Subscription;

  constructor(private offerService: OfferService,
    private router: Router, private _actvaedRoutes: ActivatedRoute, ) { }

    ngOnInit(): void {
  
      this._routeSubscription = this._actvaedRoutes.queryParamMap.subscribe((queryParamMap) => {
        console.log(queryParamMap.has('id'));
        if (queryParamMap.has('id')) {
          this.offer.post_id = queryParamMap.get('id');    
        }
      })

    
    } 
  
    ngOnDestroy(): void {
      this._routeSubscription.unsubscribe();
    }

  onSubmit() {
    this.submitted = true;
    console.log(this.offer)
    this.offerService.createOffer(this.offer).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['posts/' + this.offer.post_id]);
        this.submitted = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.error;
        this.submitted = false;
      }
    );
  }
}
