import { Component, OnInit, HostBinding } from '@angular/core';
import { leftSlideAnimation, trigger2 } from '../../anim/leftSlide';
@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss'],
  animations: [leftSlideAnimation, trigger2]
})
export class ChatDetailComponent implements OnInit {

  @HostBinding('@leftSlideAnim') leftSlideAnim = "void";
  constructor() { }
  imgBack: string = "../../../assets/images/headers/back.png";
  backHref: string = "/index";

  imgMore: string = "../../../assets/images/headers/more.png";
  hrefMore: string = "/more";
  styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px' };
  ngOnInit() {
  }

}
