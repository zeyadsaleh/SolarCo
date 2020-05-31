import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { OfferRoutingModule } from './offer-routing.module';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferComponent } from './offer.component';


@NgModule({
  declarations: [OfferFormComponent, OfferComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    FormsModule
  ]
})
export class OfferModule { }
