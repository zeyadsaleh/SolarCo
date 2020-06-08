import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainComponentModule } from 'src/app/main-component/main-component.module';
import { RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    MainComponentModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ]
})
export class LoginModule { }
