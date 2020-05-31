import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferComponent } from './offer.component';


const routes: Routes = [
  {
    path: '',
    component: OfferComponent,
    children: [
      { path: 'new', component: OfferFormComponent },
      { path: 'show', component: OfferFormComponent },
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
