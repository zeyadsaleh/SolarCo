import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AllOffersComponent } from '../offer/all-offers/all-offers.component';
import { SystemsComponent } from '../pv-calculation/all-systems/systems.component';
import { HomepageComponent } from '../post/homepage/homepage.component';
import { ContractorProfileComponent } from './contractor-profile/contractor-profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'systems',
        component: SystemsComponent
      },
      {
        path: 'offers',
        component: AllOffersComponent
      },
      {
        path: 'edit',
        component: EditComponent,   
      },
      {
        path: 'posts',
        component: HomepageComponent,   
      },
    ]
  },
  {
    path: 'profile/contractors/:id',
    component: ContractorProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
