import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      { path: ':type', component: RegisterFormComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
