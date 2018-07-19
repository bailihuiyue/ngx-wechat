import { Component, OnInit, Inject } from '@angular/core';
import { leftInRightLeave } from '../../anim/translateX';
import { currentPageReducer, CurrentPage } from '../../redux/currentPage.redux';
import { ContactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  animations: [leftInRightLeave],
  host: { '[@leftInRightLeave]': '' }
})
export class AddressComponent implements OnInit {

  constructor(@Inject('BASE_CONFIG') private config, private contactsService$: ContactsService) { }
  contact: object = {};
  imgBaseUrl:string="";
  ngOnInit() {
    this.imgBaseUrl=this.config.imgBaseUrl;
    this.contactsService$.getUContact().subscribe(data => {
      this.contact = data;
      console.log(this.contact);
    });
  }
}
