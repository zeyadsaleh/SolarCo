import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginFormComponent} from "./login-form/login-form.component"
import { RegisterFormComponent } from "./register-form/register-form.component"
import {RegisterChoiceComponent} from "./register-choice/register-choice.component"
import { ProfileComponent } from './profile/profile.component';

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
  // {
  //   path: 'register',
  //   component: RegisterFormComponent
  // },
  {
    path: 'register-choice',
    component: RegisterChoiceComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
