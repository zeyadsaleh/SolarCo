import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AllOffersComponent } from '../offer/all-offers/all-offers.component';
import { SystemsComponent } from '../pv-calculation/systems/systems.component';
import { HomepageComponent } from '../post/homepage/homepage.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { PerviousPostsComponent } from '../post/pervious-posts/pervious-posts.component';
import { NotificationComponent } from './notification/notification.component';
import { AllTutorialsComponent } from '../tutorial/all-tutorials/all-tutorials.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'systems',
        component: SystemsComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'offers',
        component: AllOffersComponent
      },
      {
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'posts',
        component: HomepageComponent,
      },
      {
        path: 'perviousPosts',
        component: PerviousPostsComponent,
      },
      // {
      //   path: 'favorite/:id',
      //   component: AllTutorialsComponent,
      // },
    ]
  },
  {
    path: 'profile/contractors/:id',
    component: PublicProfileComponent
  },
  {
    path: 'profile/clients/:id',
    component: PublicProfileComponent
  },
  {
    path: 'notifications',
    component: NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
