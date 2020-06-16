import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NoLoginOrRegisterGuard } from 'src/app/shared/guards/no-login-or-register.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoLoginOrRegisterGuard]
  },
  {
    path: 'login/forget-password',
    component: ForgetPasswordComponent,
    canActivate: [NoLoginOrRegisterGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
