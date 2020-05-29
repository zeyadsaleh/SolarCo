import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginFormComponent} from "./login-form/login-form.component"
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './post/homepage/homepage.component';
import { SinglePostComponent } from './post/single-post/single-post.component';
import { UserInputComponent } from './pv-calculation/user-input/user-input.component';
import { PvSystemComponent } from './pv-calculation/pv-system/pv-system.component';
import { AuthGuard } from './shared/guards/auth.guard';

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
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
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
    path: 'system-info',
    component: UserInputComponent
  },
  {
    path: 'pv-calculation/:id',
    component: PvSystemComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
