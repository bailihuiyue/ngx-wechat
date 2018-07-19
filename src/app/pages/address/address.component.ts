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
  contact: Array<any> = [];
  imgBaseUrl: string = "";
  anchors: Array<string> = [];
  ngOnInit() {
    this.imgBaseUrl = this.config.imgBaseUrl;
    this.contactsService$.getUContact().subscribe(data => {
      this.contact = data;
    });

    for (var i = 0; i < 26; i++) {
      this.anchors.push(String.fromCharCode((65 + i)));
    }
    console.log(this.anchors);
  }

  grey(e) {
    e.target.style.backgroundColor = "#E2E2E2";
  }
  normal(e) {
    e.target.style.backgroundColor = "#FFFFFF";
  }
}
