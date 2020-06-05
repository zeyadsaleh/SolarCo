import { NgModule } from '@angular/core';
// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
// ########### END ##########


@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule
    ]
})
export class MaterialModule { }
