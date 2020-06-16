import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Compoents ##START##
import {HomeComponent} from "./main-component/home/home.component";
import { NotFoundComponent } from './main-component/errors/not-found/not-found.component';
// import { ChatComponent } from './chat/chat.component';
import {ChatComponent} from './rails-chat/chat/chat.component';
// ########### Compoents END ##########

// Routes ##START##
import { PvRoutingModule } from './pv-calculation/pv-routing.module';
import { PostRoutingModule } from './post/post-routing.module';
import { LoginRoutingModule } from './auth/login/login-routing.module';
import { RegisterRoutingModule } from './auth/register/register-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { OfferRoutingModule } from './offer/offer-routing.module';
import { TutorialRoutingModule } from './tutorial/tutorial-routing.module';
import { ContactUsComponent } from './main-component/sidebar/contact-us/contact-us.component';
import { AboutUsComponent } from './main-component/sidebar/about-us/about-us.component';

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
  // {
  //   path: 'chat',
  //   component: ChatComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'chat/:id',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inbox',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
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
    OfferRoutingModule,
    TutorialRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
