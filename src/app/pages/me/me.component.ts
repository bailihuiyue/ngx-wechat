import { Component, OnInit, Inject } from '@angular/core';
import { leftInRightLeave } from '../../anim/translateX';
//TODO:bug:通讯录和发现的显示效果反了,应该根据点击的不同顺序使用不同的动画效果
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
  animations: [leftInRightLeave],
  host: { '[@leftInRightLeave]': '' }
})
export class MeComponent implements OnInit {

  constructor(@Inject('BASE_CONFIG') private config) { }
  imgBaseUrl: string = "";
  ngOnInit() {
    this.imgBaseUrl = this.config.imgBaseUrl;
  }

  grey(e) {
    if (e.target.className.indexOf("section") >= 0) {
      e.target.style.backgroundColor = "#E2E2E2";
    }
  }
  normal(e) {
    if (e.target.className.indexOf("section") >= 0) {
      e.target.style.backgroundColor = "#FFFFFF";
    }
  }
}
