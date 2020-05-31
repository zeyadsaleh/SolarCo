import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./main-component/home/home.component";
import {LoginFormComponent} from "./login-form/login-form.component"
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ContractorGuard } from './shared/guards/contractor.guard';
import { ClientGuard } from './shared/guards/client.guard';
import { PvRoutingModule } from './pv-calculation/pv-routing.module';
import { PostRoutingModule } from './post/post-routing.module';

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
    component: ProfileComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '**',
    component: HomeComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PvRoutingModule,
    PostRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
