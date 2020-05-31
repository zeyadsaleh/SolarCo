// Compoents ##START##
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
// ########### Compoents END ##########

// Routes ##START##
import { AppRoutingModule } from './app-routing.module';
// ########### Routes END ##########

// Modules ##START##
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AbilityModule } from '@casl/angular';
// ########### Modules END ##########

// Services ##START##
import { AngularTokenService, AngularTokenModule, AngularTokenOptions } from 'angular-token';
import { Ability, PureAbility } from '@casl/ability';
import { ShareService } from './shared/services/share.service';
// ########### Services END ##########

// App Modules ##START##
import { MaterialModule } from './shared/material/material.module';
import { PostModule } from './post/post.module';
import { MainComponentModule } from './main-component/main-component.module';
import { PvCalculationModule } from './pv-calculation/pv-calculation.module';
// ########### App Modules END ##########


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    MainComponentModule,
    PvCalculationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000'
    }),
    PostModule,
    AbilityModule
  ],
  providers: [
    AngularTokenModule, 
    ShareService,
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
