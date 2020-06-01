import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferComponent } from './offer.component';
import { AllOffersComponent } from './all-offers/all-offers.component';


const routes: Routes = [
  {
    path: 'offers/new',
    component: OfferFormComponent,

  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
