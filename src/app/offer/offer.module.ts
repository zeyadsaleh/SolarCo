import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { OfferRoutingModule } from './offer-routing.module';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferComponent } from './offer.component';
import { MainComponentModule } from 'src/app/main-component/main-component.module';


@NgModule({
  declarations: [OfferFormComponent, OfferComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainComponentModule,
  ],
  exports: [
    OfferComponent
  ]
})
export class OfferModule { }
