import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { PageBannerComponent } from '../../main-component/page-banner/page-banner.component';
import { MainComponentModule } from 'src/app/main-component/main-component.module';

@NgModule({
  declarations: [RegisterComponent,RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
  ]
})
export class RegisterModule { }
