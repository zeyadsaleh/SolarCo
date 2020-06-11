import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllTutorialsComponent } from './all-tutorials/all-tutorials.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { CreateTutorialComponent } from './create-tutorial/create-tutorial.component';

const routes: Routes = [
  {
    path: 'tutorials',
    component: AllTutorialsComponent,
  },
  {
    path: 'tutorials/create',
    component: CreateTutorialComponent,
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
