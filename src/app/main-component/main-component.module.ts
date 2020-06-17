import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { Ability, PureAbility } from '@casl/ability';
import { AbilityModule } from '@casl/angular';
import { MaterialModule } from '../shared/material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoadingComponent } from './loading/loading.component';
import { ContactUsComponent } from './sidebar/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './sidebar/about-us/about-us.component';
import { GoToTopComponent } from './go-to-top/go-to-top.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NoResponseComponent } from './errors/no-response/no-response.component';
import { ForbiddenComponent } from './errors/forbidden/forbidden.component';
import { UnautherizedComponent } from './errors/unautherized/unautherized.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    FooterComponent,
    PageBannerComponent,
    SidebarComponent,
    LoadingComponent,
    ContactUsComponent,
    AboutUsComponent,
    GoToTopComponent,
    NotFoundComponent,
    NoResponseComponent,
    ForbiddenComponent,
    UnautherizedComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AbilityModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }
  ],
  exports: [
    HomeComponent,
    ToolbarComponent,
    FooterComponent,
    PageBannerComponent,
    SidebarComponent,
    LoadingComponent,
    NotFoundComponent,
    NoResponseComponent,
    ForbiddenComponent,
    UnautherizedComponent,
    GoToTopComponent,
  ],
})
export class MainComponentModule { }
