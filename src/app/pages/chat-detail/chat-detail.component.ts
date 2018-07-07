import { Component, OnInit, HostBinding } from '@angular/core';
import { leftInRightLeave } from '../../anim/translateX';
@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss'],
  animations: [leftInRightLeave],
  host: { '[@leftInRightLeave]': '' }
})
export class ChatDetailComponent implements OnInit {

  constructor() { }
  imgBack: string = "../../../assets/images/headers/back.png";
  backHref: string = "/index";

  imgMore: string = "../../../assets/images/headers/more.png";
  hrefMore: string = "/more";
  styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px' };
  ngOnInit() {
  }

}
