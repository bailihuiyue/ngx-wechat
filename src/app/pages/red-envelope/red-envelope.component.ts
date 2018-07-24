import { Component, OnInit, Input } from '@angular/core';
import { scaleAndFade } from '../../anim/scale';
@Component({
  selector: 'app-red-envelope',
  templateUrl: './red-envelope.component.html',
  styleUrls: ['./red-envelope.component.scss'],
  animations: [scaleAndFade],
  host: { '[@scaleAndFade]': '' }
})
export class RedEnvelopeComponent implements OnInit {

  imgBack: string = "/assets/images/headers/back.png";
  backHref: string = "/index";

  imgMore: string = "s/assets/images/headers/more.png";
  hrefMore: string = "/more";
  styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px' };

  money: number;
  constructor() { }

  ngOnInit() {
    //TODO:info:footer内容到点击右上角按钮提示敬请期待就结束了
  }

}
