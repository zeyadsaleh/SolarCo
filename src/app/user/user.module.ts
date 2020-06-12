import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PvCalculationService } from '../shared/services/pv-calculation.service';
import { UserService } from '../shared/services/user.service';
import { MainComponentModule } from '../main-component/main-component.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { ReviewModule } from '../review/review.module';
import { EditComponent } from './edit/edit.component';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [
    ProfileComponent,
    EditComponent,
    PublicProfileComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MainComponentModule,
    UserRoutingModule,
    MaterialModule,
    ReviewModule,
  ],
  exports: [
    ProfileComponent,
    EditComponent,
    PublicProfileComponent
  ],
  providers: [
    UserService,
    PvCalculationService,
  ],
})
export class UserModule { }
