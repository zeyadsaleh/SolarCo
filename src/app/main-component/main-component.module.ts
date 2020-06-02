import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { Ability, PureAbility } from '@casl/ability';
import { AbilityModule } from '@casl/angular';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    FooterComponent,
    PageBannerComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AbilityModule,
  ],
  providers:[
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }
  ],
  exports: [
    HomeComponent,
    ToolbarComponent,
    FooterComponent,
    PageBannerComponent
  ],
})
export class MainComponentModule { }
