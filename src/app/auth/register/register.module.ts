import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { MainComponentModule } from 'src/app/main-component/main-component.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
 
@NgModule({
  declarations: [RegisterComponent,RegisterFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainComponentModule,
    MaterialModule,
  ]
})
export class RegisterModule { }
