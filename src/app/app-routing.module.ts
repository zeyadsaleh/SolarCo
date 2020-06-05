import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Compoents ##START##
import {HomeComponent} from "./main-component/home/home.component";
import { NotFoundComponent } from './main-component/not-found/not-found.component';
import { ChatComponent } from './chat/chat.component';
// ########### Compoents END ##########

// Routes ##START##
import { PvRoutingModule } from './pv-calculation/pv-routing.module';
import { PostRoutingModule } from './post/post-routing.module';
import { LoginRoutingModule } from './auth/login/login-routing.module';
import { RegisterRoutingModule } from './auth/register/register-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { OfferRoutingModule } from './offer/offer-routing.module';
// ########### Routes END ##########

// Servies ##START##
import { AuthGuard } from './shared/guards/auth.guard';
// ########### Services END ##########

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PvRoutingModule,
    PostRoutingModule,
    LoginRoutingModule,
    RegisterRoutingModule,
    UserRoutingModule,
    OfferRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
