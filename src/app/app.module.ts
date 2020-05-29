// Compoents ##START##
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { UserInputComponent } from './pv-calculation/user-input/user-input.component';
import { PvSystemComponent } from './pv-calculation/pv-system/pv-system.component';
// ########### END ##########

// Modules ##START##
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularTokenService, AngularTokenModule, AngularTokenOptions } from 'angular-token';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostModule } from './post/post.module';
import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';
// ########### END ##########

// Services ##START##
import { PvCalculationService } from './shared/services/pv-calculation.service';
import { GeoLoactionService } from './shared/services/geo-loaction.service';
import { PostService } from './shared/services/post.service';
// ########### END ##########

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
// ########### END ##########

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    LoginFormComponent,
    ProfileComponent,
    UserInputComponent,
    PvSystemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000'
    }),
    BrowserAnimationsModule,
    PostModule,
    AbilityModule
  ],
  providers: [AngularTokenModule, GeoLoactionService, PvCalculationService,PostService,
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
