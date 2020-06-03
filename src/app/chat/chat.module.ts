import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MessagesViewComponent } from './messages-view/messages-view.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { FormsModule } from '@angular/forms';
import { MainComponentModule } from '../main-component/main-component.module';
import { RouterModule } from '@angular/router';
import { AbilityModule } from '@casl/angular';
import { AngularTokenModule } from 'angular-token';

@NgModule({
  declarations: [
    ChatComponent,
    MessagesViewComponent,
    ContactsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainComponentModule,
    RouterModule,
    AbilityModule,
    AngularTokenModule,
  ],
  exports: [
    ChatComponent,
    MessagesViewComponent,
    ContactsListComponent
  ]
})
export class ChatModule { }
