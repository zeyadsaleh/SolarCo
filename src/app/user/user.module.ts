import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PvCalculationService } from '../shared/services/pv-calculation.service';
import { UserService } from '../shared/services/user.service';
import { MainComponentModule } from '../main-component/main-component.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from './user-routing.module';
import { ContractorProfileComponent } from './contractor-profile/contractor-profile.component';
import { ReviewModule } from '../review/review.module';
import { EditComponent } from './edit/edit.component';
 

@NgModule({
  declarations: [
    ProfileComponent,
    EditComponent,
    ContractorProfileComponent,
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
    ContractorProfileComponent
  ],
  providers: [
    UserService, 
    PvCalculationService,
  ],
})
export class UserModule { }
