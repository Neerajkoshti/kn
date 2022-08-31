import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import {} from '@angular/core';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  contacts: any;
  ngOnInit(): void {
    this.contactService.getAll().subscribe((resp: any) => {
      this.contacts = resp;
    });
  }
  contactDetail(id: string) {}
}
