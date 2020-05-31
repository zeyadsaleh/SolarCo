import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { CalculateComponent } from './calculate/calculate.component';
import { PvSystemComponent } from './pv-system/pv-system.component';


const routes: Routes = [
  {
    path: 'user-input',
    component: UserInputComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'calculate',
    component: CalculateComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'pv-system/:id',
    component: PvSystemComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PvRoutingModule { }

  