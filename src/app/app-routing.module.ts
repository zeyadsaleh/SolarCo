import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginFormComponent} from "./login-form/login-form.component"
import { ProfileComponent } from './profile/profile.component';
import { PvCalculationComponent } from './pv-calculation/pv-calculation.component';
import { HomepageComponent } from './post/homepage/homepage.component';
import { SinglePostComponent } from './post/single-post/single-post.component';

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
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'pv-calculation',
    component: PvCalculationComponent
  },
  {
    path: 'posts',
    component: HomepageComponent
  },
  {
    path: 'posts/:id',
    component: SinglePostComponent
  },
  { 
    path: 'register', 
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) 
  },
  {
    path: 'pv-calculation',
    component: PvCalculationComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
