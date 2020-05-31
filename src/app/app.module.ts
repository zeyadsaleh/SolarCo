// Compoents ##START##
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
// ########### Compoents END ##########

// Routes ##START##
import { AppRoutingModule } from './app-routing.module';
// ########### Routes END ##########

// Modules ##START##
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
// ########### END ##########

@NgModule({
  declarations: [
    AppComponent,
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
      apiBase: 'http://localhost:3000',
      userTypes: [
        { name: 'CONTRACTOR', path: 'contractor' },
        { name: 'USER', path: 'user' }
      ]
    }),
    PostModule,
    AbilityModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
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
