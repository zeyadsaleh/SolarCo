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

@NgModule({
  declarations: [
    UserInputComponent,
    PvSystemComponent,
    CalculateComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    UserInputComponent,
    PvSystemComponent,
    CalculateComponent,
  ],
  providers: [
    GeoLoactionService, 
    PvCalculationService,
  ],
})
export class PvCalculationModule { }
