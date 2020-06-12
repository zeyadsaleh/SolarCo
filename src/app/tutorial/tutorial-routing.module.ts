import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllTutorialsComponent } from './all-tutorials/all-tutorials.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { CreateTutorialComponent } from './create-tutorial/create-tutorial.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ContractorGuard } from '../shared/guards/contractor.guard';

const routes: Routes = [
  {
    path: 'tutorials',
    component: AllTutorialsComponent,
  },
  {
    path: 'tutorials/users/:id',
    component: AllTutorialsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tutorials/categories/:id',
    component: AllTutorialsComponent,
  },
  {
    path: 'tutorials/contractors/:id',
    component: AllTutorialsComponent,
  },
  {
    path: 'tutorials/create',
    component: CreateTutorialComponent,
    canActivate: [AuthGuard, ContractorGuard]
  },
  {
    path: 'tutorials/:id',
    component: TutorialComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
