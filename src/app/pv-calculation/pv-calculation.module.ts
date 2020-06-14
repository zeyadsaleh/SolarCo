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
import { MainComponentModule } from '../main-component/main-component.module';
import { SystemsComponent } from './systems/systems.component';
import { SystemsDetailsComponent } from './systems-details/systems-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MapComponent } from './user-input/map/map.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    UserInputComponent,
    PvSystemComponent,
    CalculateComponent,
    SystemsComponent,
    SystemsDetailsComponent,
    MapComponent,
    // MapComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MainComponentModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYkIQ3_SW4MbpuZ2ICQ7EHss1sleW1OS8',
      libraries: ['places']
    }),
    // GoogleMapsModule
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
