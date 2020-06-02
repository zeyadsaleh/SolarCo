import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferComponent } from './offer.component';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ContractorGuard } from '../shared/guards/contractor.guard';


const routes: Routes = [
  {
    path: 'offers/new',
    component: OfferFormComponent,
    canActivate: [AuthGuard, ContractorGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
