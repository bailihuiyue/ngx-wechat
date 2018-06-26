import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from "../../anim/routeAnimation";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  animations:[routeAnimation]
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
