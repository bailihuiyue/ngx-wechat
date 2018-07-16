import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-red-envelope-header',
  templateUrl: './red-envelope-header.component.html',
  styleUrls: ['./red-envelope-header.component.scss']
})
export class RedEnvelopeHeaderComponent implements OnInit {

  imgBack: string = "../../../assets/images/headers/red/back.png";
  backHref: string = "back";
  s = { 'background-color': '#D85940' };
  imgMore: string = "../../../assets/images/headers/red/more.png";
  hrefMore: string = "redMore";
  red:string="red";
  number:number=0.00;
  styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px', 'background-color': '#D85940' };

  constructor() { }

  ngOnInit() {
  }

}
