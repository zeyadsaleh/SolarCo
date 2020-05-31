import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./main-component/home/home.component";
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ContractorGuard } from './shared/guards/contractor.guard';
import { ClientGuard } from './shared/guards/client.guard';
import { PvRoutingModule } from './pv-calculation/pv-routing.module';
import { PostRoutingModule } from './post/post-routing.module';
import { LoginRoutingModule } from './auth/login/login-routing.module';
import { RegisterRoutingModule } from './auth/register/register-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'offers',
    loadChildren: () => import('./offer/offer.module').then(m => m.OfferModule)
  },
  {
    path: '**',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PvRoutingModule,
    PostRoutingModule,
    LoginRoutingModule,
    RegisterRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
