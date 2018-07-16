import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-envelope',
  templateUrl: './red-envelope.component.html',
  styleUrls: ['./red-envelope.component.scss']
})
export class RedEnvelopeComponent implements OnInit {

  imgBack: string = "../../../assets/images/headers/back.png";
  backHref: string = "/index";

  imgMore: string = "../../../assets/images/headers/more.png";
  hrefMore: string = "/more";
  styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px' };

  constructor() { }

  ngOnInit() {
  }

}
