import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { OfferRoutingModule } from './offer-routing.module';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferComponent } from './offer.component';
import { MainComponentModule } from 'src/app/main-component/main-component.module';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { AbilityModule } from '@casl/angular';


@NgModule({
  declarations: [OfferFormComponent, OfferComponent, AllOffersComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainComponentModule,
    RouterModule,
    AbilityModule
  ],
  exports: [
    OfferComponent,
    AllOffersComponent
  ]
})
export class OfferModule { }
