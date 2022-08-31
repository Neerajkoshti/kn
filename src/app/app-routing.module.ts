import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './component/contacts/contact-detail/contact-detail.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { MessagesComponent } from './component/messages/messages.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDetailComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/contacts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
