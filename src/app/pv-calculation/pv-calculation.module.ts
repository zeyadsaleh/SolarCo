import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInputComponent } from './user-input/user-input.component';
import { PvSystemComponent } from './pv-system/pv-system.component';
import { CalculateComponent } from './calculate/calculate.component';
import { MaterialModule } from '../shared/material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PvCalculationService } from '../shared/services/pv-calculation.service';
import { GeoLoactionService } from '../shared/services/geo-loaction.service';
import { PageBannerComponent } from '../main-component/page-banner/page-banner.component';
import { MainComponentModule } from '../main-component/main-component.module';
import { SystemsComponent } from './systems/systems.component';
import { SystemsDetailsComponent } from './systems-details/systems-details.component';

@NgModule({
  declarations: [
    UserInputComponent,
    PvSystemComponent,
    CalculateComponent,
    SystemsComponent,
    SystemsDetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MainComponentModule
  ],
  exports: [
    UserInputComponent,
    PvSystemComponent,
    CalculateComponent,
    SystemsComponent,
  ],
  providers: [
    GeoLoactionService, 
    PvCalculationService,
  ],
})
export class PvCalculationModule { }
