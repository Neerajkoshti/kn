import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { MessagesComponent } from './component/messages/messages.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ContactService } from '../services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ContactDetailComponent } from './component/contacts/contact-detail/contact-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MessageService } from 'src/services/message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MessagesComponent,
    SidebarComponent,
    ContactDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [ContactService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
