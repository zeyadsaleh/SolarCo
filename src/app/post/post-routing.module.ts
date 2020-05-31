import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatePostFormComponent } from './create-post-form/create-post-form.component';
import { UpdatePostFormComponent } from './update-post-form/update-post-form.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ContractorGuard } from '../shared/guards/contractor.guard';

const routes: Routes = [
  {
    path: 'posts',
    component: HomepageComponent,
    canActivate: [AuthGuard, ContractorGuard]
  },
  {
    path: 'create/post',
    component: CreatePostFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update/posts/:id',
    component: UpdatePostFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts/:id',
    component: SinglePostComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PostRoutingModule { }
