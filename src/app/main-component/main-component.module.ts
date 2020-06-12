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
import { MaterialModule } from '../shared/material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoadingComponent } from './loading/loading.component';
import { ContactUsComponent } from './sidebar/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    FooterComponent,
    PageBannerComponent,
    NotFoundComponent,
    SidebarComponent,
    LoadingComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AbilityModule,
    MaterialModule,
    FormsModule
  ],
  providers:[
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }
  ],
  exports: [
    HomeComponent,
    ToolbarComponent,
    FooterComponent,
    PageBannerComponent,
    NotFoundComponent,
    SidebarComponent,
    LoadingComponent,
    FormsModule
  ],
})
export class MainComponentModule { }
