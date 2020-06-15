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
    path: 'blog',
    component: AllTutorialsComponent,
  },
  {
    path: 'tutorials/users/:id',
    component: AllTutorialsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blog/categories/:id',
    component: AllTutorialsComponent,
  },
  {
    path: 'blog/contractors/:id',
    component: AllTutorialsComponent,
  },
  {
    path: 'blog/create',
    component: CreateTutorialComponent,
    canActivate: [AuthGuard, ContractorGuard]
  },
  {
    path: 'blog/:id',
    component: TutorialComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
