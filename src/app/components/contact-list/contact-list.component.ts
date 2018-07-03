import { Component, OnInit, Inject, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsService } from '../../services/contacts.service'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contact$:ContactsService) { }
  contact: Observable<any>;
  ngOnInit() {
    this.contact = this.contact$.getUContact();
    console.log(this.contact);
  }

}
