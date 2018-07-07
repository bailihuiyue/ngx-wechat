import { Component, OnInit } from '@angular/core';
import { leftInRightLeave } from '../../anim/translateX';
import { currentPageReducer, CurrentPage } from '../../redux/currentPage.redux';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  animations: [leftInRightLeave],
  host: { '[@leftInRightLeave]': '' }
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
