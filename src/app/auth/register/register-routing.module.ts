import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NoLoginOrRegisterGuard } from 'src/app/shared/guards/no-login-or-register.guard';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NoLoginOrRegisterGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
