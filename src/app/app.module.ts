// Compoents ##START##
import { AppComponent } from './app.component';
// ########### Compoents END ##########

// Routes ##START##
import { AppRoutingModule } from './app-routing.module';
// ########### Routes END ##########

// Modules ##START##
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { UserModule } from './user/user.module';
import { OfferModule } from './offer/offer.module';
// ########### App Modules END ##########

@NgModule({
  declarations: [
    AppComponent,
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
      apiBase: 'https://solarco-api.herokuapp.com',
      userTypes: [
        { name: 'CONTRACTOR', path: 'contractor' },
        { name: 'USER', path: 'user' }
      ]
    }),
    PostModule,
    LoginModule,
    RegisterModule,
    UserModule,
    AbilityModule,
    ReactiveFormsModule,
    OfferModule
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
